import { Outlet, Link } from 'react-router-dom'
import './navigation.scss'
import { Fragment } from 'react'
import SolarwindsLogo from '../../assets/solarwindslogo.png'
const Navigation = () => {

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
        <img src={SolarwindsLogo} height='40px' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-appriciate' to='/'>
            Appriciate
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/sign-in'>
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}
export default Navigation;