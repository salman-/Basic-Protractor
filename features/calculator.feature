

Feature: Four basic operations

    Scenario: Check 4 basic poerations in calculator 
     Given I am in calculator website
      And I choose the operator as "+"
      And  I choose the operands as "2" and "5"
      When I click on Go
      Then I get the result as "7"
     