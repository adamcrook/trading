package adamcrook.autotest.trading;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.After;

public class AnalyserTest {
    private Analyser analyser;
    private Volume volume;

    @Before
    public void setUp() {
        analyser = new Analyser();
    }

   //TODO? Unit tests
    @Test
    public void analyserTest() {
        //...
    }


    @After
    public void tearDown() {
        analyser = null;
    }
}