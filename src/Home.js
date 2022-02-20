import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'Title 1', body: 'Body 1', author: 'mario', id: 1 },
    { title: 'Title 2', body: 'Body 2', author: 'yoshi', id: 2 },
    { title: 'Title 3', body: 'Body 3', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlog = blogs.filter( blog => blog.id !== id )
    setBlogs(newBlog);
  }

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All blogs" handleDelete={ handleDelete }/>
    </div>
  );
}
 
export default Home;