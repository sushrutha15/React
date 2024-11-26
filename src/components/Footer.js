import logo from "../utils/Images/svm_logo.png";

const FooterComponent =() =>{
    return(
        <div className="footerContainer">
           <div className="footerlogoContainer">
              <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="copyrights">
              <h3>copyrights reserved By@SriVari Mithai </h3>
              <p> ENR Square, Opp: SBI Hydershakote, Suncity Rd,<br/>
                  Hyderabad, Telangana 500086, India</p>
            </div>
    
        </div>
    )
    }

export default FooterComponent;