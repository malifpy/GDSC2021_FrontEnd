fetch('./moviedata.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        /*
        var coll = document.getElementsByClassName("details");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.parentElement.parentElement.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
        */
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });



function appendData(data) {
    var movieList = document.getElementById("movieList");
    for (var i = 0; i < data.length && i < 200; i++) {
        // The Movie
        var movieBox = document.createElement("div");
        movieBox.className = "movieBox";

        appendImage(movieBox, data[i].info.image_url)
        appendInfo(movieBox, data[i]);
        movieList.appendChild(movieBox);
        //appendDetails(movieList, data[i].info)
        
    }
}

function appendImage(movie, imgUrl) {
    var movieImgBox = document.createElement("div");
    movieImgBox.className = "movieImgBox"
    // Movie Image
    var movieImg = document.createElement("img");
    movieImg.className = "movieImg";
    movieImg.src = imgUrl;
    movieImg.alt = "Not Available";
    movieImgBox.appendChild(movieImg);

    movie.appendChild(movieImgBox);
}

function appendInfo(movie, data) {
    // Movie Info
    var movieInfo = document.createElement("div");
    movieInfo.className = "movieInfo";

    appendText(movieInfo, "h1", data.title);

    if (typeof data.info.rating === 'undefined') {
        appendText(movieInfo, "h2", "Rating: N/A");
    } else {
        appendText(movieInfo, "h2", "Rating: " + data.info.rating + "/10");
    }

    appendText(movieInfo, "p", data.info.plot);

    /*
    var movieDetailsButton = document.createElement("button");
    movieDetailsButton.innerHTML = "Details";
    movieDetailsButton.className = "details";
    movieInfo.appendChild(movieDetailsButton);
    */
    appendDetailsPage(movieInfo, data)

    movie.appendChild(movieInfo);
}

function appendDetails(movie, detailInfo) {
    var detailBox = document.createElement("div");
    detailBox.className = "detailBox";

    var detailsList = document.createElement("ul");
    detailsList.className = "detailsList"
    rDate = new Date(detailInfo.release_date);
    fDate = rDate.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    appendText(detailsList, "li", "<b>Release Date</b>" + fDate);

    appendText(detailsList, "li", "<b>Genres</b>" + isListNA(detailInfo.genres));
    appendText(detailsList, "li", "<b>Directors</b>" + isListNA(detailInfo.directors));
    appendText(detailsList, "li", "<b>Actors</b>" + isListNA(detailInfo.actors));

    if (typeof detailInfo.running_time_secs !== 'undefined') {
        duration = new Date(detailInfo.running_time_secs * 1000).toISOString().substr(11, 8);
    } else {
        duration = "N/A";
    }
    appendText(detailsList, "li", "<b>Duration</b>" + duration);

    detailBox.appendChild(detailsList);
    movie.appendChild(detailBox);
}
function appendDetailsPage(prnt, data){
    var tempForm = document.createElement('form');
    tempForm.action = `./pages/${data.info.rank + "_" + data.title.replace(/[^a-zA-Z0-9]/g,'_').toLowerCase()}.html`
    
    var tempInput = document.createElement('input');
    tempInput.type = 'submit';
    tempInput.value = 'Details';

    tempForm.appendChild(tempInput);
    prnt.appendChild(tempForm);
}
function appendText(prnt, type, inner) {
    var tempText = document.createElement(type);
    tempText.innerHTML = inner;
    prnt.appendChild(tempText);
}

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