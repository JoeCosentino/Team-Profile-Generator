let html = '';
const generateTeam = (teamData) => {
  for(var i = 0; i < teamData.length; i++) {
    if (teamData[i].getRole() === 'manager') {

    }
  }
  // return a string of html that will have all of the cards
}


module.exports = teamData => {
    console.log(teamData);
    // write main function of html template
    // const {Manager, Engineer, Intern} = teamData;

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <main>
          NOTE: CALL GENERATE TEAM FUNCTION, dont forget to pass in teamData
            <div class="entire-card">
                <div>${teamData[i].getName()}</div>
                <div>${teamData[i].getRole()}</div>
                <div>
                    <div>${teamData[i].getEmployeeId()}</div>
                    <div>${teamData[i].getEmail()}</div>
                    <div>${teamData[i].getOfficeNumber()}</div>
                </div>
            </div>
          </main>

        </body>
        </html>

`       
}

// start return before for loop, define a function for each employee call.
//  create cards inside functions






// may need to use es6 if statements