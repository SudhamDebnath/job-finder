import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {

    const jobs = useLoaderData()

    console.log(jobs);

    const { companyName} = jobs.job

    return (
        <div>
            <h1>Jobs Details:{companyName}</h1>
        </div>
    );
};

export default Jobs;