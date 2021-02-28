const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileSync = util.promisify(fs.writeFile);
const createHTML = require("./main.js");

const generateCards = (managerCard, engineerCard, internCard) => {
    const createManager = managerCard.map(manager => {
        return `
<div class="card text-black bg-white ml-3">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
            <h3 class="mr-3">${manager.getRole()}</h3>
        </div>
        <div class="card-body bg-danger">
            <p>ID: ${manager.id}</p>
            <p>Office #: ${manager.getOffice()}</p>
            </div>
        </div>`;
    });

    const createEngineer = engineerCard.map(engineer => {
        return `
<div class="card text-black bg-olive ml-3">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
            <h3 class="mr-3">${engineer.getRole()}</h3>
        </div>
        <div class="card-body text-white bg-dark">
            <p>ID: ${engineer.id}</p>
            <p>GitHub: ${engineer.github}</p>
        </div>
    </div>`;
    });

    const createIntern = internCard.map(intern => {
        return `
<div class="card text-black bg-palegoldenrod ml-3">
    <div class="card-header">
        <h2 class="card-title text-black">${intern.name}</h2>
                <h3 class="mr-3 text-black"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body border-danger">
            <p>ID: ${intern.id}</p>
            <p>Email: ${intern.email}<a href="mailto:${intern.email}"</a></p>
            <p>School: ${intern.school}</p>
        </div>
        </div>`;
    });

    const generateHTML = createHTML(
        createManager,
        createEngineer,
        createIntern
        );

        fs.writeFileSync("./dist/team.html", generateHTML, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    };

    module.exports = generateCards