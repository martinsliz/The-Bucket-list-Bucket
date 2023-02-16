import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/viewAllDestinations">Destinations</NavLink>
    </nav>
  </header>
  )
}

export default Header