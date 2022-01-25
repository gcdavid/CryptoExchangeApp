import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buy } from '../redux/cryptoSlice';

const BuyCrypto = ({cryptoCoin}) => {
    let navigate = useNavigate()
    const total = useSelector(state => state.crypto.total)
    const number = useSelector(state => state.crypto.number)
    const state = useSelector(state => state.crypto.coins)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const args = {
        input, cryptoCoin
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(buy(args))
        navigate('/')
    }

    return (
        <div className='buy' style={{position: 'absolute', top:0, bottom:0, left:0, right:0, background: 'black', height: '100vh',opacity: 1}}>
            <div className="buyContainer">
                <div className="buyTitle">
                    Buy {cryptoCoin.title}
                </div>
            <form>
                <input type="text" onChange={(e) => setInput(e.target.value)}/>   
                <button className='buyButton' onClick={handleSubmit}>Buy</button>
            </form>
            </div>
        </div>
    )  
};

export default BuyCrypto;
