import CartWidget from "./CartWidget"

const NavbarComponent = () =>{
    
    return(
        <nav className="navContainer">
          <a className='aLink'>Play Gamers</a>
          <a className='aLink'>Juegos</a>
          <a className='aLink'>Consolas</a>
          <a className='aLink'>Monitores</a>
          <CartWidget counter={15}/>
        </nav>
    )
}

export default NavbarComponent 