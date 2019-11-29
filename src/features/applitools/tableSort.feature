@TableSort
Feature: Transaction table sort functionality

    # Scenarios to be run with V1 application version
    @V1 @Applitools
    Scenario: Sorting Transaction table by Amount column
        Given I open login page of "V1" app
        When I sort Transaction table by Amount column
        Then Transaction table is sorted by Amount ascending and all data stayed intact

    # Scenarios to be run with V2 application version
    @V2 @Applitools
    Scenario: Sorting Transaction table by Amount column
        Given I open login page of "V2" app
        When I sort Transaction table by Amount column
        Then Transaction table is sorted by Amount ascending and all data stayed intact
