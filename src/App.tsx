import React from 'react';
import './App.css';
import {SignIn} from "./pages/SignIn";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {FullPost} from "./component/FullPost";


function App() {

  return (
      <Router>
    <div className="App">
     <Switch>
         <Route path={"/"} exact={true} component={SignIn}/>
         <Route path={"/home"} exact={true} component={Home}/>
         <Route path={"/register"} exact={true} component={Register}/>
         <Route path={"/posts/id/:id"} component={FullPost} />
         <Route path={"/posts/id/"}  component={FullPost}/>
         <Route path={"/posts"} exact component={Home}/>
     </Switch>
    </div>
      </Router>
  );
}

export default App;
