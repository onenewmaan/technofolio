import './App.scss'
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

// components
import Main from './components/Main';
import Photography from './components/Photography'
import Profile from './components/Profile';
import Architecture from './components/Architecture';



function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/architecture" component={Architecture} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

