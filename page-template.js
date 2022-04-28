let html = '';
const generateTeam = (teamData) => {
  // console.log(teamData);
  for(var i = 0; i < teamData.length; i++) {
    if(teamData[i].getRole() === 'Manager') {
      html +=  `<div class="card col-12 col-md-6 col-lg-4 mx-2 my-2 bg-dark text-light d-flex justify-content-center text-center align-center">
          <div class="name-text mb-1 text-center">${teamData[i].getName()}</div>
          <div class="role">${teamData[i].getRole()}</div>
          <div>
              <div>${teamData[i].getEmployeeId()}</div>
              <div><a class="email" href="mailto:${teamData[i].getEmail()}">Email: ${teamData[i].getEmail()}</a></div>
              <div>${teamData[i].getOfficeNumber()}</div>
          </div>
      </div>` 
    } 
    else if (teamData[i].getRole() === 'Engineer') {
      html +=  `
      
      <div class="card col-12 col-md-6 col-lg-4 mx-2 my-2 bg-dark text-light d-flex justify-content-center text-center align-center">
          <div class="name-text mb-1 text-center">${teamData[i].getName()}</div>
          <div class="role">${teamData[i].getRole()}</div>
          <div>
              <div>${teamData[i].getEmployeeId()}</div>
              <div><a class="email" href="mailto:${teamData[i].getEmail()}">Email: ${teamData[i].getEmail()}</a></div>
              <div>
                <a class="github" href="https://github.com/${teamData[i].getGitHubUsername()}" target="_blank">GitHub: ${teamData[i].getGitHubUsername()}</a>
              </div>
          </div>
      </div>` 
    }
    else if (teamData[i].getRole() === 'Intern') {
      html +=  `
      
      <div class="card col-12 col-md-6 col-lg-4 mx-2 my-2 bg-dark text-light d-flex justify-content-center text-center align-center">
          <div class="name-text mb-1 text-center">${teamData[i].getName()}</div>
          <div class="role">${teamData[i].getRole()}</div>
          <div>
              <div>${teamData[i].getEmployeeId()}</div>
              <div><a class="email" href="mailto:${teamData[i].getEmail()}">Email: ${teamData[i].getEmail()}</a></div>
              <div>${teamData[i].getSchool()}</div>
          </div>
      </div>` 
    }
  }
  return html;
}


module.exports = teamData => {
    console.log(teamData);
    // write main function of html template

        return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="../src/style.css">
  <title>Document</title>
</head>

<body>
   <header class="text-center">MY TEAM</header>
   <main class="container row d-flex justify-content-center">
      ${generateTeam(teamData)}
   </main>

</body>
</html>`}