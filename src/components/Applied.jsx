import React from 'react';

const Applied = () => {
    const appliedJob = JSON.parse(localStorage.getItem('appliedJob'));
    
    console.log(appliedJob);

  return (
    <div>
      <h1>Applied Jobs</h1>
      {appliedJob && (
              <div className='card'>
                  <h1>Company: { appliedJob.companyName}</h1>
          <h2>{appliedJob.jobTitle}</h2>
          <p>{appliedJob.jobDescription}</p>
          {/* Display other job information as needed */}
        </div>
      )}
    </div>
  );
};

export default Applied;
