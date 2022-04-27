import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import './Job.css';
import { Link } from 'react-router-dom';
import svg from '../../../Assets/images/wave (1).svg'
const Job = () => {
    const [jobs, setJob] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/job')
            .then((response) => response.json())
            .then((json) => setJob(json));
    }, []);


    return (
        <section>
            <div className='relative'>
                <div className='jobs-posts'>
                    <img className='svg-img' src={svg} alt="" />
                </div>
                <div className='jobs-page'>
                    <h2 className='text-center text-white fw-bold'>Job Posts</h2>
                    <p className='text-white mt-3'><Link className='jobpage-link' to='/'>Home</Link>/<Link className='jobpage-link' to='/'>Job Pages</Link>/<Link className='jobpage-link' to='/job'>Jobs</Link></p>
                </div>
                <div className='jobs'>
                    {
                        jobs.map(job => <SingleJob
                            key={job._id}
                            job={job}
                        >

                        </SingleJob>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Job;