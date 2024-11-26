import logo from "../utils/Images/svm_logo.png";

const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
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