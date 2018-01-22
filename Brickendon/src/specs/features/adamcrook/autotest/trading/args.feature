Ability: Able to accept and verify command line arguments

  Background:
    Given the trade analyser

  Scenario: Valid date range for command line arguments
    When I pass a valid date range as command line arguments 
    Then the analyser response is "Success"

  Scenario Outline: Different valid date ranges
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Response |
    | 01/01/2017 | 01/01/2017 | Success  |
    | 01/01/2017 | 31/12/2017 | Success  |
    | 31/12/2017 | 01/01/2018 | Success  |
    | 31/07/2017 | 30/05/2099 | Success  |
    | 30/11/2010 | 02/10/2100 | Success  |


  @Negative
  Scenario: Missing both command line arguments
    When the command line is empty
    Then the analyser response is "Failure-Missing date range arguments: FromDate ToDate"
	    
  @Negative
  Scenario: Missing a command line argument
    When the command line is a single value
    Then the analyser response is "Failure-Missing date range arguments: FromDate ToDate"

  @Negative
  Scenario: Invalid date range for command line arguments 
    When I pass an invalid date range as command line arguments 
    Then the analyser response is "Failure-ToDate is before FromDate"

  @Negative
  Scenario Outline: Different invalid date ranges
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Response |
    | 06/07/2017 | 07/06/2017 | Failure-ToDate is before FromDate  |
    | 01/01/2018 | 01/01/2017 | Failure-ToDate is before FromDate  | 
    | 29/02/2016 | 28/02/2016 | Failure-ToDate is before FromDate  |

  @Negative
    Scenario Outline: Different invalid date formats
      When I pass <FromDate> and <ToDate> as command line arguments 
      Then the analyser response is "<Response>"
          
    Examples:
      | FromDate   | ToDate     | Response                                    |
      | 01/02/17   | 07/06/2017 | Failure-FromDate not in format dd/mm/yyyy   |
      | 01/01/2017 | 01/01/18   | Failure-ToDate not in format dd/mm/yyyy     | 
      | 20 02 2017 | 01 03 2017 | Failure-FromDate not in format dd/mm/yyyy   |
      | 29-02-2017 | 01-03-2017 | Failure-FromDate not in format dd/mm/yyyy   |
      | 1 Mar 2017 | 01/03/2017 | Failure-FromDate not in format dd/mm/yyyy   |
      | 31/02/2017 | 01/03/2017 | Failure-FromDate not in format dd/mm/yyyy   |
      | 31/09/2017 | 01/10/2017 | Failure-FromDate not in format dd/mm/yyyy   |
      | 11/03/2017 | 04/13/2017 | Failure-ToDate not in format dd/mm/yyyy     |
      | 28/02/2017 | 29/02/2017 | Failure-ToDate not in format dd/mm/yyyy     |   