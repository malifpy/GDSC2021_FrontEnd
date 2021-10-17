// Generate Page Data, Run pakai node-js

let dataJSON = require('./moviedata.json')
function isListNA(ls){
    if(typeof ls !== 'undefined'){
        return ls.join(", ")
    }
    else{
        return "N/A"
    }
}

function isStringNA(str){
    if(typeof str !== 'undefined'){
        return str;
    }
    else{
        return "N/A";
    }
}
movieData = require("./moviedata.json")
var fs = require('fs');

for (var i = 0; i < movieData.length && i < 200; i++) {
    rDate = new Date(movieData[i].info.release_date);
    fDate = rDate.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    if (typeof movieData[i].info.running_time_secs !== 'undefined') {
        duration = new Date(movieData[i].info.running_time_secs * 1000).toISOString().substr(11, 8);
    } else {
        duration = "N/A";
    }
    var htmlContent = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>GDSC</title>
        <link rel="stylesheet" href="../style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

    </head>

    <body class="detailsBody">
        <div class="detailsPage">
            <div class="movieImgBox"><img class="movieImg"
                src="${movieData[i].info.image_url}"
                alt="Not Available"></div>
            <div class="movieInfo">
                <h1>${movieData[i].title}</h1>
                <div class="detailsInfo" style="display: block;">
                    <ul class="detailsList">
                        <li><b>Rating</b>${isStringNA(movieData[i].info.rating)}</li>
                        <li><b>Release Date</b>${fDate}</li>
                        <li><b>Genres</b>${isListNA(movieData[i].info.genres)}</li>
                        <li><b>Directors</b>${isListNA(movieData[i].info.directors)}</li>
                        <li><b>Actors</b>${isListNA(movieData[i].info.actors)}</li>
                        <li><b>Duration</b>${duration}</li>
                    </ul>
                </div>
                <p>${movieData[i].info.plot}</p>
            </div>
        </div>
    </body>

    </html>`;
    fs.writeFile(`./pages/${movieData[i].info.rank + "_" + movieData[i].title.replace(/[^a-zA-Z0-9]/g,'_').toLowerCase()}.html`, htmlContent, (error) => {
        /* handle error */
    });
}