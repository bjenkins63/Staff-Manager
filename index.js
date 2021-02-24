const inquirer = require('inquirer');
const fs = require('fs');
const generateCards = require("./employeecards");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const util = require('util');

const managerArray = [];
const engineerArray = [];
const internArray = [];

async function createManager() {
  return inquirer.prompt([

 {
      type: 'input',
      name: 'ManagerName',
      message: "What is the Manager's name?"
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the Manager's ID number?"
    },
    {
      type: 'input',
      name: 'managerPhone',
      message: "What is the Manager's phone number?"
    }

  ])

  .then(function({ managerName, managerId, managerEmail, managerPhone }) {
    const manager = new Manager(
      managerName,
      managerId,
      managerEmail,
      managerPhone
    );
    managerArray.push(manager);
    createTeam();
    });
    
    
  }

  createManager();

    
    //prompt for additional team members
function createTeam() {
  return inquirer.prompt([
    {
      type: "list",
      name: "teamManager",
      message: "Would you like to add an engineer or intern?",
      choices: [
        "Engineer",
        "Intern",
        "Done"
      ]
    }

  ])

  .then(answer => {
    switch (answer.teamMember){
      case "Engineer":
        createEngineer();
        break;
        case "Intern":
        createIntern();
        break;
        default:
          generateCards(managerArray, engineerArray, internArray);
    }
  });
}

//engineer

function createEngineer() {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },
     {
       type: "input",
       name: "engineerId",
       message: "What is the engineer's employee ID?" 
     },
    {
      type: "input",
      name: "engineerMail",
      message: "What is the engineer's email address?"
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's github address?"
    }
  ])


  .then(function( {
    engineerName,
    engineerId,
    engineerEmail,
    engineerGithub
  })
  {
    const engineer = new Engineer(
      engineerName,
      engineerId,
      engineerEmail,
      engineerGithub
    );
    engineerArray.push(engineer);
    createTeam();
  });
}

//intern

function createIntern() {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?"
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the name of the intern's school?"
    }
  ])

  .then(function({ internName, internId, internEmail, internSchool }){
    const intern = new Intern(
      internName,
      internId,
      internEmail,
      internSchool
    );
    internArray.push(intern);
    createTeam();
  });
}

module.exports = createManager