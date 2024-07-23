// 1. bootstrap buttons are prestyled buttons styled by the bootstrap framework example <button type="button" class="btn btn-primary">Primary Button</button>
// 1A. A Bootstrap card is a flexible and extensible content container component within the Bootstrap framework. Cards can contain a variety of content types, including text, images, links, and more. They are used to create clean and modern UI elements for displaying information in a visually appealing way. Cards can be styled and customized using Bootstrap's built-in classes.
//What is GET?
//What is GET?
/*-GET is an HTTP method used to request data from a specified resource. It is one of the most common HTTP methods and is used to retrieve information from a server at the specified resource URL. The data is sent back in the response body.
**Key Characteristics of a GET Request:
Data Retrieval: Primarily used for retrieving data from the server. It should not change the state of the server (e.g., modifying data or performing any action).
Idempotent: Multiple identical GET requests should have the same effect as a single request. It is safe to repeat the request multiple times.
Cacheable: Responses to GET requests are often cacheable, meaning that the browser can store the response and reuse it for identical subsequent requests to improve performance.
Parameters in URL: Data is sent in the URL as query parameters. For example, https://api.example.com/data?param1=value1&param2=value2.
Safe Method: Since it does not modify any data on the server, it is considered a safe method.
EX.
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        console.log(data); // Handle the retrieved data
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors
    });*/
    // Bootstrap button- A Bootstrap button is a pre-styled, responsive button provided by the Bootstrap framework, which is a popular front-end framework for developing responsive and mobile-first websites. Bootstrap buttons come with a variety of built-in styles, sizes, and states that can be easily customized using classes

    //For each project, put the content returned from the API in a Bootstrap carousel.
/*Everytime the user makes a new API request, add a new slide to the carousel. The user
should be able to look through the carousel to see the results of all their requests.*/