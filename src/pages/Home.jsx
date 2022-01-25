import '../App.css'
import CryptoList from '../components/CryptoList';
import Info from '../components/Info'

const Home = () => {
    return (
        <div className='container'>
        <Info/>
        <CryptoList/>
        </div>
    )
};

export default Home;
