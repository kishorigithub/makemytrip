import axios from 'axios';
import { useRef } from 'react';
const Googlelogin=()=>{

    const handleSuccess = async (response)=>{
        const token= response.credentials;
        try{
            const res = await axios.post("http://localhost:5000/auth/google",{token});
            console.log('login Successfully',res.data);
            
        }catch(error){
            console.log('login failed',error

            );
            

        }
    }

    const handelfailure = (error)=>{
        console.error('Google Login Error',error);
        
    }


    return(
        <div>
            <Googlelogin
            onSuccess={handleSuccess}
            onError={handelfailure}>

            </Googlelogin>
        </div>
    )

}
export default Googlelogin;