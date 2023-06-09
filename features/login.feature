Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form with valid credencials
        Then I should see the home page

    Scenario Outline: Try to login with invalid credentials
        Given I visit a login page
        When  I fill the login form with "<username>" and "<password>"
        Then I wait for 3 seconds

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | locked_out_user         | secret_sauce |
            | problem_user            | secret_sauce |