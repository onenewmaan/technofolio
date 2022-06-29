import './App.scss'
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

// components
import Main from './components/Main';
import Photography from './components/Photography'
import ProjectPage from './components/Design';
import Design from './components/Design';
import Architecture from './components/Architecture';
import Master from './components/projects/master';
import Document from './components/projects/pdf/document';



function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/project/master" component={Master} />
        <Route exact path="/project/pdf/document" component={Document} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/architecture" component={Architecture} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

