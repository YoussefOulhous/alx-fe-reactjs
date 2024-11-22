import { useState } from "react";

function RegistrationForm () {

    const [username,setusername] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [errors,setErrors] = useState('')

    const handleSubmit = (e) => { e.preventDefault() ;

    if(!username  ) {
        setErrors('please check if you enter all you infos !!')
        return ;
    } 

    if(!email ) {
        setErrors('please check if you enter all you infos !!')
        return ;
    } 

    if(!password ) {
        setErrors('please check if you enter all you infos !!')
        return ;
    } 

    setErrors(""); 
    alert(`Form submitted: Name: ${username}, Email: ${email}`);
    
  };


    return(
        <>
        <form onSubmit={handleSubmit}>

        {errors && <p style={{color:'red'}}>{errors}</p>}
            
            <label>Name :</label>
            <input type="text" 
                value={username}
                
                onChange={(e) => setusername(e.target.value)} 
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