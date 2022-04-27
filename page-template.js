


module.exports = teamData => {
    // write main function of html template
    const {Manager, Engineer, Intern} = teamData;
    for(var i = 0; i < employeeArr.length; i++){
        if (Manager.getRole() === 'manager') {
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
            <div class="entire-card">
                <div>${employeeArr[i].getName()}</div>
                <div>${employeeArr[i].getRole()}</div>
                <div>
                    <div>${employeeArr[i].getEmployeeId()}</div>
                    <div>${employeeArr[i].getEmail()}</div>
                    <div>${employeeArr[i].getOfficeNumber()}</div>
                </div>
            </div>
          </main>

        </body>
        </html>

`
    }

    }        
}







// may need to use es6 if statements