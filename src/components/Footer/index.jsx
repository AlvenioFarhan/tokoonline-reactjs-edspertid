import Card from 'react-bootstrap/Card';
import contoh2 from '../../assets/Image/contoh2.svg';
import style from './style.module.css';


function ImageAndTextExample() {
  return (
    <>
      <br />
      <Card>
        <Card.Body>
          <Card.Text className={style.footer}>
            Ini adalah Contoh Footer
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={contoh2} />
      </Card>
    </>
  );
}

export default ImageAndTextExample;