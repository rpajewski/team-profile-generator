// generate employee cards
const generateEmployee = teamProfile => {
  // filter roles and create cards based on priority; manager, engineer, intern
  return `
    <div class="container flex-row justify-space-between align-center">
      ${teamProfile
        .filter(({ Manager }) => Manager)
        .map(({ name, role, id, email, officeNumber }) => {
          return `
          <div class="card">
            <div class="card-header">
              <h2>${name}</h2>
              <h3><i class="fas fa-mug-hot"></i> ${role}</h3>
            </div>
            <div class="card-body">
              <nav>
                <ul>
                  <li><p>ID: ${id}</p></li>
                  <li><p>Email: ${email}</p></li>
                  <li><p>Office Number: ${officeNumber}</p></li>
                </ul>
              </nav>
            </div>
          </div>
          `;
        })
        .join('')}

      ${teamProfile
        .filter(({ Engineer }) => Engineer)
        .map(({ name, role, id, email, github }) => {
          return `
          <div class="card">
            <div class="card-header">
              <h2>${name}</h2>
              <h3><i class="fas fa-glasses"></i> ${role}</h3>
            </div>
            <div class="card-body">
              <nav>
                <ul>
                  <li><p>ID: ${id}</p></li>
                  <li><p>Email: ${email}</p></li>
                  <li><p>GitHub: ${github}</p></li>
                </ul>
              </nav>
            </div>
          </div>
          `;
          })
        .join('')}

        ${teamProfile
          .filter(({ Intern }) => Intern)
          .map(({ name, role, id, email, school }) => {
            return `
            <div class="card">
              <div class="card-header">
                <h2>${name}</h2>
                <h3><i class="fas fa-graduation-cap"></i> ${role}</h3>
              </div>
              <div class="card-body">
                <nav>
                  <ul>
                    <li><p>ID: ${id}</p></li>
                    <li><p>Email: ${email}</p></li>
                    <li><p>School: ${school}</p></li>
                  </ul>
                </nav>
              </div>
            </div>
            `;
            })
          .join('')}
    </div> 
  `;
};

module.exports = teamProfileData => {
  // console.log(teamProfileData)
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
          <h1 class="page-title text-secondary bg-dark py-1 px-1">My Team</h1>
        </div>
      </header>

      <main>
        ${generateEmployee(teamProfile)}
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by rpajewski</h3>
      </footer>

    </body>
    </html>
    `;
  };