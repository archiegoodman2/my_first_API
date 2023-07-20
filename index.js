//module dependencies:
const Joi = require('joi');    //Pascal naming convention
const express = require('express');
const app = express();

app.use(express.json()); //adding some middleware!!! returns middleware that is used in resource processing pipeline

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

//rest api means it follows the rest protocol: the normal functions, get, put, request, delete etc etc (google this)
app.get('/', (req, res) =>{
    res.send('Hello World!');   //callback function aka route handler
});

//define new routes by calling app.get
app.get('/api/courses', (req, res) => {
    //get list of courses from database and return them here: further task
    //but right here we are just building endpoints, so just return array of numbers
    res.send(courses);    //in the future we can replace these numbers with actual course objects
});
//but we can move all our routes related to courses to a separate file entirely

// PORT needs to be an environmental variable - variable set outside this app
const port = process.env.PORT || 3000;
//if not just use 3000 for development machine

//now we need nodemon so we dont have to keep shutting down our server when we make a change. install this, it makes it easier for dev.
app.listen(port, () => console.log(`Listening on port ${port}...`));

//in order to get a single course, we need to include the id of the course in the path
//e.g. our endpoint might be /api/courses/1

//so let's define our get request
app.get('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Course ID not found')
    res.send(course);
});      //id is our parameter here for this 


//let's define this handy function that we will use several times, to validate our data.
function validateCourse(course){
    //this syntax will look slightly different to the syntax from the video, since he is using deprecated functions.

    //create our schema,
    const schema = Joi.object({
		name: Joi.string().min(2).required()
	});
    //this is very simple schema (blueprint for our data), just to check that our name was longer than 2 characters - as all names are.

    //validate our schema. simple.
    return schema.validate(course)
} 



//handling post requests
app.post('/api/courses', (req, res) =>{

    //time to validate our inputs using a schema, from joi. A schema is just a blueprint for the data we want to be able to post.
    //Unfortunately the video tutorial used has an older version of Joi that includes a now-deprecated Validate() function!!!

    const { error } = validateCourse(req.body); //this is object destructuring, equivalent to getting result.error

    //we only send our data if it fits the schema we just defined. If not, we send a 400 error for a bad request:
     
    if (!error){
        const course = {
            id: courses.length + 1,
            name: req.body.name
        };
        
        courses.push(course);
        res.send(course);
    } else {
        res.status(400).send(error.details[0].message);    //we get the first element only, of the error array, to make it more human readable.
        return;
    }
    //RESTful protocol dictates that we must send a 400 code for this, a bad request. 
    //now we can post JSON data, and we get a nice readable error message if it isn't suitable.
});

//now let's see if we can update a course we have logged previously.
//so time for a new route handler:

//put will update resources
app.put('/api/courses/:id', (req, res) =>{
    //first we need to look up the course:
    const course = courses.find(c => c.id === parseInt(req.params.id));
      
    //if it doesn't exist, we need to return a 404:
    if (!course) return res.status(404).send('Course ID not found')    
    //then we validate against our schema - if invalid - return a 400 error:

    const { error } = validateCourse(req.body); //this is object destructuring, equivalent to getting result.error

    if (error) return res.status(400).send(error.details[0].message);

    //if all is well, we return the updated course and return a 200
    course.name = req.body.name;     //simply update course name
    res.send(course);

});

//so now our get, put and post functions all work and return nice, readable error messages.
//now for delete requests, out of our CRUD operatiosn

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
      
    //if it doesn't exist, we need to return a 404:
    if (!course) return res.status(404).send('Course ID not found')

    //if it does, delete and return what was deleted.
    const index = courses.indexOf(course);
    courses.splice(index, 1)   //go to this index, and remove 1 object

    res.send(course) 
})











