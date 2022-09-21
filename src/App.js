
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import request from './request';
import Row from './Row';


function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action" fetchUrl={request.fetchActionMovies}/>
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentary" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
