const inquire = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/gnerateHTML');

const workTeamArray = [];
// prompts for Team members
const role = [
    {
        type: 'list',
        name: 'role',
        message: 'Select the new team member role you wish to create',
        choices: ["Engineer", "Intern", "Manager"]
    }

]
//general employee prompts
const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter team member's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter team member's id number"
    },
    {
        type:'input',
        name: 'email',
        message: "Enter team member's email"
    }   
]
//engineer prompts
const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer's github acount"
    }
]
//intern prompts
const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: "Enter intern's school"
    }
]
//manager prompts
const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number"
    }
]

const add = [
    {
        type: 'list',
        name: 'continue',
        message: "Do you wish to add another employee?",
        choices: ["yes", "no"]
    }
]

// intion function
async function init() {
    return inquire
        .prompt(role)
        .then((response) => {
            switch (response.role) {
                case "Engineer":
                        questions = employeeQuestions.concat(engineerQuestions);
                        getDetails(questions);
                    break;
                case "Intern":
                        // console.log("new intern");
                        questions = employeeQuestions.concat(internQuestions);
                        // console.log(questions);
                        getDetails(questions);

                    break;
                case "Manager":
                        // console.log("new manager");
                        questions = employeeQuestions.concat(managerQuestions);
                        // console.log(questions);
                        getDetails(questions);
                    break;
                default:
                    break;
            }

        })
        .catch((err) => {
            console.log(err);
        })
}

async function getDetails(questions){
    return inquire
        .prompt(questions)
        .then((response) => {
            workTeamArray.push(response);
            const html = generateHTML(workTeamArray)
            fs.writeFile('./dist/index.html', html, (err) => err ? console.log(err) : console.log('html created'));
            newEmployee();          
        })
        .catch((err) => {
            console.log(err);
        })
}

async function newEmployee(){
    return inquire
        .prompt(add)
        .then((response) => {
            console.log(response);
            if (response.continue === "yes") {
                init();
            }
        })
}
init();
exports.workTeamArray;