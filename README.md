# my_first_API
Coding my first, very basic, RESTful API, using the Express.js and Joi frameworks, to simply handle get, put, delete and post requests to a very simple JSON database.

To use, the following packages and frameworks must be installed, ideally in this order:
- node.js
- express.js
- JOI
- Insomnia (reccomended, to test the API with various types of request)

Installation and dependencies (Windows):
1. Once node is installed, create a new folder to work in. Navigate to this folder via the command line, and run: npm init --yes.
2. Next, run: npm i express
3. Next, run: npm i joi
4. Next, navigate to your new folder in whichever programme you prefer: I prefer VSCode.
5. Create a new file (I named mine index.js)
6. Copy and paste in the code
7. Install Insomnia and use this programme to test the API. An alternative would be Bootstrap, and the 'curl' command also works from the command line, in windows.

This API borrows heavily from the coding project detailed in the tutorial found at https://www.youtube.com/watch?v=pKd0Rpw7O48 .
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


5. Create a new file (I named mine index.js)
6. Copy and paste in the code
7. Install Insomnia and use this programme to test the API. An alternative would be Bootstrap, and the 'curl' command also works from the command line, in windows.
