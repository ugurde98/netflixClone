const API_KEY ="d3471059b142941489ca673461bdc18d";

const request={
    fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=tr-TR`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=tr-TR&page=1`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=10749`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=27`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=35`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=28`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=99`
}

export default request