import maximus from "./assets/maximus.svg"
const NavBar = () => {
    return(<div>
        <div><img src={maximus} alt="Logo de maximus"/></div>
    <button>Gabinetes</button>
    <button>Perifericos</button>
    <button>Computadoras</button>
    <button>Ayuda</button>
    </div>)
}

export default NavBar;

