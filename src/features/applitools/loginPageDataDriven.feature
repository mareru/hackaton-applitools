@LoginDataDrivenApplitools
Feature: Login page functionality

    # Scenarios to be run with V1 application version
    @V1
    Scenario: User can log in providing the username and password
        Given I land on the login page of "V1" app with Applitools
        Then After providing credentials, I should be successfully logged in

    @V1
    Scenario: User cannot log in providing just username
        Given I land on the login page of "V1" app with Applitools
        Then Providing just username will throw an error

#    @V1
#    Scenario: User cannot log in providing just password
#        Given I land on the login page of "V1" app with Applitools
#        Then Providing just password will throw an error
#
#    @V1
#    Scenario: User cannot log in when username and password are not provided
#        Given I land on the login page of "V1" app with Applitools
#        Then Not providing credentials will throw an error

    # Scenarios to be run with V2 application version


