import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {SignIn} from "./pages/SignIn";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {FullPost} from "./component/FullPost";
import {ThemeContext, ThemeProvider} from "./component/ThemeContext";


function App() {

    const {darkTheme,lang} = useContext(ThemeContext);

    const [darkMode,setDarkMode] = useState(darkTheme);

    const themeStyles = {
        backgroundColor:darkMode? '#333':'#FFF',
        color:darkMode?'#FFF':"#333",
    }

    function toggleMode(){
        setDarkMode(prevState => !prevState)
    }


    return (

      <Router>
    <div className="App" style={themeStyles}>
        <ThemeProvider>
            <button onClick={toggleMode}>Change theme</button>


     <Switch>
         <Route path={"/"} exact={true} component={SignIn}/>
         <Route path={"/home"} exact={true} component={Home}/>
         <Route path={"/register"} exact={true} component={Register}/>
         <Route path={"/posts/id/:id"} component={FullPost} />
         <Route path={"/posts/id/"}  component={FullPost}/>
         <Route path={"/posts"} exact component={Home}/>
     </Switch>
        </ThemeProvider>
    </div>

      </Router>

  );
}

export default App;
