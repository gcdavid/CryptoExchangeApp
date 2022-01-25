import { createPortal } from 'react-dom'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {exchange} from '../redux/cryptoSlice'
import {coins} from '../data'
import '../App.css'

const ExchangeCrypto = ({open, item,close }) => {
    const [exchangeItem, setExchangeItem] = useState({})
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    if(!open) {
        return null
    }
    
    const handleSelect = (id) => {
        const item = coins.filter((coin) => coin.id === +id)
        setExchangeItem(item[0])
        console.log(item);
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(exchange({
            exchangeItem, input, changeCoin: item.item.cryptoCoin.id
        }))
        close(false)
    }

    return createPortal (
        <div className='exchange' style={{position: 'absolute', top:0, bottom:0, left:0, right:0, background: 'black', height: '100vh',opacity: 1}}>
            <h3 className="exchangeTitle">Exchange {item?.item?.cryptoCoin?.title} with</h3>
            <select className='select' onChange={(e) => handleSelect(e.target.value)}>
                <option disabled>
                    choose coin
                    </option>
            {coins.map((coin) =>  {
                if(coin?.title !== item?.item?.cryptoCoin?.title){
                  
                    return (
                        <option value={coin.id}>{coin?.title}</option> 
                    ) 
                }
            })}
                        
            </select>
            <label  className='label' onChange={(e) => setInput(e.target.value)}>Amount of {item?.item?.cryptoCoin?.title}</label>
            <input type='text' onChange={(e) => setInput(e.target.value)} className='input'/>
            <button className="btn" onClick={handleClick}>Exchange</button> 
        </div>,
        document.getElementById('modal')
    )
};

export default ExchangeCrypto;
