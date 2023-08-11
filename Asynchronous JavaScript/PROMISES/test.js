// Define a function named "fetchData" that takes a callback function as a parameter

function fetchData(callback) {

    // Use setTimeout to simulate an asynchronous operation

    setTimeout(function() {

        const data = "Fetched data"; // Simulated fetched data

        callback(data); // Call the provided callback function with the fetched data

    }, 1000); // Wait for 1000 milliseconds (1 second)

}


// Call the fetchData function and provide an anonymous callback function

fetchData(function(result) {

    console.log(result); // Log the result (fetched data) to the console
});
