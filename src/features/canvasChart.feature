@CanvasChart
Feature: Canvas chart functionality

    # Scenarios to be run with V1 application version
    @V1
    Scenario: User can check canvas chart data for 2017 and 2018
        Given I am logged in "V1" app
        When I click Compare Expenses button
        Then I can see chart with data for 2017 and 2018

    @V1
    Scenario: User can check canvas chart data for 2019
        Given I am logged in "V1" app
        And I land on chart page of "V1" app
        When I click Show data for next year button
        Then I can see chart with data for 2019

    # Scenarios to be run with V2 application version
    @V2
    Scenario: User can check canvas chart data for 2017 and 2018
        Given I am logged in "V2" app
        When I click Compare Expenses button
        Then I can see chart with data for 2017 and 2018

    @V2
    Scenario: User can check canvas chart data for 2019
        Given I am logged in "V2" app
        And I land on chart page of "V2" app
        When I click Show data for next year button
        Then I can see chart with data for 2019
