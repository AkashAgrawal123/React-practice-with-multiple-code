import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart, removeToCart } from "../Services/Actions/action";

const mapStateToProps = (state: any) => ({
  cartData: state.cartItems.cartData,
});

const mapDispatchToProps = (dispatch: any) => ({
  addToCartHandler: (data: any) => dispatch(addToCart(data)),
  removeToCartHandler: () => dispatch(removeToCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
