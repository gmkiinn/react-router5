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
