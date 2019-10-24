import React from "react";
import { Link } from "react-router-dom";
import IsAuthenticated from '../containers/IsAuthenticated';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/access-doors">Open Doors</Link>
                </li>
                <IsAuthenticated checkAuthorisation={true}>
                    <li>                        
                        <Link to="/manage-access">Manage Access</Link>
                    </li>
                </IsAuthenticated>
                <IsAuthenticated checkAuthorisation={true}>
                    <li>                        
                        <Link to="/manage-resources">Manage Resources</Link>
                    </li>
                </IsAuthenticated>
            </ul>
        </nav>
    )
}