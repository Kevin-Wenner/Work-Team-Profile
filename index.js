const inquire = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const containerEl = document.getElementById('container');
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

// intion function
async function init() {
    return inquire
        .prompt(role)
        .then((response) => {
            console.log(response);
            switch (response.role) {
                case "Engineer":
                        // console.log("new engineer");
                        questions = employeeQuestions.concat(engineerQuestions);
                        // console.log(questions);
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
            console.log(workTeamArray);
            workTeamArray.forEach(member => {     
                if (member.github) {
                    //engineer card
                    console.log(`Engineer ${member}`);
                    containerEl.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text">Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${member.id}</li>
                            <li class="list-group-item"><a href="mailto:${member.email}">Email: </a></li>
                            <li class="list-group-item"><a href="https://github.com/${member.github}">github:</a></li>
                        </ul>
                    </div>
                    `
                }else if(member.school){
                    //Intern card
                    console.log(`Intern ${member}`);
                    containerEl.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text">Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${member.id}</li>
                            <li class="list-group-item"><a href="mailto:${member.email}">Email: </a></li>
                            <li class="list-group-item"><a href="https://github.com/${member.github}">github:</a></li>
                        </ul>
                    </div>
                    `
                } else if(member.officeNumber){
                    //Manager card
                    console.log(`Manager ${member}`);
                    containerEl.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text">Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${member.id}</li>
                            <li class="list-group-item"><a href="mailto:${member.email}">Email: </a></li>
                            <li class="list-group-item"><a href="https://github.com/${member.github}">github:</a></li>
                        </ul>
                    </div>
                    `
                }          
            });
        })
        .catch((err) => {
            console.log(err);
        })
}



init();

