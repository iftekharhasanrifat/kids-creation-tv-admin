import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddPrograms from './components/AddPrograms/AddPrograms';
import UpciomingPrograms from './components/UpciomingPrograms/UpciomingPrograms';
import AddKidsNews from './components/AddKidsNews/AddKidsNews';
import SignIn from './components/SignIn/SignIn';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/addprogram">
          <AddPrograms></AddPrograms>
        </Route>
        <Route path="/addupcomingprograms">
          <UpciomingPrograms></UpciomingPrograms>
        </Route>
        <Route path="/addkidsnews">
          <AddKidsNews></AddKidsNews>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
