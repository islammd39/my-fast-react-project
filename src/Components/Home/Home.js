import React, { useEffect, useState } from 'react';
import GunCard from './GunCard';

const Home = ({count}) => {
    const [guns, setGuns] = useState([])

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=> res.json())
        .then(data=> setGuns(data))
    },[])
    return (
        <div className='m-5'>
            <div className='text-center font-bold text-2xl my-5'>
                 This is my Gun Store
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
            guns.map(gun=> <GunCard key={gun.id} gun={gun} count={count}></GunCard>)
        }
        </div>
        </div>
    );
};

export default Home;