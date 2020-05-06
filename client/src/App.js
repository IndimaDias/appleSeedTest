import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BusinessView from "./components/business-view.component";
import BusinessAdd from "./components/business-add.component";
import BusinessEdit from "./components/business-edit.component";
import Home from "./components/business-home.component";


function App() {
  return (
    <Router>
      <Switch>
        <div className="container-fluid">
          <Route path="/view/:pageId" component= {BusinessView} />
          <Route path="/add" component= {BusinessAdd} />
          {/* <Route path="/edit" render ={(props) =>< BusinessEdit {...props}/>} />                           */}
          <Route path = '/edit/:pageId' component = {BusinessEdit} />
          <Route exact path="/" component= {Home} />
        </div>
      </Switch>
   </Router>
  );
}

export default App;
