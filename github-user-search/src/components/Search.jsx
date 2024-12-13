import React , {useState} from 'react'
import { fetchUserData } from '../services/githubService';
import { fetchUsersByCriteria } from '../services/fetcheDataUser';



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

        const query = `location:${username}+repos:>10`;

        try{
            const userData = await fetchUsersByCriteria(query);
            setuserData(userData.items);

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
            {/* login */}
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}
            {userData && (
                <div>
                    {userData.map((user)=>{
                        return(

                            <div key={user.id}>
                                <img src={user.avatar_url} alt={user.login}  className='w-32'/>
                                <h2>{user.name || 'No Name'}</h2>
                                <a href={user.html_url}>Link to the profile </a>
                            </div>

                        )
                       
                        
                    })}
                </div>
            )
                

            }
        </div>
    </div>
  )
}

export default SearchInput