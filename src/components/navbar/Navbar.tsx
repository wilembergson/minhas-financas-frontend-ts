function Navbar(){



    return(
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
            <a href="/home" className="navbar-brand">Minhas Finanças</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li>
                        <a className="nav-link" aria-current="page" href="/login">Login</a>
                        <a className="nav-link" aria-current="page" href="/cadastro-usuario">Cadastrar usuário</a>
                    </li>
                </ul>
            </div>
      </div>
    </div>

    )
}

export default Navbar