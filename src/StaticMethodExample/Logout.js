import React, { useContext } from 'react';
import Auth from './Auth'
import { NavItem, NavLink} from 'reactstrap';
import { AuthContext }  from './AuthContext';


function Logout(){
    const [ authState, setAuthState ] = useContext(AuthContext);

    const signOut = ()=>{
        Auth.signOut();
        setAuthState(false);
        window.location.href = '/';
    };

    return (
        <NavItem aria-label="logout-nav-item" className="d-md-down-none" onClick={signOut}>
            <NavLink href="#" ><i className="icon-logout"></i></NavLink>
        </NavItem>
    );
}

export default Logout;