import React from 'react';
import { useParams } from 'react-router';

export const UserDetails = ({ list }) => {
    const params = useParams()

    const currentUser = list.find((i) => i.number === parseInt(params.number, 10));

    return (
        <div className='details-div'>
            <p className='detail'>NAME: {currentUser.name}</p>
            <p className='detail'>YEAR: {currentUser.year}</p>
            <p className='detail'>POSITION: {currentUser.position}</p>
            <p className='detail'>NUMBER: {currentUser.number}</p>
        </div>
    )
} 