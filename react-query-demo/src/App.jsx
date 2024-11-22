import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react'
import PostsComponent from './components/PostsComponent ';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

const queryClient = new QueryClient();

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
    <Router>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </Router>
  </QueryClientProvider>
  )
}

export default App ;