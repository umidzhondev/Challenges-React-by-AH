import "./App.css";
import Card from "./components/Card";
import movies from "./movies";

function App() {
  return (
    <div className="container">
      <h1 className="heading">My movies</h1>
      <div className="cards">
        {movies.map((movie, index) => {
          return <Card key={index} props={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
