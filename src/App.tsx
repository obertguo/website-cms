import Nav from './components/Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/404';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/article/:title" exact>
          <Article/>
        </Route>
        <Route path="/articles" exact>
          <Articles/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/404" exact>
          <NotFound/>
        </Route>
        <Route path="/">
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;