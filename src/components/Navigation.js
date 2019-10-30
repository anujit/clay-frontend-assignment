import React from "react";
import { NavLink } from "react-router-dom";
import IsAuthorised from '../containers/IsAuthorised';
import Logout from './Logout';
import '../styles/Navigation.scss';

export default function Navigation() {
    return (
        <nav>
            <ul className="nav-pills">
                <li className="nav-item">
                    <NavLink to="/access-doors" activeClassName="nav-link active">
                        Open Doors
                    </NavLink>
                </li>
                <IsAuthorised action="visit:manage-access" isPrivilegedAction={true}>
                    <li className="nav-item">                        
                        <NavLink to="/manage-access" activeClassName="nav-link active">
                            Manage Access
                        </NavLink>
                    </li>
                </IsAuthorised>
                <IsAuthorised action="visit:manage-resources" isPrivilegedAction={true}>
                    <li className="nav-item">                        
                        <NavLink to="/manage-resources" activeClassName="nav-link active">
                            Manage Resources
                        </NavLink>
                    </li>
                </IsAuthorised>
                <IsAuthorised action="visit:events" isPrivilegedAction={true}>
                    <li className="nav-item">                        
                        <NavLink activeClassName="nav-link active" to="/events">Events</NavLink>
                    </li>
                </IsAuthorised>                
                <li><Logout /></li>
            </ul>
        </nav>
    )
}