// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Guitarra ({guitarra}){

    const { id, nombre, imagen, Precio, descripción } = guitarra
    
    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`/img/${imagen}.jpg`} alt="imagen guitarra" />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{nombre}</h3>
            <p>{descripción}</p>
            <p className="fw-black text-primary fs-3">$ {Precio} </p>
            <button 
                type="button"
                className="btn btn-dark w-100"
            >Agregar al Carrito</button>
        </div>
    </div>
    )

}