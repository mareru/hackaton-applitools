@TableSort
Feature: Transaction table sort functionality

    # Scenarios to be run with V1 application version
    @V1 @Traditional
    Scenario: Sorting Transaction table by Amount column
        Given I am logged in "V1" app
        When I click on Amount column header
        Then Transaction table is sorted by Amount ascending
        And Each row's data stayed intact

    # Scenarios to be run with V2 application version
    @V2 @Traditional
    Scenario: Sorting Transaction table by Amount column
        Given I am logged in "V2" app
        When I click on Amount column header
        Then Transaction table is sorted by Amount ascending
        And Each row's data stayed intact
