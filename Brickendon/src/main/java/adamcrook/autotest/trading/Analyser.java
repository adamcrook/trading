package adamcrook.autotest.trading;

import java.util.StringTokenizer;
import java.time.*;
import java.time.format.*;
import java.io.*;

public class Analyser {


    public Volume run(String[] myArgs) {
        // run using default supplied data files
        return run(myArgs, "src/data/inst.txt", "src/data/trades.txt");
    }

    /**
     * Return volume details for trades within date range
     *
     * @param string array of from and to dates xpected to be in format dd/mm/yyyy
     * @param file with list of instruments
     * @param file with list of trades
     * @return Volume
     */


    public Volume run(String[] myArgs, String instFile, String tradeFile) {
        Volume volume;

        // Verify command line args supplied for FromDate and ToDate
        if (myArgs.length != 2) {
            return new Volume("Failure-Missing date range arguments: FromDate ToDate");
        }

        // Verify command line args are valid dates
        LocalDate dt1, dt2;
        dt1 = analyseDate(myArgs[0]);
        if (dt1 == null) {
            return new Volume("Failure-FromDate not in format dd/mm/yyyy");
        }
        dt2 = analyseDate(myArgs[1]);
        if (dt2 == null) {
            return new Volume("Failure-ToDate not in format dd/mm/yyyy");
        }

        // Verify dates are a valid range (including a single day)
        if (dt2.isBefore(dt1)) {
            return new Volume("Failure-ToDate is before FromDate");
        }

        // Verify instFile and trade files exist
        File fileInstFile = new File(instFile);
        File fileTradeFile = new File(tradeFile);

        if (!fileInstFile.exists()) {
            return new Volume("Failure-Instrument file missing");
        }

        if (!fileTradeFile.exists()) {
            return new Volume("Failure-Trade file missing");
        }

        // Able to read files to obtain trade volume details
        volume = new Volume("Success", instFile, tradeFile, myArgs[0], myArgs[1]);

        // If no issues so far then read list of known instruments
        if (volume.getStatus().equals("Success")) {
            try {
                BufferedReader inst = new BufferedReader(new FileReader(fileInstFile));
                String header = inst.readLine();   // skip for now - TODO? check format
                String line = inst.readLine();
                while (line != null) {
                    String[] data = line.split(",");

                    // Inst ID     = data[0]
                    // Inst desc   = data[1]
                    volume.putInstrument(data[0]);
                    line = inst.readLine();
                }
                inst.close();
            } catch (FileNotFoundException ex) {
                System.out.println(ex.toString());
                volume.setStatus("Failure-Instrument file missing");
             } catch (IOException ex) {
                System.out.println(ex.toString());
                volume.setStatus("Failure-Instrument file IO error");
             }
        }

        // If no issues so far then parse trade file
        if (volume.getStatus().equals("Success")) {
            try {
                LocalDate tradeDate;

                BufferedReader trade = new BufferedReader(new FileReader(fileTradeFile));
                String header = trade.readLine();
                String line = trade.readLine();
                while (line != null) {
                    String[] data = line.split(",");

                    // TradeID     = data[0]
                    // TradeDtTime = data[1]
                    // InID        = data[2]
                    // qty         = data[3]
                    // price       = data[4]
                    // amount      = data[5]
                    // trader      = data[6]

                    tradeDate = analyseDate(data[1].substring(0,10));  //strip-off time info

                    // Verify trade within range data[1]
                    if (!(tradeDate.isBefore(dt1) || tradeDate.isAfter(dt2))) {
                        volume.addInstrumentVolume(data[2], Integer.parseInt(data[3]));
                    } else {
                        // System.out.println("Ignoring trade " + data[0]);
                    }
                    line = trade.readLine();
                }
                trade.close();
            } catch (FileNotFoundException ex) {
                System.out.println(ex.toString());
                volume.setStatus("Failure-Trade file missing");
            } catch (IOException ex) {
                System.out.println(ex.toString());
                volume.setStatus("Failure-Trade file IO error");
            }
        }
        return(volume);
    }

    /**
     * Return string parsed to local date
     *
     * @param input string expected to be in format dd/mm/yyyy
     * @return LocalDate
     */
    private LocalDate analyseDate(String input) {
        LocalDate date;

        // If string wrong length, then unsupported date format.
        if (input.length() != 10)
            return null;

        // parse string to ensure valid date
        try {
            date = LocalDate.parse(input, DateTimeFormatter.ofPattern( "dd/MM/uuuu" )
                                                           .withResolverStyle(ResolverStyle.STRICT));
        } catch (Exception ex) {
            System.out.println(ex.toString());
            return null;
        }

        return date;
    }

    public static void main(String[] args) {
        Analyser analyser = new Analyser();

        Volume volume = analyser.run(args);

        System.out.println("Status: " + volume.getStatus());
        for (String arg: args) {
            System.out.println("Argument: " + arg);
        }
        System.out.println("Used Instrument File: " + volume.getInputInstrumentFile());
        System.out.println("Used Trade File: " + volume.getInputTradeFile());
        System.out.println("Traded Instruments,Volume\r\n" + volume.showTradedInstrumentsVolume());
        System.out.println("Untraded Instruments\r\n" + volume.showUntradedInstruments());
    }
}