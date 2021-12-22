import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/home' component={Home} />
        <Route
          path='/about'
          render={(props) => <About {...props} phone={'887-765-7655'} />}
        />
        <Route path='/projects/:id' component={Project} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/not-found' component={NotFound} />
        <Redirect exact from='/' to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}

export default App;
