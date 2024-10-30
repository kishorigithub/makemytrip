import { Link } from "react-router-dom";

const Navbartwo=()=>{
    return(
       <nav>
        <ul>    
            <li><Link to="/">Home</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/booking'>Booking</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/search'>Search</Link></li>

        </ul>

       </nav>
    )
}
export default Navbartwo;