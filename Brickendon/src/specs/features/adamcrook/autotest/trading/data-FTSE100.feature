Ability: Able to read and process larger trade and instrument files e.g. FTSE100 

  Background:
    Given the trade analyser
    And using the FTSE100 data files

  Scenario Outline: traded volume depends on both date range and trade file contents
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the traded volume for <Instid> is <Volume> 
    And the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Instid   | Volume | Response |
    | 01/01/2017 | 30/11/2017 | MKS      | 100    | Success  |
    | 01/01/2017 | 01/12/2017 | MKS      | 300    | Success  |
    | 01/12/2017 | 15/12/2017 | MKS      | 200    | Success  |
    | 01/01/2017 | 31/12/2017 | MKS      | 1500   | Success  |
    | 01/01/2018 | 31/12/2018 | MKS      | 0      | Success  |
    | 01/01/2017 | 31/12/2017 | OML      | 5      | Success  |
    | 16/12/2017 | 31/12/2017 | OML      | 0      | Success  |
    | 01/12/2017 | 01/12/2017 | BT.A     | 2000   | Success  |
    | 01/12/2017 | 31/01/2018 | BT.A     | 2200   | Success  |
    | 01/12/2017 | 31/01/2018 | JMAT     | 400    | Success  |
    | 01/12/2017 | 31/01/2018 | VOD      | 0      | Success  |

  Scenario Outline: able to report which instruments are listed in instrument file
    When I pass a valid date range as command line arguments 
    Then I can verify whether <Instid> was <Present> in the instrument file
        
  Examples:
    | Instid   | Present | 
    | ABF      | Found   | 
    | NG.      | Found   | 
    | NG.X     | Missing | 
    | BT.A     | Found   |     
    | RDSA     | Found   |     
    | JE       | Found   | 
    | III      | Found   | 
    | IN1      | Missing | 
    | IN2      | Missing | 
    | IN3      | Missing | 

  Scenario Outline: lists of traded and not traded instrument are complete
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the list of instruments traded has <Traded> rows
    And the list of instruments not traded has <NotTraded> rows
        
  Examples:
    | FromDate   | ToDate     | Traded | NotTraded | 
    | 01/01/2017 | 29/11/2017 | 0      | 100       |
    | 01/01/2017 | 30/11/2017 | 1      | 99        |
    | 01/01/2017 | 01/12/2017 | 5      | 95        |
    | 01/01/2017 | 15/12/2017 | 6      | 94        |
    | 01/01/2017 | 31/12/2017 | 7      | 93        |
    | 30/12/2017 | 01/01/2018 | 1      | 99        |
    | 01/01/2018 | 04/01/2018 | 2      | 98        |

@Negative
  Scenario Outline: traded volume defaults to 0 even for invalid dates values and instruments
    When I pass <FromDate> and <ToDate> as command line arguments 
    Then the traded volume for <Instid> is <Volume> 
    And the analyser response is "<Response>"
        
  Examples:
    | FromDate   | ToDate     | Instid   | Volume | Response |
    | 30/11/2017 | 31/11/2018 | ADM      | 0      | Failure-ToDate not in format dd/mm/yyyy  |
    | 01/01/2017 | 31/12/2017 | IN1      | 0      | Success  |

