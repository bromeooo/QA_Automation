package steps;

import cucumber.api.java.en.*;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class PostSteps {

    private RequestSpecification request;
    private Response response;

    @Given("the posts endpoint is available")
    public void the_posts_endpoint_is_available() {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
        RestAssured.basePath = "/posts";
    }

    @When("I request all Post items")
    public void i_request_all_Post_items() {
        request = given().contentType(ContentType.JSON);
        response = request.when().get();
    }

    @Then("all Post items should be displayed")
    public void all_Post_items_should_be_displayed() {
        response.then().statusCode(200);
    }

    @When("I add a new Post item with title {string} and body {string}")
    public void i_add_a_new_Post_item(String title, String body) {
        Map<String, Object> params = new HashMap<>();
        params.put("title", title);
        params.put("body", body);

        request = given().contentType(ContentType.JSON).body(params);
        response = request.when().post();
    }

    @Then("the new Post item should be added successfully")
    public void the_new_Post_item_should_be_added_successfully() {
        response.then().statusCode(201).body("title", is("Testing"));
    }

    @When("I delete the Post item with id {int}")
    public void i_delete_the_Post_item(int id) {
        request = given().contentType(ContentType.JSON);
        response = request.when().delete("/" + id);
    }

    @Then("the Post item should be deleted successfully")
    public void the_Post_item_should_be_deleted_successfully() {
        response.then().statusCode(200);
    }
}
