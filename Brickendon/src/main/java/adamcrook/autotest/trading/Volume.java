package adamcrook.autotest.trading;
import java.util.TreeMap;

public class Volume {
    private String status;

    private String inputInstrumentFile;
    private String inputTradeFile;

    private String inputFromDate;
    private String inputToDate;

    private TreeMap<String, Integer> instrumentQuantity;

    public void setStatus(String status) {
        this.status = status;
    }

    public void setTradeFile(String useFile) {
        this.inputTradeFile = useFile;
    }

    public void setInputFromDate(String useDate) {
        this.inputFromDate = useDate;
    }

    public void setInputToDate(String useDate) {
        this.inputToDate = useDate;
    }

    public Volume() {
        this.instrumentQuantity = new TreeMap();
    }

    public Volume(String status) {
        this.status = status;
        this.instrumentQuantity = new TreeMap();
    }

    public Volume(String instrumentFile, String tradeFile) {
        this.inputInstrumentFile = instrumentFile;
        this.inputTradeFile = tradeFile;
        this.instrumentQuantity = new TreeMap();
    }

    public Volume(String status, String inputInstrumentFile, String inputTradeFile, String inputFromDate, String inputToDate) {
        this.status = status;

        this.inputInstrumentFile = inputInstrumentFile;
        this.inputTradeFile = inputTradeFile;

        this.instrumentQuantity = new TreeMap();
    }

    public String getStatus() {
        return status;
    }

    public String getInputInstrumentFile() {
        return inputInstrumentFile;
    }

    public String getInputTradeFile() {
        return inputTradeFile;
    }

    public int showInstrumentVolume(String instrument) {
        int tradedVolume = 0;
        if (instrumentQuantity.containsKey(instrument)) {
            tradedVolume = instrumentQuantity.get(instrument);
        }
        return tradedVolume;
    }

    public boolean isInstrumentPresent(String instrument) {
        return instrumentQuantity.containsKey(instrument);
    }

    public void putInstrument(String instrument) {
        // put new instrument with 0 volume into table of known instruments
        if (!instrumentQuantity.containsKey(instrument)) {
            instrumentQuantity.put(instrument,0);
        } else {
            setStatus("Warning-Instrument File has duplicate entries e.g."+instrument);
        }
    }

    public void addInstrumentVolume(String instrument, int vol) {
        // add volume to running total for known instrument
        if (instrumentQuantity.containsKey(instrument)) {
            instrumentQuantity.put(instrument, instrumentQuantity.get(instrument) + vol);
        } else {
            setStatus("Warning-Trades File has unknown instruments e.g."+instrument);
        }
    }

    private String showVolume(boolean showTraded, boolean showUntraded) {
        String output = "";
        int instVol;

        for (String inst : instrumentQuantity.keySet()) {
            instVol = instrumentQuantity.get(inst);
            if ((instVol != 0) && showTraded){
                output = output + inst + "," + instVol + "\r\n";
            } else if ((instVol == 0) && showUntraded) {
                output = output + inst + "\r\n";
            }
        }
        return output;
    }

    public String showTradedInstrumentsVolume() {
        return showVolume(true, false);
    }

    public String showUntradedInstruments() {
        return showVolume(false, true);
    }
}