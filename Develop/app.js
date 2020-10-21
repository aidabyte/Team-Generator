const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMember = [];
// questions for manager
function getManager() {
inquirer.prompt([
    {
            message: "What is the managers name?",
            type: "input",
            name: "name"
        },
        {
            message: "What is the managers id?",
            type: "input",
            name: "id"
        },
        {
            message: "What is the managers email address?",
            type: "input",
            name: "email"
        },
        {
            message: "What is the managers office number?",
            type: "input",
            name: "officeNumber"
        }
        
    ]).then(function({name, id, email, officeNumber}) {
        const manager = (name, id, email,officeNumber);
       
        // adds manager to team array
        teamMember.push(manager);

        generateTeam();
   
        
});
}

// set up a function to make a team
function generateTeam() {
    inquirer.prompt([
        {
            message: "What role does your next employee have?",
            type: "list",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"]
        }


    ]).then(function(response){
        if (response.role === "engineer"){
            getEngineer();
        } else if (response.role === "intern"){
            getIntern();

        }else (createATeam());


        })
    
    }



getManager();

// ask engineer questions
function getEngineer() {
    inquirer.prompt([
        {
                message: "What is the engineers name?",
                type: "input",
                name: "engineerName"
            },
            {
                message: "What is the engineers id?",
                type: "input",
                name: "engineerId"
            },
            {
                message: "What is the engineers email address?",
                type: "input",
                name: "engineerEmail"
            },
            {
                message: "What is the engineers github username?",
                type: "input",
                name: "engineerGit"
            }


        ]).then(function({engineerName, engineerId, engineerEmail, engineerGit}) {
            const engineer = (engineerName, engineerId, engineerEmail,engineerGit);
            
            // adds manager to team array
            teamMember.push(engineer);
    
            generateTeam();
            }
            )}

    function getIntern() {
        inquirer.prompt([
            {
                message: "What is the interns name?",
                type: "input",
                name: "internName"
            },
            {
                message: "What is the interns id?",
                type: "input",
                name: "internId"
            },
            {
                message: "What is the interns email address?",
                type: "input",
                name: "internEmail"
            },
            {
                message: "What is the school that the intern attended?",
                type: "input",
                name: "internSchool"
            }
            
        ]).then(function({internName, internId, internEmail, internSchool}) {
            const intern = (internName, internId, internEmail,internSchool);
        
        
            // adds manager to team array
            teamMember.push(intern);
    
            generateTeam();
            }
            )}   
      
        
        

      
   

























// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
