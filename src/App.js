import './App.scss'
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

// components
import Main from './components/Main';
import Pictures from './components/Pictures'
import Profile from './components/Profile';
import Projects from './components/Projects';
import DogeNode from './components/projects/blockchainnode';
import NAT from './components/projects/nat';



function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/pictures" component={Pictures} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/blockchainnode" component={DogeNode} />
        <Route exact path="/projects/NAT" component={NAT} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </ThemeProvider>
    </>
}

export default App

