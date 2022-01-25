import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='topbar'>
        <div className="topbarWrapper">
          <Link className='link' to='/'>
            <h2 className="topbarTitle">XYZ</h2>
          </Link>
          
          <ul className="topbarMenu">
            <Link className='link' to='/'>
              <li className="topbarLinks">Home</li>
            </Link>
            <Link className='link' to='/crypto'>
              <li className="topbarLinks">Cryptos</li>
            </Link>
            
          </ul>
        </div>
    </div>
    )
};

export default Navbar;
