const API_KEY= "100c5d58";

let searchBarInput = document.getElementById("movie-input");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

function getMovie(){

    let movieName = searchBarInput.value

    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`

    //if movie name isn't set
    if (movieName.length <= 0) {
        result.innerHTML= `<h1 class='enter-movie-name-msg'> Please enter a movie name. </h1>`
    }

    // otherwise
    else{

        //fetching data
        fetch(url)
            .then((response) => response.json())
            .then(data=>{

                //if movie not found
                if(data.Response === "False"){
                    result.innerHTML= `<h1 class='not-found'> Sorry, movie not found. </h1>`
                }

                else{

                    result.innerHTML = `
                        <div class="movie-container">
                            <div class="m-infos">
                                <div class="m-img">
                                    <img src=${data.Poster} alt=${data.Title}/>
                                </div>
                                <div class="m-meta-infos">
                                    <div class="m-title">
                                        <h1>${data.Title}</h1>
                                        <h3>${data.Type}</h3>
                                    </div>
                                    <div class="m-rating">

                                        <h4>
                                            <img width="18" height="18" src="assets/images/rating_icon.svg" alt="rating"/>
                                            ${data.imdbRating}
                                        </h4>
                                        <h4>
                                            <img width="18" height="18" src="assets/images/rating_up_icon.svg" alt="votes"/>
                                            ${data.imdbVotes} votes
                                        </h4>
                                    </div>
                                    <div class="m-supplement-infos">
                                        <h4>
                                            <img width="18" title="released date" height="18" src="assets/images/calendar_date_event_month_icon.svg" alt="movie released date"/>
                                            ${data.Released}
                                        </h4>
                                        <h4>
                                            <img title="Time to watch" width="18" height="18" src="assets/images/clock_schedule_time_icon.svg" alt="movie time"/>
                                            ${data.Runtime}
                                        </h4>
                                        <h4>
                                            <img title="Country" width="18" height="18" src="assets/images/globe_kashifarif_world_earth_country_icon.svg" alt="Country"/>
                                            ${data.Country}
                                        </h4>
                                    </div>
                                    <div class="m-genre">
                                        <h4>${data.Genre.split(',').join('<span></span>')}</h4>
                                    </div>
                                </div>
                            </div>   
                            <div class="m-plot">
                                <p>${data.Plot}</p>
                            </div>                                                                               
                        </div>
                    
                    `
                    

                }
            })
    }

}

searchBtn.addEventListener('click', getMovie)
