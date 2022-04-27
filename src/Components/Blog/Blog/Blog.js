import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/blog')
            .then((response) => response.json())
            .then((json) => {
                setBlogs(json)
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                loading ? (<Loading></Loading>) :
                    (<div className="container py-5">
                        <h2 className='text-center mb-5 fs-1 fw-bold text-primary'>Our Blog</h2>

                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-5 py-5'>
                            {
                                blogs.map(blog => <SingleBlog
                                    key={blog._id}
                                    blog={blog}
                                ></SingleBlog>)
                            }
                        </div>
                    </div>)

            }
        </>
    );
};

export default Blog;