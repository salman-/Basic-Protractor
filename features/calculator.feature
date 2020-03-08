

Feature: Basic math operations

    Scenario: Basic math operations 
     Given I am in calculator website
     And I choose the operator as "+"
     And  I choose the operands as "3" and "7"
     When I click on Go
     Then I get the result as "10"

    Scenario Outline: Basic math operations
     Given I am in calculator website
     And I choose the operator as "<operation>"
     And  I choose the operands as "<first-operand>" and "<second-operand>"
     When I click on Go
     Then I get the result as "<result>"

    Examples:
    |operation|first-operand|second-operand|result|
    |+        |3            |4             |7     |
    |-        |8            |4             |4     |
    |*        |3            |4             |12    |
    |/        |10           |2             |5     |
    |%        |15           |6             |13     |


     