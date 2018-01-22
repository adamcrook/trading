Ability: Able to read and process trade files with multiple trades 

  Background:
    Given the trade analyser
    And using the "trades-multiple" trade file

  Scenario Outline: traded volume depends on both date range and trade file contents
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the traded volume for <Instid> is <Volume> 
    And the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Instid   | Volume | Response |
    | 01/01/2017 | 01/01/2018 | IN1      | 500    | Success  |
    | 01/01/2017 | 01/01/2018 | IN2      | 400    | Success  |
    | 01/01/2017 | 01/01/2018 | IN3      | 0	  | Success  |
    | 01/11/2017 | 30/11/2017 | IN1      | 100    | Success  |
    | 01/11/2017 | 01/12/2017 | IN1      | 200    | Success  |
    | 30/11/2017 | 02/12/2017 | IN1      | 200    | Success  |
    | 30/11/2017 | 03/12/2017 | IN1      | 400    | Success  |
    | 30/11/2017 | 31/01/2018 | IN1      | 500    | Success  |
    | 01/01/2017 | 02/12/2017 | IN2      | 300    | Success  |
    | 02/12/2017 | 02/12/2017 | IN2      | 200    | Success  |
    | 02/12/2017 | 03/12/2017 | IN2      | 300    | Success  |

  Scenario Outline: lists of traded and not traded instrument are complete
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the list of instruments traded has <Traded> rows
    And the list of instruments not traded has <NotTraded> rows
        
  Examples:
    | FromDate   | ToDate     | Traded | NotTraded | 
    | 01/10/2017 | 31/10/2017 | 0      | 3         |
    | 01/11/2017 | 30/11/2017 | 2      | 1         |
    | 01/12/2017 | 31/12/2017 | 2      | 1         |
    | 01/01/2018 | 31/01/2018 | 1      | 2         |
