import Header from "../Components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => ({
  cartData: state.cartItems.cartData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
