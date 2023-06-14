import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NowPlayingMovies from "./pages/NowPlayingMovies";
import DetailMovie from "./pages/DetailMovie";
import ListFavoriteMovies from "./pages/ListFavoriteMovies";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NowPlayingMovies />} />
            <Route path="/detail-movie" element={<DetailMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
