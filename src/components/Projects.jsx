import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            key={project.id}
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

export default Projects;
