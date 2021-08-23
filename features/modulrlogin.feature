Feature: The modulr finance Sandbox login page
    @test1
    Scenario Outline: As a user, I will see error message if username is empty

        Given I am on the login page
        When I enter password as "Password" & Click Sign In button
        Then I should see a flash message under username saying <message>

        Examples:
            | message                 |
            | This field is required  |
            | This field is required1 |
    @test2
    Scenario Outline: As a user, I will see error message if password is empty

        Given I am on the login page
        When I enter username as "username" & Click Sign In button
        Then I should see a flash message under password saying <message>

        Examples:
            | message                 |
            | This field is required  |
            | This field is required1 |
    @test3
    Scenario Outline: As a user, I will see error message if incorrect username or password is entered along with warning

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see a flash message saying <message1>

        Examples:
            | username | password | message1                               |
            | correct  | wrong    | The username or password is incorrect. |
            | wrong    | correct  | The username or password is incorrect. |
    @test4
    Scenario Outline: As a user, I will be able to login with correct username and password

        Given I am on the login page
        When I login with <username> and <password>
        Then SignIn button must be disabled
        And login must be successful

        Examples:
            | username                       | password     |
            | GoverdhanReddy.ThatiLaxmanna34 | Linlith1986! |
    @test5
    Scenario: As a user, I will be able to navigate to forgot password screen

        Given I am on the login page
        When I click on Forgotten Password link
        Then navigate to Reset access page