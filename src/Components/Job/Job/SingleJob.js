import { LocationMarkerIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Job.css'
const SingleJob = ({job}) => {
    const {name,date, description, area, time, type} = job;
    console.log(job)
    return (
        <div className='single-job p-4'>
            <h5 className='d-flex align-items-center justify-content-between'><span>{name}</span> <small className='fs-6 gray'>{date}</small></h5>
            <p className='d-flex align-items-center'><span className='small me-3'><LocationMarkerIcon className='location-icon'></LocationMarkerIcon>{area}</span> <span className='small me-2'>{type}</span> | <span className='small ms-2'>{time}</span></p>

            <p className='gray'>{description}</p>
            <div className='w-100 text-end'>
                <Link className='fw-bold btn btn-outline-success' to='/'>Apply now</Link>
            </div>
        </div>
    );
};

export default SingleJob;