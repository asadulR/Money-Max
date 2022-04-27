import { CalendarIcon, UserCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import '../../Home/Home.css';

const SingleBlog = ({ blog }) => {
    const { name, description, img, date, user } = blog;
    console.log(blog)
    return (
        <div className='col single-blog'>
            <div className=' p-2'>
                <div className='text-center pt-3'>
                    <img className='img-fluid rounded' src={img} alt="" />
                </div>
                <div className='p-4'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p className='d-flex justify-content-between'><small><UserCircleIcon className='blog-icon'></UserCircleIcon>{user}</small> <small><CalendarIcon className='blog-icon'></CalendarIcon>{date}</small></p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;