import { Component } from "react";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import DetailMovie from "./pages/DetailMovie";
import ListFavoriteMovies from "./pages/ListFavoriteMovies";

class App extends Component {
  render() {
    return (
      <div>
        <DetailMovie/>
      </div>
    );
  }
}

export default App;
