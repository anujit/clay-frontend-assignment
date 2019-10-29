import React from "react";
import { Link } from "react-router-dom";
import IsAuthorised from '../containers/IsAuthorised';
import Logout from './Logout';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/access-doors">Open Doors</Link>
                </li>
                <IsAuthorised action="visit:manage-access" checkAuthorisation={true}>
                    <li>                        
                        <Link to="/manage-access">Manage Access</Link>
                    </li>
                </IsAuthorised>
                <IsAuthorised action="visit:manage-resources" checkAuthorisation={true}>
                    <li>                        
                        <Link to="/manage-resources">Manage Resources</Link>
                    </li>
                </IsAuthorised>
                    <li><Logout /></li>
            </ul>
        </nav>
    )
}