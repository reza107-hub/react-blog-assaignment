import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Swal from 'sweetalert2'
import Blog from './components/Blog/Blog'
function App() {
  const [blogs,setBlogs] = useState([])
  const [bookmark,setBookmark] = useState([])
  const [markAsRead,setMarkAsRead]=useState(0)
  const markAsReadBtn=(time)=>{
    setMarkAsRead(parseInt(markAsRead)+parseInt(time))
  }
  const addToBookmark = (blog)=>{
    const bookmarked = bookmark.find(b=>b.id==blog.id)
    if (bookmarked) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Have Already Bookmarked This Blog',
      })
      setBookmark([...bookmark,blog])
    }else{
      setBookmark([...bookmark,blog])
    }
  }

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

  return (
    <div className="App lg:w-[90%] mx-auto">
      <Header></Header>
      <hr />
      <div className='mt-5 grid lg:grid-cols-[2.5fr,1fr] gap-y-5'>
      <div>
      {
        blogs.map(blog=> <Blogs blog={blog} addToBookmark={addToBookmark} markAsReadBtn={markAsReadBtn} key={blog.id}></Blogs>)
      }
      
      </div>
      <Bookmark bookmark={bookmark} markAsRead={markAsRead}></Bookmark>
      </div>
      <Blog></Blog>
    </div>
  )
}

export default App
