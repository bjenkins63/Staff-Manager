const generateHTML = (managerCard, engineerCard, internCard) => {
    return `
    <!DOCTYPE html>
    <html lang"en">
    <head>
    <title>My Team</title>
    <meta charset="utf-8"/>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no:/>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-dark">
    <div class="row>
    <div class="display-4 text-left text-danger">My Team</h1>
    <p class="lead"></p>
    </div>
    </div>
    </div>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-12 d-flex justify-content-around mt-4"
            ${managerCard}
            ${engineerCard}
            ${internCard}
            </div>
        </div>
    </div>
    
    <script JQUERY, JPOPPER, BOOTSTRAP....PUT AT TOP??</script>

    </body>
</html>    
    `;
};

module.exports = generateHTML;