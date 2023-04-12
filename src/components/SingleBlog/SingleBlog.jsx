import React, { useState } from "react";

const SingleBlog = ({blog,addToBookmark,markAsReadBtn}) => {
    // console.log(blog);
    
    
    const {author_image,
        author_name,
        blog_cover_image,
        blog_title,
        publish_date,
        read_time
    }=blog
    
  return (
    <div className="card lg:w-11/12 px-1 bg-base-100">
      <figure>
        <img className="w-full lg:h-96"
          src={blog_cover_image}
          alt=""
        />
      </figure>
      <div className="card-body lg:px-0 px-1">
        <div className="flex justify-between">
        <div className="flex">
            <div>
                <img className="w-full h-12 rounded-[50%]" src={author_image} alt="" />
            </div>

            <div className="pl-5">
                <p className="font-bold">{author_name}</p>
                <p>{publish_date}</p>
            </div>
        </div>
        <div className="flex items-center">
            <p className="pr-4">{read_time} min read</p>
            <button onClick={()=>addToBookmark(blog)}>
            <i className="fa-regular fa-bookmark"></i>
            {/* <i className="fa-regular fa-bookmark fa-solid fa-bookmark"></i> */}
            </button>
        </div>
        </div>
        <h2 className="card-title">{blog_title}</h2>
        <div className="">
          <button onClick={()=>markAsReadBtn(read_time)} className="text-[#6047EC] underline">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
