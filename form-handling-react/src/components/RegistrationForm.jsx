import {useState} from 'react';

export default function RegistrationForm(){
    const [ formData, setFormData ] = useState({
        email:"",
        username:"",
        password:"",
    });
    const [ errors, setErrors ] = useState({});

    const handleChange = async (e) => {
        e.preventDefault();

        //Basic validation
        if (!formData.username || !formData.email || !formData.password){
            setErrors("All field are required");
            return;
        }
        setErrors("");

        // Successful form submission
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
    }
}
return(
    <form onSubmit={handleChange}>
        <div>
            <label>Email:</label>
            <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                required 
            />
        </div>
        <div>
            <label>Username:</label>
            <input 
                type="text" 
                value={formData.username} 
                onChange={(e) => setFormData({...formData, username: e.target.value})} 
                required 
            />
        </div>
        <div>
            <label>Password:</label>
            <input 
                type="password" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                required 
            />
        </div>
        {errors && <p style={{color: 'red'}}>{errors}</p>}
        <button type="submit">Register</button>
    </form>
)