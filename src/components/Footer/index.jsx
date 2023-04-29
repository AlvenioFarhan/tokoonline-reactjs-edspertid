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

          <Col lg="2" md="4" sm="15">
              <div className="footer-item">
                <h4 className="footer-header">Hewan dan Perawatan</h4>
                <ul>
                  <li>
                    <a href="#a">Anjing</a>
                  </li>
                  <li>
                    <a href="#a">Kucing</a>
                  </li>
                  <li>
                    <a href="#a">Reptil</a>
                  </li>
                </ul>
              </div>
            </Col>
  
            <Col lg="2" md="4" sm="12">
              <div className="footer-item">
                <h4 className="footer-header">Tentang Kami</h4>
                <ul>
                  <li>
                    <a href="#a">Bantuan</a>
                  </li>
                  <li>
                    <a href="#a">Kontak kami</a>
                  </li>
                  <li>
                    <a href="#a">Media sosial</a>
                  </li>
                </ul>
              </div>
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