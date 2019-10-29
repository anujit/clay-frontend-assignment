import React from 'react';

const Box = ({entityName, entityDetailsValue, entityDetailsKey, onDeleteEntity}) => {
    return (
        <div className="entity-box">
            <div className="entity-name-wrap">
                <h4>{entityName}</h4>
            </div>
            <p>
                {entityDetailsKey} : {entityDetailsValue}
            </p>
            <button onClick={() => {onDeleteEntity(entity)}}>Remove</button>
        </div>
    );
}

export default Box;
