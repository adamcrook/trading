$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adamcrook/autotest/trading/args.feature");
formatter.feature({
  "line": 1,
  "name": "Able to accept and verify command line arguments",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments",
  "keyword": "Ability"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 84420070,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Valid date range for command line arguments",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;valid-date-range-for-command-line-arguments",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the analyser response is \"Success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 57007966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 1769785,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 24331,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Different valid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-valid-date-ranges;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I pass 01/01/2017 and 01/01/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/01/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1254964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 42314,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 26447,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Different valid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-valid-date-ranges;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2071626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 52187,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 34556,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Different valid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-valid-date-ranges;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I pass 31/12/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31/12/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 577234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 62766,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 50425,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Different valid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-valid-date-ranges;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I pass 31/07/2017 and 30/05/2099 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31/07/2017",
      "offset": 7
    },
    {
      "val": "30/05/2099",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 937962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 53245,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 30678,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Different valid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-valid-date-ranges;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I pass 30/11/2010 and 02/10/2100 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2010",
      "offset": 7
    },
    {
      "val": "02/10/2100",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1276827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 165730,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 34204,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Missing both command line arguments",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;missing-both-command-line-arguments",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the command line is empty",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the analyser response is \"Failure-Missing date range arguments: FromDate ToDate\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.the_command_line_is_empty()"
});
formatter.result({
  "duration": 39493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-Missing date range arguments: FromDate ToDate",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 53245,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 136815,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Missing a command line argument",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;missing-a-command-line-argument",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "the command line is a single value",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the analyser response is \"Failure-Missing date range arguments: FromDate ToDate\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.the_command_line_is_a_single_value()"
});
formatter.result({
  "duration": 31383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-Missing date range arguments: FromDate ToDate",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 46193,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 39493,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Invalid date range for command line arguments",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;invalid-date-range-for-command-line-arguments",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I pass an invalid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the analyser response is \"Failure-ToDate is before FromDate\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_an_invalid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 181598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate is before FromDate",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 53597,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 36319,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Different invalid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-ranges;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass 06/07/2017 and 07/06/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the analyser response is \"Failure-ToDate is before FromDate\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2017",
      "offset": 7
    },
    {
      "val": "07/06/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 213686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate is before FromDate",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 64529,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 39493,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Different invalid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-ranges;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass 01/01/2018 and 01/01/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the analyser response is \"Failure-ToDate is before FromDate\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2018",
      "offset": 7
    },
    {
      "val": "01/01/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 428782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate is before FromDate",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 173136,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 166788,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Different invalid date ranges",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-ranges;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass 29/02/2016 and 28/02/2016 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the analyser response is \"Failure-ToDate is before FromDate\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "29/02/2016",
      "offset": 7
    },
    {
      "val": "28/02/2016",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 221443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate is before FromDate",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 59240,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 31030,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 01/02/17 and 07/06/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-FromDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "01/02/17",
      "offset": 7
    },
    {
      "val": "07/06/2017",
      "offset": 20
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 205928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-FromDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 85686,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 36672,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 01/01/2017 and 01/01/18 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-ToDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/01/18",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 203460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 185476,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 49367,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 20 02 2017 and 01 03 2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-FromDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20 02 2017",
      "offset": 7
    },
    {
      "val": "01 03 2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2999714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-FromDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 177367,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 722513,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 29-02-2017 and 01-03-2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-FromDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "29-02-2017",
      "offset": 7
    },
    {
      "val": "01-03-2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 480617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-FromDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 617786,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 62765,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 1 Mar 2017 and 01/03/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-FromDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1 Mar 2017",
      "offset": 7
    },
    {
      "val": "01/03/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 289852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-FromDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 114248,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 28210,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 31/02/2017 and 01/03/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-FromDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31/02/2017",
      "offset": 7
    },
    {
      "val": "01/03/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 623074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-FromDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 110369,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 26799,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 31/09/2017 and 01/10/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-FromDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31/09/2017",
      "offset": 7
    },
    {
      "val": "01/10/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 268341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-FromDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 76165,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 32794,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 11/03/2017 and 04/13/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-ToDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "11/03/2017",
      "offset": 7
    },
    {
      "val": "04/13/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 939020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 68761,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 34556,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Different invalid date formats",
  "description": "",
  "id": "able-to-accept-and-verify-command-line-arguments;different-invalid-date-formats;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I pass 28/02/2017 and 29/02/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the analyser response is \"Failure-ToDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "28/02/2017",
      "offset": 7
    },
    {
      "val": "29/02/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 419261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 84628,
  "status": "passed"
});
formatter.uri("adamcrook/autotest/trading/data-FTSE100.feature");
formatter.feature({
  "line": 1,
  "name": "Able to read and process larger trade and instrument files e.g. FTSE100",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100",
  "keyword": "Ability"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 100848,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 48661,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for MKS is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 3233146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MKS",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 1381554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 65234,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 24331,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 19394,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 01/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for MKS is 300",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 5740607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MKS",
      "offset": 22
    },
    {
      "val": "300",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 215096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 43019,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 27152,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 17984,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/12/2017 and 15/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for MKS is 200",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "15/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 4076607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MKS",
      "offset": 22
    },
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 354027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 46193,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 28210,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 21158,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for MKS is 1500",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 5214503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MKS",
      "offset": 22
    },
    {
      "val": "1500",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 112837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 79339,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25036,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 36320,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2018 and 31/12/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for MKS is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2018",
      "offset": 7
    },
    {
      "val": "31/12/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 3726105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MKS",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 111075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 46192,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 46545,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 14809,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for OML is 5",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 3007471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OML",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 1675284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 49013,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 56419,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 15163,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 16/12/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for OML is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "16/12/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 3595284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OML",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 105080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 46545,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 47250,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 18688,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/12/2017 and 01/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for BT.A is 2000",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "01/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2192220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BT.A",
      "offset": 22
    },
    {
      "val": "2000",
      "offset": 30
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 121300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 44078,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25741,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 18336,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/12/2017 and 31/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for BT.A is 2200",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "31/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 6507902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BT.A",
      "offset": 22
    },
    {
      "val": "2200",
      "offset": 30
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 241190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 43372,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 34909,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 16926,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/12/2017 and 31/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for JMAT is 400",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "31/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2412959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JMAT",
      "offset": 22
    },
    {
      "val": "400",
      "offset": 30
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 416088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 61708,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 58534,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 27856,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-depends-on-both-date-range-and-trade-file-contents;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/12/2017 and 31/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for VOD is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "31/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 5839340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VOD",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 153389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 229201,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 54303,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 20805,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether ABF was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 2747593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABF",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 136816,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 125531,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 27151,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether NG. was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1687626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NG.",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 96265,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 76870,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 50425,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether NG.X was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 2125576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NG.X",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 30
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 103317,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 23273,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 15162,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether BT.A was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1271185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BT.A",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 30
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 106138,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25036,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 648815,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether RDSA was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1202777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RDSA",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 30
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 139284,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25741,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 24683,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether JE was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1529653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JE",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 28
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 81101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 100143,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 14457,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether III was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 2114645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "III",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 92738,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 42314,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 12694,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether IN1 was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1172452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 81807,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 21157,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 8815,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether IN2 was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1102633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 143162,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 28915,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 9873,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;able-to-report-which-instruments-are-listed-in-instrument-file;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can verify whether IN3 was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1139659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN3",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 62413,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25388,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 10226,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 01/01/2017 and 29/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 0 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 100 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "29/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1605818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 1081829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 337102,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 28914,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 9873,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 01/01/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 99 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2081852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 468981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 992265,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 21157,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 87802,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 01/01/2017 and 01/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 5 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 95 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 951714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 125885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "95",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 156914,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 37025,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 17983,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 01/01/2017 and 15/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 6 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 94 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "15/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2353015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 177719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 183714,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 132232,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 10931,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 7 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 93 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 957356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 215449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "93",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 187945,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 22215,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 7758,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 30/12/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 99 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/12/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1696441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 154094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 375538,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 23625,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 28562,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;lists-of-traded-and-not-traded-instrument-are-complete;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I pass 01/01/2018 and 04/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the list of instruments traded has 2 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the list of instruments not traded has 98 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2018",
      "offset": 7
    },
    {
      "val": "04/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1485224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 110721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 246480,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 37025,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 31383,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "traded volume defaults to 0 even for invalid dates values and instruments",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-defaults-to-0-even-for-invalid-dates-values-and-instruments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I pass 30/11/2017 and 31/11/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "the traded volume for ADM is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the analyser response is \"Failure-ToDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "31/11/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 344860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADM",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 70877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 125179,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the FTSE100 data files",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 29620,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_FTSE_data_files_supplied()"
});
formatter.result({
  "duration": 46546,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "traded volume defaults to 0 even for invalid dates values and instruments",
  "description": "",
  "id": "able-to-read-and-process-larger-trade-and-instrument-files-e.g.-ftse100;traded-volume-defaults-to-0-even-for-invalid-dates-values-and-instruments;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "the traded volume for IN1 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1311384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 123416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 38435,
  "status": "passed"
});
formatter.uri("adamcrook/autotest/trading/data-basic.feature");
formatter.feature({
  "line": 1,
  "name": "Able to read and process the basic trade and instrument files supplied",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied",
  "keyword": "Ability"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 33851,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 28210,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 762358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 103317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 35262,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 23272,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 25035,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 813135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 79692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 144574,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 29620,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 48661,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1099460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 707703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 43020,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 49367,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 18336,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 778226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 176661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 51129,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 28915,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 17278,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1257080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 74402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 48309,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 167140,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 18688,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 29/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "29/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 573708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 59239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 162556,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 83923,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 21862,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/12/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1208419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 98380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 115659,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 32088,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 64529,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN2 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2418248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 71228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 46193,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 23273,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 32441,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-depends-on-both-date-range-and-trade-file-contents;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN3 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1634027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN3",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 248948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 307130,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 47251,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 20452,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether IN1 was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 904110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 125532,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 22920,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 55361,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether IN2 was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1748629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 100849,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 30677,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 15162,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether IN3 was Found in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 663978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN3",
      "offset": 21
    },
    {
      "val": "Found",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 81102,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25036,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 29267,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether IN4 was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1785300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN4",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 181597,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 94502,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 28562,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether XXX was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 1457719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XXX",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 80749,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 33851,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 40904,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether Xyz was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 680903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xyz",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 876253,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 30678,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 585345,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether  was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 656925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 94149,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 55714,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 25036,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "able to report which instruments are listed in instrument file",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;able-to-report-which-instruments-are-listed-in-instrument-file;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I pass a valid date range as command line arguments",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can verify whether in1 was Missing in the instrument file",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyserSteps.i_pass_a_valid_date_range_as_command_line_arguments()"
});
formatter.result({
  "duration": 856507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in1",
      "offset": 21
    },
    {
      "val": "Missing",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String,String)"
});
formatter.result({
  "duration": 90270,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 29267,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 9520,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;lists-of-traded-and-not-traded-instrument-are-complete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the list of instruments not traded has 2 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1033521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 119890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 123416,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 35262,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 13399,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;lists-of-traded-and-not-traded-instrument-are-complete;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I pass 30/11/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the list of instruments not traded has 2 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 773642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 117068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 134700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 57476,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 17983,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;lists-of-traded-and-not-traded-instrument-are-complete;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I pass 30/11/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the list of instruments not traded has 2 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1244033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 87449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 76165,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 17278,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;lists-of-traded-and-not-traded-instrument-are-complete;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I pass 01/01/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the list of instruments not traded has 2 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 715107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 125179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 252121,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 69818,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 33146,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;lists-of-traded-and-not-traded-instrument-are-complete;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I pass 01/01/2017 and 29/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the list of instruments traded has 0 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the list of instruments not traded has 3 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "29/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1275064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 168904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 177367,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 23625,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 10931,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;lists-of-traded-and-not-traded-instrument-are-complete;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I pass 01/12/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the list of instruments traded has 0 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the list of instruments not traded has 3 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2062105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 558193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 316298,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 38082,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 11636,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "traded volume defaults to 0 even for invalid dates values and instruments",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-defaults-to-0-even-for-invalid-dates-values-and-instruments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I pass 30/11/2017 and 31/11/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "the traded volume for In1 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "the analyser response is \"Failure-ToDate not in format dd/mm/yyyy\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "31/11/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 383648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In1",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 946777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure-ToDate not in format dd/mm/yyyy",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 39493,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the data files supplied",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 32441,
  "status": "passed"
});
formatter.match({
  "location": "AnalyserSteps.using_the_data_files_supplied()"
});
formatter.result({
  "duration": 12342,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "traded volume defaults to 0 even for invalid dates values and instruments",
  "description": "",
  "id": "able-to-read-and-process-the-basic-trade-and-instrument-files-supplied;traded-volume-defaults-to-0-even-for-invalid-dates-values-and-instruments;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I pass 01/01/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "the traded volume for XXXXX is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 809961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XXXXX",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 126942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 28914,
  "status": "passed"
});
formatter.uri("adamcrook/autotest/trading/data-multitrades.feature");
formatter.feature({
  "line": 1,
  "name": "Able to read and process trade files with multiple trades",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades",
  "keyword": "Ability"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 59592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 159382,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 500",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1238392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "500",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 174546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 60297,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 32794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 47251,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN2 is 400",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1455604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 22
    },
    {
      "val": "400",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 220739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 40904,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 65939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 114600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 01/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN3 is 0",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "01/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 2103714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN3",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 181597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 48661,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 26094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 109311,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/11/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 100",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/11/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1502149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 90270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 57477,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 141752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 80749,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/11/2017 and 01/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 200",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/11/2017",
      "offset": 7
    },
    {
      "val": "01/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 790568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 97322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 37378,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 159030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 114248,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 02/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 200",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "02/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1285642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 127295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 31736,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 29620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 63119,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 03/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 400",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "03/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 763417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "400",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 80396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 34909,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 23272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 40551,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 30/11/2017 and 31/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN1 is 500",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "30/11/2017",
      "offset": 7
    },
    {
      "val": "31/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 678788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN1",
      "offset": 22
    },
    {
      "val": "500",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 68760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 26446,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 25388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 105785,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 01/01/2017 and 02/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN2 is 300",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2017",
      "offset": 7
    },
    {
      "val": "02/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 988738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 22
    },
    {
      "val": "300",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 88859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 22215,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 20452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 32441,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 02/12/2017 and 02/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN2 is 200",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "02/12/2017",
      "offset": 7
    },
    {
      "val": "02/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1218997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 22
    },
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 78986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 23625,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 21862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 38788,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "traded volume depends on both date range and trade file contents",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;traded-volume-depends-on-both-date-range-and-trade-file-contents;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I pass 02/12/2017 and 03/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the traded volume for IN2 is 300",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the analyser response is \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "02/12/2017",
      "offset": 7
    },
    {
      "val": "03/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 599097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IN2",
      "offset": 22
    },
    {
      "val": "300",
      "offset": 29
    }
  ],
  "location": "AnalyserSteps.the_traded_volume_for_Instid_is_Volume(String,int)"
});
formatter.result({
  "duration": 82865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 26
    }
  ],
  "location": "AnalyserSteps.the_analyser_response_is(String)"
});
formatter.result({
  "duration": 21863,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 26094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 49366,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;lists-of-traded-and-not-traded-instrument-are-complete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass 01/10/2017 and 31/10/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the list of instruments traded has 0 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the list of instruments not traded has 3 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/10/2017",
      "offset": 7
    },
    {
      "val": "31/10/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1796231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 77928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 93443,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 47956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 678788,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;lists-of-traded-and-not-traded-instrument-are-complete;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass 01/11/2017 and 30/11/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the list of instruments traded has 2 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the list of instruments not traded has 1 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/11/2017",
      "offset": 7
    },
    {
      "val": "30/11/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 717576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 82865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 83571,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 32793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 37025,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;lists-of-traded-and-not-traded-instrument-are-complete;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass 01/12/2017 and 31/12/2017 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the list of instruments traded has 2 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the list of instruments not traded has 1 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/12/2017",
      "offset": 7
    },
    {
      "val": "31/12/2017",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1199956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 427019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 662215,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the trade analyser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "using the \"trades-multiple\" trade file",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyserSteps.the_trade_analyser()"
});
formatter.result({
  "duration": 40551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trades-multiple",
      "offset": 11
    }
  ],
  "location": "AnalyserSteps.using_the_trade_trade_file(String)"
});
formatter.result({
  "duration": 64529,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "lists of traded and not traded instrument are complete",
  "description": "",
  "id": "able-to-read-and-process-trade-files-with-multiple-trades;lists-of-traded-and-not-traded-instrument-are-complete;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I pass 01/01/2018 and 31/01/2018 as command line arguments",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the list of instruments traded has 1 rows",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the list of instruments not traded has 2 rows",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/2018",
      "offset": 7
    },
    {
      "val": "31/01/2018",
      "offset": 22
    }
  ],
  "location": "AnalyserSteps.i_pass_and_as_command_line_arguments(String,String)"
});
formatter.result({
  "duration": 1612871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_traded_has_rows(int)"
});
formatter.result({
  "duration": 386116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "AnalyserSteps.the_list_of_instruments_not_traded_has_rows(int)"
});
formatter.result({
  "duration": 195350,
  "status": "passed"
});
});