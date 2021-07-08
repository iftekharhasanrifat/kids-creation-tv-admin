import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPrograms from "./components/AddPrograms/AddPrograms";
import UpciomingPrograms from "./components/UpciomingPrograms/UpciomingPrograms";
import AddKidsNews from "./components/AddKidsNews/AddKidsNews";
import SignIn from "./components/SignIn/SignIn";
import ManagePrograms from "./components/ManagePrograms/ManagePrograms";
import UpdatePrograms from "./components/ManagePrograms/UpdatePrograms";
import ManageUpcomingPrograms from "./components/ManagePrograms/ManageUpcomingPrograms";
import ManageKidsNews from "./components/ManagePrograms/ManageKidsNews";
import UpdateUpcomingPrograms from "./components/ManagePrograms/UpdateUpcomingPrograms";
import UpdateKidsNews from "./components/ManagePrograms/UpdateKidsNews";
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
        <Route path="/manageprogram">
          <ManagePrograms></ManagePrograms>
        </Route>
        <Route path="/updatePrograms">
          <UpdatePrograms></UpdatePrograms>
        </Route>
        <Route path="/manageUpcomingProgram">
          <ManageUpcomingPrograms></ManageUpcomingPrograms>
        </Route>
        <Route path="/updateUpcomingPrograms">
          <UpdateUpcomingPrograms></UpdateUpcomingPrograms>
        </Route>
        <Route path="/manageKidsNews">
          <ManageKidsNews></ManageKidsNews>
        </Route>
        <Route path="/updateKidsNews">
          <UpdateKidsNews></UpdateKidsNews>
        </Route>
        <Route exact path="/">
          <AddPrograms></AddPrograms>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
