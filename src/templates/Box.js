import React from 'react';
import '../styles/Box.scss';

const Box = ({entity, entityName, entityDetailsValue, entityDetailsKey, onDeleteEntity}) => {
    return (
        <div className="entity-box">
            <div className="entity-inner-wrap">
                <h4>{entityName}</h4>
                <p>
                    {entityDetailsKey} : {entityDetailsValue}
                </p>
                <button className="btn btn-warning" onClick={() => {onDeleteEntity(entity)}}>Remove</button>                
            </div>
        </div>
    );
}

export default Box;
