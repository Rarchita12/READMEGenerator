// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//Function to Promp the User with Questions 
function promptUser(){
// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project", "What kind of license should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using this repo?", "What does the user need to know about contributing to this repo?"];

//promt User Questions 
inquirer
.prompt([
  {
    type: "input",
    name: "username",
    message: questions[0],
    },
    {
        type: "input",
        name: "email",
        message: questions[1],
        },
        {
            type: "input",
            name: "projectName",
            message: questions[2],
            },
            {
                type: "input",
                name: "description",
                message: questions[3],
                },
                {
                    type: "list",
                    name: "license",
                    message: questions[4],
                    choices: ['MIT' , 'APACHE 2.0', 'BSD 3', 'None']
                    },
                    {
                        type: "input",
                        name: "dependencies",
                        default: "npm i",
                        message: questions[5],
                        },
                        {
                            type: "input",
                            name: "tests",
                            default: "npm test",
                            message: questions[6],
                            },
                            {
                                type: "input",
                                name: "usage",
                                message: questions[7],
                                },
                                {
                                    type: "input",
                                    name: "contribute",
                                    message: questions[8]}

]

).then(function(data){

//Write user's input to README file
 writeToFile('./README.md',data );

})
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //write to README file and call the generateMarkdown function
  fs.writeFile(``+fileName, generateMarkdown(data), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Generating README...");

  });

}

// TODO: Create a function to initialize app
function init() {
promptUser();


}

// Function call to initialize app
init();
