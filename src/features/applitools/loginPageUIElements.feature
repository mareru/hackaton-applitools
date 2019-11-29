@LoginUIElementsApplitools
Feature: Login UI elements exist on login page

    @V1 @Applitools
    Scenario: Login UI elements exist on login page
        When I land on the login page of "V1" app with Applitools
        Then All UI elements exist on the page

    @V2 @Applitools
    Scenario: Login UI elements exist on login page
        When I land on the login page of "V2" app with Applitools
        Then All UI elements exist on the page



