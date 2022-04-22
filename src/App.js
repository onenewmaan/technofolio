import './App.scss'
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

// components
import Main from './components/Main';
import CirriculuVitae from './components/CirriculumVitae';
import ProjectPage from './components/ProjectPage';
import DesignPage from './components/DesignPage';
import SkillsPage from './components/SkillsPage';
import DogeNode from './components/projects/dogenode';
import ESP32cam from './components/projects/esp32cam';
import NAT from './components/projects/nat';



function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cv" component={CirriculuVitae} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/project/dogenode" component={DogeNode} />
        <Route exact path="/project/esp32cam" component={ESP32cam} />
        <Route exact path="/project/NAT" component={NAT} />
        <Route exact path="/design" component={DesignPage} />
        <Route exact path="/skills" component={SkillsPage} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

