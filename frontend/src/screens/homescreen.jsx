//all products will be displayed here and user can select their desired one ,to go to product screen
import Loader from "../components/loader.jsx";
import { Row, Col } from "react-bootstrap";
import Product from "../components/product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import ProductCarousel from "../components/ProductCarousel.jsx";
import Message from "../components/Message.jsx";
let Homescreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(); //rename 'data' comming from getproducts as 'products'
  return (
    <>
      <ProductCarousel />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((prod) => (
              <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={prod} />
              </Col>
            ))}
          </Row>{" "}
        </>
      )}
    </>
  );
};

export default Homescreen;
