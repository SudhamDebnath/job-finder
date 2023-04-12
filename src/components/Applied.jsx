import React from "react";

const Applied = () => {

  const appliedJob = JSON.parse(localStorage.getItem("appliedJob"));

  console.log(appliedJob);

  return (
    <div>

      <div className="static">
        <h1 className="text-blue-600 font-bold text-center text-3xl bg-slate-100 p-20">
          Applied Jobs
        </h1>
        <div className="absolute top-0 right-0">
          <img src="https://i.ibb.co/T19wvzn/Vector-1.png" alt="" />
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-0">
            <img src="https://i.ibb.co/ssQWSkK/Vector.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse my-8 px-14">
        <button className="btn btn-primary">Filter By</button>
      </div>

      {appliedJob && (

        <div className="flex justify-between items-center border border-gray-600 p-6 m-14 rounded">
          <div className="bg bg-slate-100 h-52 w-56 rounded flex items-center">
            <img className="w-40 mx-auto" src={appliedJob.companyLogo} alt="" />
          </div>

          <div className="">
            <h1 className=" text-2xl font-semibold ">{appliedJob.jobTitle}</h1>
            <p className=" text-xl font-medium py-3">
              {appliedJob.companyName}
            </p>

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
                  src="https://i.ibb.co/cXVd5Pn/Frame-4.png"
                  alt=""
                />
                <p className=" font-semibold "> {appliedJob.location}</p>
              </div>
              <div className="flex">
                <img src="https://i.ibb.co/gWbWKZ7/Frame.png" alt="" />
                <p className=" font-semibold ">Salary: {appliedJob.salary}</p>
              </div>
            </div>
          </div>

          <div className="">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applied;
