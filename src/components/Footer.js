import logo_c from "../utils/Images/logo_c.png";

const FooterComponent =() =>{
    return(
        <div className="footerContainer">
           <div className="footerlogoContainer">
              <img className="logo" src={logo_c} alt="Logo" />
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