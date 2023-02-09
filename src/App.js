import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Nav } from "./components/Nav/nav";
import { SignIn, SignUp } from "./views/auth/auth";
import { Home } from "./views/home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <SignIn />} />
        <Route path="/signup" element={ <SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
