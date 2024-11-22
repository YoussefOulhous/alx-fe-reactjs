import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
 
  const blogs = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Dynamic Routing in React' },
    { id: 3, title: 'Understanding React Hooks' },
  ];

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
