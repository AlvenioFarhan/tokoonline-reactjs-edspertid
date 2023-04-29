import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../../assets/Image/Logo.png';
import Button from 'react-bootstrap/Button';
import style from './style.module.css';

function Footer() {
  return (
    <>
    <div className={style.footer}>
      <Container>
        <Row>
          <Col lg="6" md="12" sm="12">
          <Button variant="contained">
            <img style={{ width: 100, height: 50 }} src={Logo} href="Home" class="center"alt="" />
          </Button>
          <p className="footer-address">
                Jl. Tembalang, Kota Semarang 50271
              </p>
          </Col>
        </Row>
      <Row>
            <Col sm="12" className="textname">
              <p>© {new Date().getFullYear()} | Alvenio </p>
            </Col>
          </Row>
      </Container>
    </div>
    </>
  );
}

export default Footer;