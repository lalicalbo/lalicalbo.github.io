
function getRepos(user) {

    return fetch(`https://api.github.com/users/${user}/repos`)
        .then(data => data.json())
        .then(data => {
            return data;
        });
}

function getInfoUser(user) {
    return fetch(`https://api.github.com/users/${user}`)
        .then(data => data.json())
        .then(data => {
            return data;
        });
        
}


async function generatePage(user) {
    const userInfo = await getInfoUser(user)
    const userRepos = await getRepos(user)
    
    let html = `<div id="text">`
    html += "<h1>PORTAFOLIO REPOSITORIOS</h1>";
   html+=`<div class="cuadros"><img src="${userInfo.avatar_url}" id="avatar"><h2>${userInfo.name}</h2>
   <p>${userInfo.bio}</p></div> `

    userRepos.forEach(element => {
        console.log("element", element)
        html += `<div class="cuadros"><a href="${element.svn_url}" target="_blank">${element.name}</a> <img src="github.jpeg"></div> `

    });
    html += "</div>";

    document.getElementById("container").innerHTML = html;

}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params)
generatePage(params.user)






/*
FORMA NUMERO 2

console.log("Clase de fetch")

fetch("https://api.github.com/users/lalicalbo/repos")
    .then(data => data.json())
    .then(data => {

        let html = `<div id="text">`
        html += "<h1>Mis repositorios</h1>";
        //html+=`<img src="https://avatars.githubusercontent.com/u/82003001">`
        data.forEach(element => {
            html += `<div class="cuadros"><a href="${element.svn_url}" target="_blank">${element.name}</a> </div> `
        });
        html += "</div>";

        document.getElementById("container").innerHTML = html;

    });
*/






/*FORMA NUMERO3
let html=
     `
     <ul>
     <li><a href="${data[0].svn_url}" target="_blank">${data[0].name}</a> </li>
     <li><a href="${data[1].svn_url}" target="_blank">${data[1].name}</a> </li>
     <li><a href="${data[2].svn_url}" target="_blank">${data[2].name}</a> </li>
     <li><a href="${data[3].svn_url}" target="_blank">${data[3].name}</a> </li>
     <li><a href="${data[4].svn_url}" target="_blank">${data[4].name}</a> </li>
     <li><a href="${data[5].svn_url}" target="_blank">${data[5].name}</a> </li>
     <li><a href="${data[6].svn_url}" target="_blank">${data[6].name}</a> </li>
     <li><a href="${data[7].svn_url}" target="_blank">${data[7].name}</a> </li>
     <li><a href="${data[8].svn_url}" target="_blank">${data[8].name}</a> </li>
     <li><a href="${data[9].svn_url}" target="_blank">${data[9].name}</a> </li>
     <li><a href="${data[10].svn_url}" target="_blank">${data[10].name}</a> </li>
     <li><a href="${data[11].svn_url}" target="_blank">${data[11].name}</a> </li>
     <li><a href="${data[12].svn_url}" target="_blank">${data[12].name}</a> </li>
     <li><a href="${data[13].svn_url}" target="_blank">${data[13].name}</a> </li>
     </ul>
      `
     ;

     document.getElementById("container").innerHTML=html;



    });
    */


