import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import './Job.css';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const Job = () => {
    const [jobs, setJob] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/job')
            .then((response) => response.json())
            .then((json) => {
                setJob(json)
                setLoading(false);
            });
    }, []);


    return (
        <section className='job-section'>
            <div className='py-5'>
                <div className='jobs-page py-2'>
                    <h2 className='text-center text-success fw-bold'>Job Posts</h2>
                    <p className='text-primary text-center mt-3'><Link className='jobpage-link' to='/'>Home</Link>/<Link className='jobpage-link' to='/'>Job Pages</Link>/<Link className='jobpage-link' to='/job'>Jobs</Link></p>
                </div>
            </div>
            <>
                {
                    loading ? (<Loading></Loading>) :
                        (<div className='jobs container'>
                            <h3 className='d-flex text-success align-items-center'>{jobs.length} <span className='ms-2'>job offers</span></h3>
                            {
                                jobs.map(job => <SingleJob
                                    key={job._id}
                                    job={job}
                                >

                                </SingleJob>)
                            }
                        </div>)
                }
            </>
        </section>
    );
};

export default Job;