import { Footer } from "./components/footer";
import { Nav } from "./components/Nav/nav";
import { Home } from "./components/views/home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
