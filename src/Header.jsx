
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){

    let [menuStatus, setmenuStatus] = useState(false);

    return(
        <>
        <button className="micon" onClick={() => { setmenuStatus(!menuStatus)}}>
            {menuStatus ? <span>&times; </span> : <span>&#9776; </span>}
            </button>
        <div className={`menu ${menuStatus ? 'activemenu' : '' } `}>
            <ul>
                <li> <Link to={'/'} > Home </Link></li>
                <li> <Link to={'products'} > Products </Link></li>                
                <li><Link to={'contactus'} >Contact </Link></li>
            </ul>
        </div>
        </>
    )
}

export {Header}