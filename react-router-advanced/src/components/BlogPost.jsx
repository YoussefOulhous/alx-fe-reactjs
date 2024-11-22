import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  
  const { id } = useParams();

 
  const blogContent = {
    1: 'Content for React Basics.',
    2: 'Content for Dynamic Routing in React.',
    3: 'Content for Understanding React Hooks.',
  };

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      <p>{blogContent[id] || 'Blog post not found!'}</p>
    </div>
  );
};

export default BlogPost;
