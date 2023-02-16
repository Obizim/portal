import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Nav } from "./components/Nav/nav";
import { Apply } from "./views/apply-form";
import { SignIn, SignUp } from "./views/auth/auth";
import { Home } from "./views/home";
import { JobPage } from "./views/jobpage";
import { JobDetails } from "./views/jobpage/jobdetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <SignIn />} />
        <Route path="/signup" element={ <SignUp />} />
        <Route path="/jobs" element={ <JobPage />} />
        <Route path="/jobs/number" element={ <JobDetails />} />
        <Route path="/job/number/apply" element={ <Apply />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
