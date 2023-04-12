import React from 'react';

const Applied = () => {
    const appliedJob = JSON.parse(localStorage.getItem('appliedJob'));
    
    console.log(appliedJob);

  return (
    <div>
      
      <h1 className='text-blue-600 font-bold text-center bg-slate-100 p-20'>Applied Jobs</h1>

      {appliedJob && (
              

              <div className=" flex justify-between items-center border border-blue-600 p-6 m-8 rounded">
                  
              <div className="">
                <img className=" w-40 p-full" src={appliedJob.companyLogo} alt="" />
              </div>
              
                  
                  <div>
                  <h1 className=" text-2xl font-semibold ">{appliedJob.jobTitle}</h1>
              <p className=" text-xl font-medium py-3">{appliedJob.companyName}</p>
      
              <div className="flex gap-4">
                <button className="btn btn-outline btn-primary">
                  {appliedJob.remoteOrOnsite}
                </button>
      
                <button className="btn btn-outline btn-primary">
                  {appliedJob.fulltimeOrParttime}
                </button>
              </div>
      
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="flex">
                  <img
                    className=" p-0 m-0 "
                    src="/src/assets/Icons/Frame-4.png"
                    alt=""
                  />
                  <p className=" font-semibold "> {appliedJob.location}</p>
                </div>
                <div className="flex">
                  <img src="/src/assets/Icons/Frame.png" alt="" />
                  <p className=" font-semibold ">Salary: {appliedJob.salary}</p>
                </div>
              </div>
                  </div>
      
             
                  <div className=''>
                      
                <button className="btn btn-primary">View Details</button>
                    </div>
              
              
            </div>


      )}
    </div>
  );
};

export default Applied;
