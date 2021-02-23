const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee name?',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email address?',
    },
    
    //manager goes to key: office
    //engineer goes to key: github
    //intern goes to key: school

    {
      type: 'input',
      name: 'office',
      message: 'what is your office number?',
    },

      //spit our card here, manager info pack
    
    {
      type: "list",
      name: "employeeType",
      message: "What type of employee would you like to add?",
      choices: [
        "Manager",
        "Engineer", 
        "Intern",
      ]
    },

    {
      type: 'input',
      name: 'github',
      message: 'Engineer github address?',
    },
    
    {
      type: 'input',
      name: 'school',
      message: 'What school is Intern from?',},
    {
    
  ]);
};

const generateCard = (answers) =>

`# ${answers.name}

## Description
${answers.description}


## Installation
${answers.installation} `



const init =()=>{
      promptUser()
      .then((answers) => writeFileAsync(`${answers.name}.md`, generateCard(answers)))
      .then(() => console.log('Successfull'))
      .catch((err) => console.error(err));
    };

    init();
