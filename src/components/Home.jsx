import React from "react";

const Home = () => {
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

        <div className="flex justify-between">
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

        <div className="grid grid-cols-2 gap-4">

          <div className=" border p-6 rounded">
            <div className=" p-3 ">
              <img src="/src/assets/Logo/google-1-1 1-1.png" alt="" />
            </div>
            <h1>Technical Database Engineer</h1>
            <p>Google LLC</p>

            <div className="flex gap-4">
              <button className="btn btn-outline btn-primary">Remote</button>

              <button className="btn btn-outline btn-primary">Full Time</button>
            </div>

            <div className="flex gap-3">
              <div>
              {/* <img src="/src/assets/Icons/Frame-4.png" alt="" /> */}
              <p> Dhaka, Bangladesh</p>
              </div>
              <div>
              {/* <img src="/src/assets/Icons/Frame.png" alt="" /> */}
              <p> Salary : 100K - 150K</p>
              </div>
            </div>

            
            <button className="btn btn-primary">View Details</button>
          </div>
          <div className=" border p-6 rounded">
            <div className=" p-3 ">
              <img src="/src/assets/Logo/google-1-1 1-1.png" alt="" />
            </div>
            <h1>Technical Database Engineer</h1>
            <p>Google LLC</p>

            <div className="flex gap-4">
              <button className="btn btn-outline btn-primary">Remote</button>

              <button className="btn btn-outline btn-primary">Full Time</button>
            </div>

            <div className="flex gap-3">
              <div>
              {/* <img src="/src/assets/Icons/Frame-4.png" alt="" /> */}
              <p> Dhaka, Bangladesh</p>
              </div>
              <div>
              {/* <img src="/src/assets/Icons/Frame.png" alt="" /> */}
              <p> Salary : 100K - 150K</p>
              </div>
            </div>

            
            <button className="btn btn-primary">View Details</button>
          </div>
          <div className=" border p-6 rounded">
            <div className=" p-3 ">
              <img src="/src/assets/Logo/google-1-1 1-1.png" alt="" />
            </div>
            <h1>Technical Database Engineer</h1>
            <p>Google LLC</p>

            <div className="flex gap-4">
              <button className="btn btn-outline btn-primary">Remote</button>

              <button className="btn btn-outline btn-primary">Full Time</button>
            </div>

            <div className="flex gap-3">
              <div>
              {/* <img src="/src/assets/Icons/Frame-4.png" alt="" /> */}
              <p> Dhaka, Bangladesh</p>
              </div>
              <div>
              {/* <img src="/src/assets/Icons/Frame.png" alt="" /> */}
              <p> Salary : 100K - 150K</p>
              </div>
            </div>

            
            <button className="btn btn-primary">View Details</button>
          </div>
          <div className=" border p-6 rounded">
            <div className=" p-3 ">
              <img src="/src/assets/Logo/google-1-1 1-1.png" alt="" />
            </div>
            <h1>Technical Database Engineer</h1>
            <p>Google LLC</p>

            <div className="flex gap-4">
              <button className="btn btn-outline btn-primary">Remote</button>

              <button className="btn btn-outline btn-primary">Full Time</button>
            </div>

            <div className="flex gap-3">
              <div>
              {/* <img src="/src/assets/Icons/Frame-4.png" alt="" /> */}
              <p> Dhaka, Bangladesh</p>
              </div>
              <div>
              {/* <img src="/src/assets/Icons/Frame.png" alt="" /> */}
              <p> Salary : 100K - 150K</p>
              </div>
            </div>

            
            <button className="btn btn-primary">View Details</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
