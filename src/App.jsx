import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
function App() {
 

  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenidos a Play Gamers'/>
    </div>
  )
}

export default App
