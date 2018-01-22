Ability: Able to read and process the basic trade and instrument files supplied

  Background:
    Given the trade analyser
    And using the data files supplied

  Scenario Outline: traded volume depends on both date range and trade file contents
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the traded volume for <Instid> is <Volume> 
    And the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Instid   | Volume | Response |
    | 01/01/2017 | 31/12/2017 | IN1      | 100    | Success  |
    | 30/11/2017 | 30/11/2017 | IN1      | 100    | Success  |
    | 30/11/2017 | 31/12/2017 | IN1      | 100    | Success  |
    | 01/01/2017 | 30/11/2017 | IN1      | 100    | Success  |
    | 30/11/2017 | 30/11/2017 | IN1      | 100    | Success  |
    | 01/01/2017 | 29/11/2017 | IN1      | 0      | Success  |
    | 01/12/2017 | 01/01/2018 | IN1      | 0      | Success  |
    | 01/01/2017 | 31/12/2017 | IN2      | 0      | Success  |
    | 30/11/2017 | 31/12/2017 | IN3      | 0      | Success  |

  Scenario Outline: able to report which instruments are listed in instrument file
    When I pass a valid date range as command line arguments 
    Then I can verify whether <Instid> was <Present> in the instrument file
        
  Examples:
    | Instid   | Present | 
    | IN1      | Found   | 
    | IN2      | Found   | 
    | IN3      | Found   |     
    | IN4      | Missing | 
    | XXX      | Missing | 
    | Xyz      | Missing | 
    |          | Missing | 
    | in1      | Missing | 

  Scenario Outline: lists of traded and not traded instrument are complete
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the list of instruments traded has <Traded> rows
    And the list of instruments not traded has <NotTraded> rows
        
  Examples:
    | FromDate   | ToDate     | Traded | NotTraded | 
    | 01/01/2017 | 31/12/2017 | 1      | 2         |
    | 30/11/2017 | 30/11/2017 | 1      | 2         |
    | 30/11/2017 | 31/12/2017 | 1      | 2         |
    | 01/01/2017 | 30/11/2017 | 1      | 2         |
    | 01/01/2017 | 29/11/2017 | 0      | 3         |
    | 01/12/2017 | 01/01/2018 | 0      | 3         |

@Negative
  Scenario Outline: traded volume defaults to 0 even for invalid dates values and instruments
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the traded volume for <Instid> is <Volume> 
    And the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Instid   | Volume | Response |
    | 30/11/2017 | 31/11/2018 | In1      | 0      | Failure-ToDate not in format dd/mm/yyyy  |
    | 01/01/2017 | 31/12/2017 | XXXXX    | 0      | Success  |

