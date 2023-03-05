function generateHTML(array){
 let html = `   <!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Window Object</title>  
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">My Work Team</span>
            </div>
        </nav>
        <main id="container">`;   
    array.forEach(member => {  
            if (member.github) {
                html += `
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
                html += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${member.id}</li>
                        <li class="list-group-item"><a href="mailto:${member.email}">Email: </a></li>
                        <li class="list-group-item">${member.school}</li>
                    </ul>
                </div>
                `                   
            } else if(member.officeNumber){
                html += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${member.id}</li>
                        <li class="list-group-item"><a href="mailto:${member.email}">Email: </a></li>
                        <li class="list-group-item">${member.officeNumber}</li>
                    </ul>
                </div>
                `                  
            }          
        }); 
    html +=  `</main>
        <script src="../src/script.js"></script>
    </body>

</html>`;                    
       
    return html;
}

module.exports = generateHTML;