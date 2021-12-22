# React Router 5 Basics

### Browser Router

Browser router component takes history object from browser and sends to child components.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Link component

Anchor tag makes full round trip to server. It sends request to server with mentioned url and renders the UI with response. Link Component does change only url of address barand doesnot make any request to server.

```js
// using achor tags
import React from 'react';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Router
        </a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a href='/home' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='/projects' className='nav-link'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a href='/contact-us' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// using Link component
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Router
        </Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/home' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-link'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```

### Route and Switch Component

Route component sees URL in address bar and checks the path mentioned in route component includes in URL. If path is there in URL, Route component renders child component.

Switch component helps to Route components to render single route component, that path is in URL. Specific Route should goes to top.

exact property of Route makes to render the child component when path is exactly same to url.

```js
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact-us'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
```

### Route props

Route component will send props to component when component is placed as prop to Route.
To send custom props to render component use render property.

props

- history
- location
- match

### Route Params and Query Params

```js
// App.js
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
        <Route path='/contact-us'>
          <Contact />
        </Route>
        <Route path={'/not-found'} component={NotFound} />
        <Redirect exact from='/' to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}

// Projects.jsx
class Projects extends Component {
  state = {
    projects: [
      { id: 1, name: 'project1' },
      { id: 2, name: 'project2' },
      { id: 3, name: 'project3' },
      { id: 4, name: 'project4' },
    ],
  };
  render() {
    const { match } = this.props;
    return (
      <div className='mt-5'>
        <h2>Projects</h2>
        {this.state.projects.map((project) => (
          <div
            className='card m-2'
            style={{ width: 200, display: 'inline-block' }}
          >
            <div className='card-body'>
              <h5 className='card-title'>{project.name}</h5>
              <Link to={`${match.path}/${project.id}`} className='card-link'>
                see more
              </Link>
            </div>
          </div>
        ))}
        <div
          className='card m-2'
          style={{ width: 200, display: 'inline-block' }}
        >
          <div className='card-body'>
            <h5 className='card-title'>{'Create Project'}</h5>
            <Link
              to={`${match.path}/new/?type=web-development`}
              className='card-link'
            >
              create...
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// Project.jsx
function Project({ match, location }) {
  const queryParams = queryString.parse(location.search);
  return (
    <div>
      <h3 className='mt-5'>Project Details</h3>
      <h4>Project - {match.params.id}</h4>
      {Object.keys(queryParams).length ? (
        <p>Project Type: {queryParams['type']}</p>
      ) : null}
    </div>
  );
}
```

### Redirect

```js
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
        <Route path='/contact-us'>
          <Contact />
        </Route>
        <Route path={'/not-found'} component={NotFound} />
        <Redirect exact from='/' to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}
```

### Programatic Navigation

history object helps programatic navigation in the application

- push(path, [state]) - (function) Pushes a new entry onto the history stack
- replace(path, [state]) - (function) Replaces the current entry on the history stack
- go(n) - (function) Moves the pointer in the history stack by n entries
- goBack() - (function) Equivalent to go(-1)
- goForward() - (function) Equivalent to go(1)

```js
import React from 'react';
import queryString from 'query-string';

function Project({ match, location, history }) {
  const queryParams = queryString.parse(location.search);

  const handleBackButton = () => {
    history.replace('/projects');
  };
  return (
    <div>
      <h3 className='mt-5'>Project Details</h3>
      <h4>Project - {match.params.id}</h4>
      {Object.keys(queryParams).length ? (
        <p>Project Type: {queryParams['type']}</p>
      ) : null}
      <button onClick={handleBackButton} className='btm btn-sm btn-info'>
        Back
      </button>
    </div>
  );
}

export default Project;
```

### Nested Routing

```js
function Contact({ match }) {
  console.log(match);
  return (
    <div>
      <h3>Contact Us</h3>
      <ul className='nav' style={{ justifyContent: 'center' }}>
        <li className='nav-item'>
          <Link to={`${match.path}/phone`} className='nav-link'>
            Phone
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={`${match.path}/email`} className='nav-link'>
            Email
          </Link>
        </li>
      </ul>
      <Route path={`${match.path}/phone`} component={Phone} />
      <Route path={`${match.path}/email`} component={Email} />
    </div>
  );
}
```
