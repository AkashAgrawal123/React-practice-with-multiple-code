import "./Home.scss";

const Home = (props: any) => {
  console.log(props.cartData, "Home");

  return (
    <>
      <div>
        <h1>Home component</h1>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://picsum.photos/200/300?image=0" />
          </div>
          <div className="text-wrapper item">
            <span>Laptop</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() =>
                props.addToCartHandler({ price: 1000, name: "Laptop" })
              }
            >
              Add to cart
            </button>
            <button onClick={() => props.removeToCartHandler()}>
              Remove to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
