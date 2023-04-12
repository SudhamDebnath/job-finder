import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  
  
  return (
    <div>
      <div className=" border border-violet-500 p-6 rounded ">
        <div className=" p-3 ">
          <img className="w-36 -ml-3 " src={job.companyLogo} alt="" />
        </div>
        <h1 className=" text-2xl font-semibold ">{job.jobTitle}</h1>
        <p className=" font-semibold text-gray-500 py-3">{job.companyName}</p>

        <div className="flex gap-4">
          <button className="btn btn-outline btn-primary">
            {job.remoteOrOnsite}
          </button>

          <button className="btn btn-outline btn-primary">
            {job.fulltimeOrParttime}
          </button>
        </div>

        <div className="flex gap-4 my-5">
          <div className="flex">
            <img
              className=" p-0 m-0 "
              src="https://i.ibb.co/cXVd5Pn/Frame-4.png"
              alt=""
            />
            <p className=" font-semibold text-gray-500"> {job.location}</p>
          </div>
          <div className="flex">
            <img src="https://i.ibb.co/gWbWKZ7/Frame.png" alt="" />
            <p className=" font-semibold text-gray-500">Salary: {job.salary}</p>
          </div>
        </div>

        {/* <Link to="/jobs">
          <button className="btn btn-primary">View Details</button>
          </Link> */}

        <Link to={`/jobs/${job.id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
