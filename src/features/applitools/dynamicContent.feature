@DynamicContent
Feature: Display ad images validation on Dashboard page

    # Scenarios to be run with V1 application version
    @V1 @Applitools
    Scenario: I can see Ad images on Dashboard page
        Given I open login page of "V1" app with display ad images
        Then I can see ad images displayed on the page

    # Scenarios to be run with V2 application version
    @V2 @Applitools
    Scenario: I can see Ad images on Dashboard page
        Given I open login page of "V2" app with display ad images
        Then I can see ad images displayed on the page
