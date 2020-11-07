// generate employee cards
const generateEmployee = teamProfile => {
  // filter roles and create cards based on priority; manager, engineer, intern
  return `
      <section class="my-3" id="managers">
        <h2 class="text-dark bg-primary p-2 mb-2 mx-2 display-inline-block">Managers</h2>
        <div class="flex-row justify-flex-start">
          ${teamProfile
            .filter(Manager => Manager.role === 'Manager')
            .map(({ name, role, id, email, officeNumber }) => {
              return `
              <div class="card mx-2">
                <div class="card-header">
                  <h2 class="text-light p-2">${name}</h2>
                  <h3 class="text-light p-2"><i class="fas fa-mug-hot"></i> ${role}</h3>
                </div>
                <div class="card-body">
                  <ul>
                    <li><p>ID: ${id}</p></li>
                    <li><p>Email: <a href="mailto:${email}">${email}</a></p></li>
                    <li><p>Office Number: ${officeNumber}</p></li>
                  </ul>
                </div>
              </div>
              `;
            })
            .join('')}
        </div>
      </section>

      <section class="my-3" id="engineers">
        <h2 class="text-dark bg-primary p-2 mb-2 mx-2 display-inline-block">Engineers</h2>
        <div class="flex-row justify-flex-start">
          ${teamProfile
            .filter(Engineer => Engineer.role === 'Engineer')
            .map(({ name, role, id, email, github }) => {
              return `
              <div class="card mx-2">
                <div class="card-header">
                  <h2 class="text-light p-2">${name}</h2>
                  <h3 class="text-light p-2"><i class="fas fa-glasses"></i> ${role}</h3>
                </div>
                <div class="card-body">
                  <ul>
                    <li><p>ID: ${id}</p></li>
                    <li><p>Email: <a href="mailto:${email}">${email}</a></p></li>
                    <li><p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p></li>
                  </ul>
                </div>
              </div>
              `;
              })
            .join('')}
        </div>
      </section>

      <section class="my-3" id="interns">
        <h2 class="text-dark bg-primary p-2 mb-2 mx-2 display-inline-block">Interns</h2>
        <div class="flex-row justify-flex-start">      
          ${teamProfile
            .filter(Intern => Intern.role === 'Intern')
            .map(({ name, role, id, email, school }) => {
              return `
              <div class="card mx-2">
                <div class="card-header">
                  <h2 class="text-light p-2">${name}</h2>
                  <h3 class="text-light p-2"><i class="fas fa-graduation-cap"></i> ${role}</h3>
                </div>
                <div class="card-body">
                  <ul>
                    <li><p>ID: ${id}</p></li>
                    <li><p>Email: <a href="mailto:${email}">${email}</a></p></li>
                    <li><p>School: ${school}</p></li>
                  </ul>
                </div>
              </div>
              `;
              })
            .join('')}
        </div> 
      </section>
  `;
};

module.exports = teamProfileData => {
    const teamProfile = teamProfileData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>

      <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-light bg-dark py-2 px-3">My Team</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/rpajewski/team-profile-generator">GitHub</a>
        </nav>
      </div>
      </header>

      <main class="container my-5">
        ${generateEmployee(teamProfile)}
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by rpajewski</h3>
      </footer>

    </body>
    </html>
    `;
  };