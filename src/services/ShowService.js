const posterBaseURL = "https://image.tmdb.org/t/p/original";

function appendBaseURL(data) {
    return data.results.map((data) => {
        return {...data, 
                full_backdrop_path: `${posterBaseURL}${data.backdrop_path}`,
                full_poster_path: `${posterBaseURL}${data.poster_path}`}
    })
}

const ShowService = {
    
    getNetflixOriginals: async () => {
                try {
                    const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=bae0d6e59a93e166f73ccf08386c4416&with_networks=213");
                    const data = await response.json();
                        return appendBaseURL(data); 
                } catch (error) {
                    alert(error);
                }
            }
}

export default ShowService;
