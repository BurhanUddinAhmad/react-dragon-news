import moment from 'moment';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <>
            <div className='text-center my-6 space-y-3'>
            <div >
                <img className='mx-auto' src={logo} alt="Logo" />
            </div>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </>
    );
};

export default Header;