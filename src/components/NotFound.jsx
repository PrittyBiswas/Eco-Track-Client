import React from 'react';
import NotFoundImg from '../assets/NotFound.jpg'

const NotFound = () => {
    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <img src={NotFoundImg} alt="" srcset="" />
            <a
                href="/"
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
                Go Home
            </a>
        </div>
    );
};

export default NotFound;