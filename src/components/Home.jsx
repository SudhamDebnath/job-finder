import React from "react";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";

const Home = () => {
  const { jobs } = useLoaderData();



  return (
    <div className="p-10">

      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 bg-slate-300">
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
          <div className=" bg-slate-400 p-6  rounded">
            <div className="bg bg-slate-300 p-3 w-16 rounded">
              <img src="/src/assets/Icons/accounts 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 w-16 rounded">
              <img src="/src/assets/Icons/business 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 w-16 rounded">
              <img src="/src/assets/Icons/social-media 1.png" alt="" />
            </div>
            <h1>Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className=" bg-slate-400 p-6 rounded">
            <div className="bg bg-slate-300 p-3 w-16 rounded">
              <img src="/src/assets/Icons/chip 1.png" alt="" />
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

          {jobs.slice(0, 4).map((job) => (
            <Job
              key={job.id}
              job={job}
            ></Job>
          ))
          }

        </div>
      </div>

      <button className="btn btn-primary m-9">See All Jobs</button>
    </div>
  );
};

export default Home;
