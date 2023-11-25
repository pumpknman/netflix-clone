import React, { useEffect } from 'react'
import axios from '../api/axios'

export default function Row({ isLargeLow, title, id, fetchUrl }) {
    useEffect (() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log('request', request);
    };

  return (
    <div>
        
    </div>
  )
}
