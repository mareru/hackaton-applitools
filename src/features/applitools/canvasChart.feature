@CanvasChart
Feature: Canvas chart functionality

    # Scenarios to be run with V1 application version
    @V1 @Applitools
    Scenario: User can check canvas chart data for 2017 till 2019
        Given I open login page of "V1" app
        When I Compare expenses for \2017 till \2019
        Then I can see chart with the data

    # Scenarios to be run with V2 application version
    @V2 @Applitools
    Scenario: User can check canvas chart data for 2017 till 2019
        Given I open login page of "V2" app
        When I Compare expenses for \2017 till \2019
        Then I can see chart with the data
