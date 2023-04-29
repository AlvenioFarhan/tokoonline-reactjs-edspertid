import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import style from './style.module.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Home (){

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
        console.log(count);
    };

    return (
        <>
        <Header/>

        <div className={style.container}>
            <h3 className={style['text-page']}> Halaman Home</h3>

            <h4> Contoh Penggunaan useState</h4>
            <h4> Nilai Count adalah {count} </h4>
            <Button onClick={handleClick} variant="success">Tambah Count</Button>
        </div>
        
        <br/>
        <Card/>
        <br/>
        <Footer/>

        </>
    )
}
export default Home;