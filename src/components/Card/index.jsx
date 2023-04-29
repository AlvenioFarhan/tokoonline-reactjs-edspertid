import {Card, Button, Row, Col} from 'react-bootstrap';
import style from './card.css';
import contoh from '../../assets/Image/sggrey.jpg';
import data from '../../assets/data';

function card() {

  return (
    <>
    <Row>{
      data.map((item,index) => {
        return(
        <Col sm="3" key={index}>
        <Card className={ style.card }>
          <Card.Img variant="top" src={contoh} />
          <Card.Body>
          <Card.Title>{item.hewan}</Card.Title>
            <Card.Text>
               Sugar Glider adalah ...  <br/>
               Data Sugar Glider :      <br/>
               Jenis :  {item.jenis}    <br/>
               Kelamin :  {item.sex}    <br/>
               Usia :  {item.age}      <br/>

            </Card.Text>
            <Button variant="success">Lihat Detail</Button>
          </Card.Body>
        </Card>
        </Col>
           )
         })
        }
    </Row>
    </>
    
  );
}

export default card;