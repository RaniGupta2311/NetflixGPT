import logo from "../utils/media/Netflix_Logo_PMS.png";
const Header=()=>{
    return (
        <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-30">
            <img src={logo}
                alt="logo"
                className="w-44"
            />
        </div>
    )
}
export default Header;