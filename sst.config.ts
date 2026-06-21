/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "kurtisrogers",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("Vpc", { nat: "ec2" });
    const cluster = new sst.aws.Cluster("Cluster", { vpc });

    const smtpHost = new sst.Secret("SmtpHost");
    const smtpPort = new sst.Secret("SmtpPort", "587");
    const smtpUser = new sst.Secret("SmtpUser");
    const smtpPass = new sst.Secret("SmtpPass");
    const contactTo = new sst.Secret("ContactTo");
    const contactFrom = new sst.Secret("ContactFrom");

    const web = new sst.aws.Service("Web", {
      cluster,
      cpu: "0.25 vCPU",
      memory: "0.5 GB",
      loadBalancer: {
        ports: [{ listen: "80/http", forward: "3000/http" }],
      },
      environment: {
        NODE_ENV: "production",
        PORT: "3000",
        SMTP_HOST: smtpHost.value,
        SMTP_PORT: smtpPort.value,
        SMTP_USER: smtpUser.value,
        SMTP_PASS: smtpPass.value,
        CONTACT_TO: contactTo.value,
        CONTACT_FROM: contactFrom.value,
      },
      health: {
        command: [
          "CMD-SHELL",
          "node -e \"fetch('http://localhost:3000').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))\"",
        ],
        interval: "30 seconds",
        timeout: "5 seconds",
        retries: 3,
        startPeriod: "60 seconds",
      },
      dev: {
        command: "npm run dev",
        directory: ".",
        url: "http://localhost:3000",
      },
    });

    return {
      url: web.url,
    };
  },
});
