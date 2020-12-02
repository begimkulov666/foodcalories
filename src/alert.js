import React from 'react';

const Alert = ({message}) => {
    return (
                <div className="alert alert-danger mt-2" role='alert' >
                    {'Такого продукта нет '}
                </div>
    );
};

export default Alert;