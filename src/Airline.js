import React from 'react'



const Airline = (props) => {
   const {country,logo,name,slogan,website} = props.airline[0]
    return (
        <div className="col-md-4 my-2">
            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="logo" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{slogan}</p>
                    <a rel="noreferrer" href={`http://${website}`} target='_blank' className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )

}

export default Airline