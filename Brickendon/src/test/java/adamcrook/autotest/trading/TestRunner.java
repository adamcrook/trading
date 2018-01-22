import org.junit.runner.RunWith;

import cucumber.api.junit.*;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@Cucumber.Options(
	format = {"pretty",
	"html:target/test-report",
	"json:target/test-report.json",
	"junit:target/test-report.xml"},
	features="src/specs/features"
)
public class TestRunner { }