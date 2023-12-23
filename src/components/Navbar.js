import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

function Navbar({ cartData }) {
    return (<>
    <div className='sticky-top' style={{background:'transparent'}}>
            <div className='w-100 px-5 row position-relative'>
                <NavLink className='navbar-brand d-none d-lg-flex text-light col-auto m-0 my-auto me-auto' to='/'  >
                    <img src={process.env.PUBLIC_URL + '/logo/watch_logo.png'} alt="/" className="" style={{height:50, width:50}} />
                </NavLink>
                <nav className='navbar px-0 py-3 navbar-expand-lg navbar-light col-auto'>
                    <div>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <i className="bi bi-list text-light"></i>
                        </button>
                        <div className='collapse navbar-collapse rounded-3 custom-header-md-open justify-content-end' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item active'>
                                    <NavLink className='nav-link text-light' to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav-item active'>
                                    <NavLink className='nav-link text-light' to='/products'>
                                        Products
                                    </NavLink>
                                </li>
                                <li className='nav-item active'>
                                    <NavLink className='nav-link text-light' to='/products'>
                                        Business
                                    </NavLink>
                                </li>
                                <li className='nav-item active'>
                                    <NavLink className='nav-link text-light' to='/products'>
                                        Connection
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='d-flex position-absolute w-auto end-0 pt-4'>
                        <NavLink to='/cart' className='nav-link position-relative link-light'>
                            <i className='bi bi-bag-fill'></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartData?.carts?.length}
                            </span>
                        </NavLink>
                    </div>
            </div>
        </div>
    </>
    )
}

export default Navbar;