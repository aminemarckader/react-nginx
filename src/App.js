import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarLayout from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import Departments from "./Components/Pages/Departments.js";
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <Router>
      <NavbarLayout />
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/departments" component={Departments} />
          </Switch>
          <Footer />
        </Container>
     
    </Router>
  );
}

export default App;
