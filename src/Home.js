import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'Title 1', body: 'Body 1', author: 'mario', id: 1 },
    { title: 'Title 2', body: 'Body 2', author: 'yoshi', id: 2 },
    { title: 'Title 3', body: 'Body 3', author: 'mario', id: 3 }
  ])

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All blogs" />
      <BlogList blogs={ blogs.filter( (blog) => blog.author === 'mario' ) } title="Mario's blog" />
    </div>
  );
}
 
export default Home;