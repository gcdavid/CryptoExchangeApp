import { useSelector } from 'react-redux';
import '../App.css'
import {coins} from '../data'

const Info = () => {
    const coinWallet = useSelector(state => state.crypto.coins)
    
    return (
        <div className='info'>
            <div className="infoWrapper">
                <div className="infoContainer">
                    <h5 className="infoTitle">
                        Number of Cryptpo Coins Type
                    </h5>
                    <div className="infoQuantity">
                        {coinWallet.length}
                    </div>
                </div>

                <div className="infoContainer">
                    <h5 className="infoTitle">
                    Total Number of Crypto Coins to buy
                    </h5>
                    <div className="infoQuantity">
                        {coins.length}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Info

