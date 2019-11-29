@LoginDataDriven
Feature: Login page functionality

    # Scenarios to be run with V1 application version
    @V1 @Traditional
    Scenario: User can log in providing the username and password
        Given I land on the login page of "V1" app
        When I enter username
        And I enter password
        And I click login button
        Then I should be logged in to the application "V1"

    @V1 @Traditional
    Scenario: User cannot log in providing just username
        Given I land on the login page of "V1" app
        When I enter username
        And I do not enter password
        And I click login button
        Then An error is thrown for the missing password

    @V1 @Traditional
    Scenario: User cannot log in providing just password
        Given I land on the login page of "V1" app
        When I enter password
        And I do not enter username
        And I click login button
        Then An error is thrown for the missing username

    @V1 @Traditional
    Scenario: User cannot log in when username and password are not provided
        Given I land on the login page of "V1" app
        When I do not enter username
        And I do not enter password
        And I click login button
        Then An error is thrown for the missing username and password

    # Scenarios to be run with V2 application version
    @V2 @Traditional
    Scenario: User can log in providing the username and password
        Given I land on the login page of "V2" app
        When I enter username
        And I enter password
        And I click login button
        Then I should be logged in to the application "V2"

    @V2 @Traditional
    Scenario: User cannot log in providing just username
        Given I land on the login page of "V2" app
        When I enter username
        And I do not enter password
        And I click login button
        Then An error is thrown for the missing password

    @V2 @Traditional
    Scenario: User cannot log in providing just password
        Given I land on the login page of "V2" app
        When I enter password
        And I do not enter username
        And I click login button
        Then An error is thrown for the missing username

    @V2 @Traditional
    Scenario: User cannot log in when username and password are not provided
        Given I land on the login page of "V2" app
        When I do not enter username
        And I do not enter password
        And I click login button
        Then An error is thrown for the missing username and password


