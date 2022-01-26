import {useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { buy } from '../redux/cryptoSlice';

const BuyCrypto = ({cryptoCoin, open, close}) => {
    console.log(close);
    console.log(open);
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    if(!open) {
        return null
    }

    const args = {
        input, cryptoCoin
    }

    const handleSubmit = (e) => {
        e.preventDefault()
 
        dispatch(buy(args))   
        close(false) 
    }

    return createPortal(
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
        </div>,
        document.getElementById('mod')
    )  
};

export default BuyCrypto;
