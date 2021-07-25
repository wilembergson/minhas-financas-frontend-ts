import './Card.css'

type props = {
    title: string,
    children: JSX.Element
}

function Card({title, children}:props){
    return(
        <div className="card">
            <h3 className="card-header">{title}</h3>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card