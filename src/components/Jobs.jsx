import React from "react";
import { useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobs = useLoaderData();

  console.log(jobs);

  const handleApply = (job) => {
    localStorage.setItem("appliedJob", JSON.stringify(job));
    window.location.href = "/applied";
  };

  const {
    companyLogo,
    companyName,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    location,
  } = jobs.job;

  return (
    <div>
      <h1 className="text-blue-600 font-bold text-center bg-slate-100 p-20">
        Job Details
      </h1>

      <div className="flex gap-5 m-10">
        

        <div className="bg-slate-100 p-5">
          <img className="w-36 -p-5" src={companyLogo} alt="" />
          <h1 className="text-xl font-bold">
            Company Name:
            <span className="font-normal">{companyName}</span>
          </h1>

          <h1 className="text-xl font-bold">
            Job Description:{jobDescription}
          </h1>
          <h1>Job Responsibility:{jobResponsibility}</h1>
          <h1>Educational Requirements:</h1>
          <p>{educationalRequirements}</p>
          <h1>Experiences:</h1>
          <p>{experiences}</p>
        </div>

        <div>
          <div className=" bg bg-slate-100 w-80 h-96 p-6 m-auto rounded">
            <h1>Job Details</h1>
            <hr className="h-1" />

            <div className="flex">
              <img src="/src/assets/Icons/Frame.png" alt="" />
              <h1>Salary:{salary}</h1>
            </div>

            <div className="flex">
              <img src="/src/assets/Icons/Frame-1.png" alt="" />
              <h1>Job Title:{jobTitle}</h1>
            </div>

            <h1>Contact Information</h1>
            <hr className="h-1" />

            <div className="flex">
              <img src="/src/assets/Icons/Frame-2.png" alt="" />
              <h1>Phone:{contactInformation.phone}</h1>
            </div>

            <div className="flex">
              <img src="/src/assets/Icons/Frame-3.png" alt="" />
              <h1>Email: {contactInformation.email}</h1>
            </div>

            <div className="flex">
              <img src="/src/assets/Icons/Frame-4.png" alt="" />
              <h1>Address : {location}</h1>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <button
              className="btn btn-primary w-80"
              onClick={() => handleApply(jobs.job)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
