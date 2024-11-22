import React from 'react'
import {useQuery} from 'react-query'


function PostsComponent () {

    const fetchPosts = async() =>{
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    };
    
        const {data, isError , isLoading , refetch} = useQuery('posts', fetchPosts);

        if(isLoading) return <div>Loading...</div>
        if(isError) return <div>error loading data.</div>

        return(
            <>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refresh Posts</button>
            {data.map(post =>(
                <p key={post.id}>{post.title}</p>
            ))}
            
            </>
        )
    

}

export default PostsComponent ;