import logo_c from "../utils/Images/logo_c.png";

const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo_c} alt="Logo" />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
}

export default HeaderComponent;