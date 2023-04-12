import React from "react";

const Bookmark = ({bookmark,markAsRead}) => {
  return (
    <div className="mt-5">
      <div className="bg-[#6047EC1A] p-4 rounded-lg font-semibold sticky top-0">
        <h1 className="text-[#6047EC] text-2xl font-semibold">
          Spent time on read : <small>{markAsRead} min</small>
        </h1>
      </div>

      <div className="mt-5 p-4 rounded-md bg-slate-200 sticky top-24">
        <h1 className="font-bold text-2xl">
          Bookmarked Blogs : {bookmark.length}
        </h1>
        <div className="mt-4  rounded-lg p-2">
          {bookmark.map((Bookmark) => (
            <p className="mt-3 bg-white p-2 rounded-lg">
              {Bookmark.blog_title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
