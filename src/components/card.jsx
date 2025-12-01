import s from './card.module.css'


/* Este é um jeito de fazer usando o props
export const Card = (props) => {
    return(
        <>
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>{props.species}</p>
        </>
    )
}
*/

/* Aqui é outro jeito, ele desestrutura os props diretamente no parâmetro da função */
export const Card = ({image, name, species}) => {
    return(
        <div className={s.cardBackground}>
            <img className={s.cardImage} src={image} alt={name}/>
            <h2 className={s.cardTitle}>{name}</h2>
            <p className={s.cardText}>{species}</p>
        </div>
    )
}