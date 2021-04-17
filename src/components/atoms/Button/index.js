import React from 'react';


const Button = ({label,saveData}) => {
    return (
        <div>
            <button type="button" className="btn btn-success" onClick={saveData}>
            {label}
            </button>
        </div>
    );
};

export default Button;


