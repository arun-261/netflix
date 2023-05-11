
import './App.css';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner'
import Nav from './component/Nav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      </header>

      {/* banner */}

      
      <Banner/>

      {/* first row */}
      <Row title="Trending in India"
        fetchUrl={requests.fetchTrending} />

      <Row title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />

      <Row title="Top Rated"
        fetchUrl={requests.fetchTopRated} />

      <Row title="Action"
        fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy"
        fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror"
        fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance"
        fetchUrl={requests.fetchRomanceMovies} />

    </div>
  );
}

export default App;
