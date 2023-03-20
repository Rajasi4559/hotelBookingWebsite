import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img className="logoImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKQyg36mfUUs-4Bz_4m6ehpvTm4KsWfaVmA&usqp=CAU"></img>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;