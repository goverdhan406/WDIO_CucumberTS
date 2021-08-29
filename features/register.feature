Feature: Chai Page
  Scenario Outline: Test Chai form

    Given I am on practice page "http://www.practiceselenium.com/practice-form.html"
    Then I validate the page header "Practice Form"
    When I enter with firstname <fname> and lastname <lname>
    And I select gender <gender> years <yrs> favourite chai <favchai> and reason <reason>
    And I select continent <continet> and commands <command>
    And I click on Submit button
    Then I validate the page header "we're passionate about tea."

    Examples:
      | fname | lname  | gender | yrs | favchai | reason             | continet | command       |
      | Emma  | watson | Female | 6   | Red Tea | Harmless Addiction | Europe   | Wait Commands |

