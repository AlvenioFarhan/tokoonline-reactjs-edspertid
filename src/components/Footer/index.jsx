import {Container, Row, Col} from 'react-bootstrap';


function Footer() {
  return (
    <>
      <Container>
      <Row>
            <Col sm="12" className="textname">
              <p>© {new Date().getFullYear()} | Alvenio </p>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default Footer;