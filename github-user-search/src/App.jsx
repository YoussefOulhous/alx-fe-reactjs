import React from 'react'
import './index.css'
import SearchInput from './components/SearchInput'
import { fetchUserData } from './services/githubService'


function App() {

  const testFetching = async() =>{
    try{
      const Userdata = await fetchUserData('octact');
      console.log( Userdata)
    } catch(error){
      console.error("Something went wrong:", error)
    }
  }

  testFetching();


  return (
    < >
    <SearchInput />
    
    </>
  )
}

export default App