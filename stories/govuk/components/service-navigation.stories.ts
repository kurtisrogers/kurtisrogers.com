/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Service Navigation",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`service-navigation\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
Navigation item 2
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>`,
};

export const WithNavigationWithACurrentItem: Story = {
  name: "with navigation with a current item",
  render: () => `<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="page">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>`,
};

export const WithLargeNavigation: Story = {
  name: "with large navigation",
  render: () => `<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/benefits">
                                    
Benefits
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/births-deaths-marriages">
                                    
Births, deaths, marriages and care
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/business">
                                    
Business and self-employed
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/childcare-parenting">
                                    
Childcare and parenting
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/citizenship">
                                    
Citizenship and living in the UK
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/justice">
                                    
Crime, justice and the law
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/disabilities">
                                    
Disabled people
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/driving">
                                    
Driving and transport
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/education">
                                    
Education and learning
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/employing-people">
                                    
Employing people
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/environment-countryside">
                                    
Environment and countryside
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/housing-local-services">
                                    
Housing and local services
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/tax">
                                    
Money and tax
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/abroad">
                                    
Passports, travel and living abroad
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/visas-immigration">
                                    
Visas and immigration
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/working">
                                    
Working, jobs and pensions
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>`,
};

export const WithHTMLNavigationItems: Story = {
  name: "with HTML navigation items",
  render: () => `<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
<em>Navigation item 1</em>
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
<em>Navigation item 2</em>
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
<em>Navigation item 3</em>
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>`,
};

export const WithNonLinkNavigationItems: Story = {
  name: "with non-link navigation items",
  render: () => `<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <span class="govuk-service-navigation__text">
                                    
Navigation item 1
                  </span>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <span class="govuk-service-navigation__text">
                                    
<em>Navigation item 2</em>
                  </span>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <span class="govuk-service-navigation__text">
                                    
Navigation item 3
                  </span>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>`,
};

export const WithServiceName: Story = {
  name: "with service name",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <span class="govuk-service-navigation__text">Service name</span>
        </span>

      
    </div>

    </div>

  </section>`,
};

export const WithServiceLink: Story = {
  name: "with service link",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Service name
            </a>
        </span>

      
    </div>

    </div>

  </section>`,
};

export const WithLongServiceName: Story = {
  name: "with long service name",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply to receive a rare holofoil Charizard Pokémon card from the King
            </a>
        </span>

      
    </div>

    </div>

  </section>`,
};

export const WithServiceNameAndNavigation: Story = {
  name: "with service name and navigation",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>`,
};

export const Inverse: Story = {
  name: "inverse",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation govuk-service-navigation--inverse"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>`,
};

export const WithCollapseNavigationOnMobileSetToFalse: Story = {
  name: "with collapseNavigationOnMobile set to false",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>`,
};

export const WithASingleNavigationItem: Story = {
  name: "with a single navigation item",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Log out
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>`,
};

export const WithASingleNavigationItemAndCollapseNavigationOnMobileSetToTrue: Story = {
  name: "with a single navigation item and collapseNavigationOnMobile set to true",
  render: () => `<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Log out
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>`,
};
