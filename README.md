# quote_api
Work In Progress improvement of a Codecademy challenge project

Currently I am trying to implement a delete method which has the following features:
  1. has its own html page
  2. removes quotes by ID from the quotes array
  3. returns a confirmation message with the quote that has been deleted 
    -or- returns an error message if a quote with the submitted ID does not exist.
    
My current issues:
  1. The fetch method in the deleteByIdButton event listener function has two .then statements, chained together. 
  The second '.then' statement uses a callback with the parameter of '({ quote })', and the console reports the following error: <br />
    `delete-quote.js:22 Uncaught (in promise)`  <br />
    `TypeError: Cannot read property 'quote' of undefined at delete-quote.js:22` <br />
  I don't understand this error -- it would seem to me that I can use any parameter I want, and that it is just a signifier to store the returned information from the previous '.then' statement, i.e. the response.json() data. 
  2. I also noticed that the delete method is half working, meaning that although an error is thrown and no confirmation message populates, a quote does get deleted from the array. However it is always the first quote in the array, it is not the quote that assigns to the ID submitted, which means there is _also_ an issue with the event listener function's read of the `('id').value` Id. 
