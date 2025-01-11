import "./Header.css";
import { IconContext } from "react-icons";
import { PiChefHatBold } from "react-icons/pi";
const Header = () => {
    return (
        <header>
            <IconContext.Provider value={{ className: "chef_hat" }}>
                <PiChefHatBold />
            </IconContext.Provider>

            <h1>Chef Claude</h1>
        </header>
    );
};

export default Header;
