import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {

  const {jobs} = useLoaderData()

  console.log(jobs);


  return (
    <div className="p-10">
      <div className="flex bg-slate-300">
        <div className=" p-16 ">
          <h1 className="text-5xl font-bold">One Step Closer To Your</h1>
          <span className="text-5xl font-bold text-indigo-700">Dream Job</span>
          <p className="py-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>

      {/* Job Category List */}

      <div>
        <div className=" text-center my-10">
          <h1 className=" text-2xl font-bold">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20">
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 rounded">
              <img src="/src/assets/Icons/accounts 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 rounded">
              <img src="/src/assets/Icons/accounts 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 rounded">
              <img src="/src/assets/Icons/accounts 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 rounded">
              <img src="/src/assets/Icons/accounts 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}

      <div>
        <div className=" text-center my-10">
          <h1 className=" text-2xl font-bold">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

        {
            jobs.slice(0,4).map(jobs => (
        
        
              <div className=" border p-6 rounded">
              <div className=" p-3 ">
                <img className=" w-20 " src={jobs.companyLogo} alt="" />
              </div>
                <h1>{ jobs.jobTitle}</h1>
                <p>{ jobs.companyName}</p>
  
              <div className="flex gap-4">
                  <button className="btn btn-outline btn-primary">{ jobs.remoteOrOnsite}</button>
  
                  <button className="btn btn-outline btn-primary">{ jobs.fulltimeOrParttime}</button>
              </div>
  
              <div className="flex gap-3">
                <div>
                {/* <img src="/src/assets/Icons/Frame-4.png" alt="" /> */}
                    <p> { jobs.location}</p>
                </div>
                <div>
                {/* <img src="/src/assets/Icons/Frame.png" alt="" /> */}
                    <p>Salary: {jobs.salary }</p>
                </div>
              </div>
  
              
              <button className="btn btn-primary">View Details</button>
            </div>
        
              ))
      }

         

        </div>
      </div>

      <button className="btn btn-primary m-9">See All Jobs</button>

    </div>
  );
};

export default Home;
