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
      
      <div className='static'>
      <h1 className='text-blue-600 font-bold text-center text-3xl bg-slate-100 p-20'>Jobs Details</h1>
        <div className='absolute top-0 right-0'>
          
        <img src="/src/assets/All Images/Vector-1.png" alt="" />
        </div>
        
        <div className='relative'>

        <div className='absolute bottom-0 left-0'>
          <img src="/src/assets/All Images/Vector.png" alt="" />
        </div>
        </div>

      </div>

      <div className="flex gap-5 m-10">
        

        <div className=" p-5">

          <img className="w-36 -p-5" src={companyLogo} alt="" />

          <h1 className="text-xl font-bold py-2">
            Company Name:
            <span className="font-normal pl-2">{companyName}</span>
          </h1>

          <h1 className="text-xl font-bold pb-2">
            Job Description:
            <span className="font-normal pl-2 text-justify">{jobDescription}</span>
          </h1>

          <h1 className="text-xl font-bold pb-2">Job Responsibility:
            <span className="font-normal pl-2 text-justify">{jobResponsibility}</span>
          </h1>

          <h1 className="text-xl font-bold">Educational Requirements:</h1>
          <p className="text-xl pb-2">{educationalRequirements}</p>

          <h1 className="text-xl font-bold">Experiences:</h1>
          <p className="text-xl pb-2">{experiences}</p>
          
        </div>

        
        {/* card Div */}

        <div>
          <div className=" bg bg-slate-100 w-80 h-96 p-6 m-auto rounded">
            
            <h1 className="text-xl font-bold pb-3">Job Details</h1>
            <hr className="h-1" />

            <div className="flex py-3">
              <img className="h-7" src="/src/assets/Icons/Frame.png" alt="" />
              <h1 className="text-xl font-semibold pl-1">Salary :
              <span className="font-normal pl-1">{salary}</span></h1>
            </div>

            <div className="flex">
              <img className="h-7" src="/src/assets/Icons/Frame-1.png" alt="" />
              <h1 className="text-xl font-semibold pl-1">Job Title :
              <span className="font-normal pl-1">{jobTitle}</span></h1>
            </div>

            <h1 className="text-xl font-bold py-3">Contact Information</h1>
            <hr className="h-1" />

            <div className="flex pt-3">
              <img className="h-7" src="/src/assets/Icons/Frame-2.png" alt="" />
              <h1 className="text-xl font-semibold pl-1">Phone :
                <span className="font-normal pl-1">{contactInformation.phone}</span>
              </h1>
            </div>

            <div className="flex py-3">
              <img className="h-7" src="/src/assets/Icons/Frame-3.png" alt="" />
              <h1 className="text-xl font-semibold pl-1">Email :  
                <span className="font-normal pl-1">{contactInformation.email}</span>
              </h1>
            </div>

            <div className="flex">
              <img className="h-7" src="/src/assets/Icons/Frame-4.png" alt="" />
              <h1 className="text-xl font-semibold pl-1">Address :
                <span className="font-normal pl-1">{location}</span>
              </h1>
            </div>

          </div>

          {/* Button Section */}

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
