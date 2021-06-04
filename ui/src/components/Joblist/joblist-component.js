import { useState } from "react";

function JobList() {
    const [listOfJobs] = useState([
        {
            key    : 'TikTok',
            name  : 'Software Engineer',
            status: 'Open'
        },
        {
            key    : 'Tesla',
            name  : 'Software Engineer',
            status: 'Open'
        },
        {
            key    : 'Zendesk',
            name  : 'Software Engineer',
            status: 'Open'
        },
        {
            key    : 'Workday',
            name  : 'Software Engineer',
            status: 'Open'
        }
    ]);

    return(
        <div>
            {listOfJobs.map((job) => {
                return(
                    <div key={job.key} className="job-container grow">{job.key}-{job.name}</div>
                )
            })}
        </div>
    )
}

export default JobList;
