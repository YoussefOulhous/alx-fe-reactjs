import { useState } from "react";

function RegistrationForm () {

    const [username,setusername] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [error,setError] = useState('')

    const handleSubmit = (e) => { e.preventDefault() ;

    if(!username  ) {
        setError('please check if you enter all you infos !!')
        return ;
    } 

    if( !email ) {
        setError('please check if you enter all you infos !!')
        return ;
    } 

    if( !password ) {
        setError('please check if you enter all you infos !!')
        return ;
    } 

    setError(""); 
    alert(`Form submitted: Name: ${username}, Email: ${email}`);
    
  };


    return(
        <>
        <form onSubmit={handleSubmit}>

        {error && <p style={{color:'red'}}>{error}</p>}
            
            <label>Name :</label>
            <input type="text" 
                value={username}
                
                onChange={(e) => setname(e.target.value)} 
             />

            <label>Email :</label>
            <input type="email" 
                value={email}
                required
                 onChange={(e) => setemail(e.target.value)} 
            />
            
            <label>password :</label>
            <input type="password" 
                    value={password}
                    
                    onChange={(e) => setpassword(e.target.value)} 
            />
            <button type="submit"> Submit.</button>
        </form>
    
        </>

    )


}

export default RegistrationForm ;