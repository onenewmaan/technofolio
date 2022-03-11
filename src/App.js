import './App.scss'
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

// components
import Main from './components/Main';
import CirriculuVitae from './components/CirriculumVitae';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import SkillsPage from './components/SkillsPage';
import SoundBar from "./subComponents/SoundBar";




function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <SoundBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cv" component={CirriculuVitae} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/skills" component={SkillsPage} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

