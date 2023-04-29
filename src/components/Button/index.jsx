import style from './button.css'

function Button(props){
    return <Button onClick={() => props.handleClick(props.title)} className={style.button}>Klik</Button>
}

export default Button;