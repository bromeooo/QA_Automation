package support;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber-reports" }, features = { "api/java/src/test/features" }, glue = {
        "steps/" }, tags = { "@posts" })
public class CucumberRunner {
}
