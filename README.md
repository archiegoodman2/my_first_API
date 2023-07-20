# my_first_API
Coding my first, very basic, RESTful API, using the Express.js and Joi frameworks, to simply handle get, put, delete and post requests to a very simple JSON database.

This API borrows heavily from the coding project detailed in the tutorial found at https://www.youtube.com/watch?v=pKd0Rpw7O48
However, it is slightly different because some functions used in the video have since been changed in recent updates, notably the validate() function. I also added liberal use of comments for my own notes and learning purposes.

The function of this API is as a learning resource primarily. It can handle basic requests to modify and view a JSON database. 
It follows the REST conventions and Pascal naming conventions. 

Skills used (Javascript):
 - the Joi package
 - Node.js and the Express.js API framework
 - extensive use of arrow functions and functional programming in general, but no use of OOP
 - diverse use of if/else logic and syntax
 - object destructuring notation, for code readability
 - error handling and very very limited edge case testing (because it's such a simple API)

Ideas for further projects:
Since this is such a simple API it could be used in a huge variety of projects, since it simply posts to a JSON database. One idea would be using it for updating and managing a stock information database for the inventory of a small business, as the inventory of a shop is unlikely to need a more advanced database (e.g. a relational one) since almost no data/trend analysis is needed.
