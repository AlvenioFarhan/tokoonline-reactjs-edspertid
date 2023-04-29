import {Card, Button, Row, Col} from 'react-bootstrap';
import style from './style.module.css';
import contoh from '../../assets/Image/contoh1.svg';

function card() {

  const listProduct = [
    {
      'hewan' : 'Sugar Glider',
      'jenis' : 'Classic Grey',
      'sex'   : 'Jantan',
      'age'   : '2 Month'
      },
    {
      'hewan' : 'Sugar Glider',
      'jenis' : 'White Face',
      'sex'   : 'Jantan',
      'age'   : '7 Month'
      },
    {
      'hewan' : 'Sugar Glider',
      'jenis' : 'Leucistic',
      'sex'   : 'Jantan',
      'age'   : '9 Month'
      },
    {
    'hewan' : 'Sugar Glider',
    'jenis' : 'Creamino',
    'sex'   : 'Betina',
    'age'   : '2 Month'
     },
    { 
    'hewan' : 'Sugar Glider',
    'jenis' : 'Classic Grey',
    'sex'   : 'Jantan',
    'age'   : '2 Month'
     },
    {
    'hewan' : 'Sugar Glider',
    'jenis' : 'White Face',
    'sex'   : 'Jantan',
    'age'   : '7 Month'
     },
    {
    'hewan' : 'Sugar Glider',
    'jenis' : 'Leucistic',
    'sex'   : 'Jantan',
    'age'   : '9 Month'
      },
    {
    'hewan' : 'Sugar Glider',
    'jenis' : 'Creamino',
    'sex'   : 'Betina',
    'age'   : '2 Month'
      },

];

  return (
    <>
    <Row>{
      listProduct.map((item,index) => {
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