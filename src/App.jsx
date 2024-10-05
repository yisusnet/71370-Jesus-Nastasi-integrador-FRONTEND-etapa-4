import { BrowserRouter} from "react-router-dom"
import Rutas from "./routes/Rutas"

import Footer from "./components/Footer"
import useScrollHide from "./hooks/useScrollHide"
import Header from "./components/Header"



const App = () => {
  useScrollHide(); 
  return (
    <BrowserRouter>
    <Header/>


    <Rutas/>

    <Footer/>
     </BrowserRouter>
  )
}

export default App
