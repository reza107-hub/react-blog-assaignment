import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Blog from '../Blog/Blog';

const Blogs = ({blog,addToBookmark,markAsReadBtn}) => {
    return (
        <div className='mt-6'>
            <SingleBlog blog={blog} markAsReadBtn={markAsReadBtn} addToBookmark={addToBookmark} key={blog.id}></SingleBlog>
            
        </div>
    );
};

export default Blogs;