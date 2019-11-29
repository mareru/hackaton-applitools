@DynamicContent
Feature: Display ad images validation on Dashboard page

    # Scenarios to be run with V1 application version
    @V1 @Traditional
    Scenario: I can see first Ad image on Dashboard page
        Given I am logged in "V1" app with display ad images
        Then I can see first ad image on the page

    # Scenarios to be run with V1 application version
    @V1 @Traditional
    Scenario: I can see second Ad image on Dashboard page
        Given I am logged in "V1" app with display ad images
        And I can see second ad image on the page

    # Scenarios to be run with V2 application version
    @V2 @Traditional
    Scenario: I can see first Ad image on Dashboard page
        Given I am logged in "V2" app with display ad images
        Then I can see first ad image on the page

    # Scenarios to be run with V2 application version
    @V2 @Traditional
    Scenario: I can see second Ad image on Dashboard page
        Given I am logged in "V2" app with display ad images
        And I can see second ad image on the page
