package adamcrook.autotest.trading;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import cucumber.api.PendingException;
import static org.junit.Assert.*;

public class AnalyserSteps {
    private Analyser analyser;
    private Volume volume;
    private String useInstFile = "src/data/inst.txt";
    private String useTradeFile = "src/data/trades.txt";

    @Given("^the trade analyser$")
    public void the_trade_analyser() throws Throwable {
        analyser = new Analyser();
    }

    @Given("^using the data files supplied$")
    public void using_the_data_files_supplied() throws Throwable {
        useInstFile = "src/data/inst.txt";
        useTradeFile = "src/data/trades.txt";
    }

    @Given("^using the \"(.*?)\" trade file$")
    public void using_the_trade_trade_file(String tradeFile) throws Throwable {
        useTradeFile = "src/data/"+tradeFile+".txt";
    }

    @Given("^using the FTSE100 data files$")
    public void using_the_FTSE_data_files_supplied() throws Throwable {
        useInstFile = "src/data/inst-FTSE100.txt";
        useTradeFile = "src/data/trades-FTSE100.txt";
    }

    @When("^I pass a valid date range as command line arguments$")
    public void i_pass_a_valid_date_range_as_command_line_arguments() throws Throwable {
       String[] useArgs = new String[2];
       useArgs[0] = "01/01/2017";
       useArgs[1] = "31/12/2017";
       volume = analyser.run(useArgs,useInstFile,useTradeFile);
    }

    @When("^I pass an invalid date range as command line arguments$")
    public void i_pass_an_invalid_date_range_as_command_line_arguments() throws Throwable {
        String[] useArgs = new String[2];
        useArgs[0] = "01/01/2017";
        useArgs[1] = "31/12/2016";
        volume = analyser.run(useArgs,useInstFile,useTradeFile);
    }

    @When("^the command line is empty$")
    public void the_command_line_is_empty() throws Throwable {
        String[] useArgs = new String[0];
        volume = analyser.run(useArgs,useInstFile,useTradeFile);
    }

    @When("^the command line is a single value$")
    public void the_command_line_is_a_single_value() throws Throwable {
        String[] useArgs = new String[1];
        useArgs[0] = "01/01/2017";
        volume = analyser.run(useArgs,useInstFile,useTradeFile);
    }

    @When("^I pass (.*?) and (.*?) as command line arguments$")
    public void i_pass_and_as_command_line_arguments(String fromDate, String toDate) throws Throwable {
        String[] useArgs = new String[2];
        useArgs[0] = fromDate;
        useArgs[1] = toDate;
        volume = analyser.run(useArgs,useInstFile,useTradeFile);
    }

    @Then("^the traded volume for (.*?) is (.*?)$")
    public void the_traded_volume_for_Instid_is_Volume(String instid, int tradedVolume) throws Throwable {
        assertEquals(tradedVolume, volume.showInstrumentVolume(instid));
    }

    @Then("^the analyser response is \"(.*?)\"$")
    public void the_analyser_response_is(String response) throws Throwable {
        assertEquals(response, volume.getStatus());
    }

    @Then("^I can verify whether (.*?) was (.*?) in the instrument file$")
    public void i_can_verify_whether_Instid_was_Present_in_the_instrument_file(String instid, String present) throws Throwable {
        assertEquals(present.equalsIgnoreCase("Found"), volume.isInstrumentPresent(instid));
    }

    @Then("^the list of instruments traded has (\\d+) rows$")
    public void the_list_of_instruments_traded_has_rows(int rowCount) throws Throwable {
        String allTradedInstList;
        int newlines = 0;
        allTradedInstList = volume.showTradedInstrumentsVolume();
        for (int i=0; i < allTradedInstList.length(); newlines += (allTradedInstList.charAt(i++)=='\n' ? 1:0));
        assertEquals(rowCount, newlines);
    }

    @Then("^the list of instruments not traded has (\\d+) rows$")
    public void the_list_of_instruments_not_traded_has_rows(int rowCount) throws Throwable {
        String allTradedInstList;
        int newlines = 0;
        allTradedInstList = volume.showUntradedInstruments();
        for (int i=0; i < allTradedInstList.length(); newlines += (allTradedInstList.charAt(i++)=='\n' ? 1:0));
        assertEquals(rowCount, newlines);
    }
}