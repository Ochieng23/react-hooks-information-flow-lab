import React  from "react";
function Header({onDarkModeClick,xev}){

    return(
        
        <div className={"App " + (xev ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={onDarkModeClick}>
            {xev ? "Dark" : "Light"} Mode
          </button>
        </header>
        
      </div>
    )
}
export default Header;