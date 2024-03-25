import { FaCartShopping } from "react-icons/fa6";
import "./Header.scss";

const Header = (props) => {
  const cartLength = props.cartData ? props.cartData.length : 0;
  return (
    <div>
      <div className="add-to-cart">
        <FaCartShopping />
        <span className="item-count">{cartLength}</span>
      </div>
    </div>
  );
};

export default Header;
