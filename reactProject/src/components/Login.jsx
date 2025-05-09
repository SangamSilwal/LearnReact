import { useState } from "react";

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {username,password}
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(credentials),
                credentials: 'include'
            });
            const data = await response.json();
            console.log('login response: ',data)
        } catch (error) {
            console.log('login Failed: ',error)
        }
        setPassword('');
        setUsername('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Username"
             value={username} 
             onChange={(e)=>setUsername(e.target.value)}
             />
             <input type="password"
             placeholder="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
             <button type="submit">Submit</button>

        </form>
    )
}

export default Login;