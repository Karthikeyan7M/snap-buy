import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>SnapBuy &copy;{curYear}. Copyright Owned by Karthikeyan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
