# trading
Test files for analysing trading volumes

Use maven for building applciation and running tests using cucumber-jvm from folder \Brickendon

  mvn test 

Refer to pom.xml for dependencies.
These will use: 
  Data files from src\data
  Java code files from src\main\java\adamcrook\autotest\trading
  Feature files from src\specs\features\adamcrook\autotest
  Test files from src\test\java\adamcrook\autotest\trading

Alternatively run from command line with two arguments for fromdate and todate (each dat expressed as dd/mm/yyyy notation)

  java -cp target\classes adamcrook.autotest.trading.Analyser 01/01/2017 31/12/2017

This assumes using named data files as supplied in the assessment (inst.txt and trades.txt) from src\data
Other versions of these files are available in this folder to provide more meaningful tests and results. 
Valid pairings are:(inst.txt and trades-multiple.txt) and (inst-FTSE100.txt and trades-FTSE100.txt).

Notes:
1) Have taken "traded volume" to be number of shares traded, rather than value of shares trades
2) Have assumed that sufficient to output just instrument codes rather than including description aswell. If this assumption was false would also store in Class Volume a map of description by instrument code. 
3) Have assumed qty in trades.txt to always be positive. This affects the simple way used to determine instruments not traded. If negative qtys are allowed, would need to track trade count : to recognize 2 trades of +100 and -100 in same instument shoud show as traded.
4) Have assumed that int is sufficient for totaling volume expected.
5) Have assumed data files always supplied in correct format for conciseness. If this is not true would add more defensive checks. 
6) Have assumed names of data file were to be hardcoded given the problem tex, otherwise would have preferred to make their names (and/or locations) optional parameters. 
7) Have assumed not needed to supply UnitTests but in reality would consider adding for both Analyser and Volume classes.
8) Have used TreeMap to ensure output lists instrument in sorted order by default.  If faster performance required would consider switch to HashMap. 

Thanks 

Adam Crook
