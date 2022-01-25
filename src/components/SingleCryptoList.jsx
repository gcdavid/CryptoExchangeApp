
import {useState} from 'react';
import ExchangeCrypto from './ExchangeCrypto';

const SingleCryptoList = (item) => {
    console.log(item);
        const [open, setOpen] = useState(false)
    
        const [title, setTitle] = useState('')
        const handleClick = (e) => {
        e.preventDefault()
            setOpen(true)
            setTitle(item.title)
        }
        return (
            <>
            <div style={{position: 'relative'}} className='listItem'>
                <div className="listWrapper">
                    <div className="listCoin">  
                    <div className="imgContainer">
                    <img className='coinImg'src={item?.item?.cryptoCoin?.img} alt="" />
                    </div>
                    <span className="coinTitle">
                        {item?.item?.cryptoCoin?.symbol}  {item?.item?.cryptoCoin?.title}
                    </span>
                    <span className="coinAmount">{item?.item?.input}</span>
                    </div>
                        <button className="btn"  
                        onClick={handleClick}>Exchange</button>                
                </div>
            </div>
            {open && <ExchangeCrypto title={title} item={item} close={setOpen} open={open}/>}
            </>

            
        )
};


export default SingleCryptoList;
