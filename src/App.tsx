import {MovieList} from "./components/MovieList/";
import "./styles/index.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
