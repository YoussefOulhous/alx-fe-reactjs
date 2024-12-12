import React , {useState} from 'react'
import { fetchUserData } from '../services/githubService';



function SearchInput() {

    const [username , Setusername ] = useState('');
    const [userData, setuserData] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 


    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setuserData(null)

        try{
            const data = await fetchUserData(username);
            setuserData(data);

        } catch(error){
            setError(true);

        } finally{
            setLoading(false);
        }
        
    }

  return (
    <div className='p-10 mx-auto w-1/4 border-2 rounded-sm border-gray-700 mt-8 h-auto '>
        <form action="">
            <h1 className='text-3xl font-semibold   text-blue-600'>Github search :</h1>
            <input type="text" value={username} onChange={(e)=>{ Setusername(e.target.value) }}  placeholder='Search !'  className='w-52 h-10 p-4  border-2 rounded-md border-black  mt-8'/>
            <button onClick={handleSearch} className='w-32 h-10 border rounded-md mt-6 text-xl text-white  bg-green-600'>Search</button>
            {/* onSubmit */}
        </form>
        
        
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.loggin} />
                    <h2 className='text-center text-xl'>{userData.name || 'No Name'}</h2>
                    <a href="{userData.html_url}" target='_blank' className='text-blue-600 text-center'>Profile Link !</a>
                </div>
            )}
        </div>
    </div>
  )
}

export default SearchInput