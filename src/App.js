
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Bill from "./components/Bill";
import Items from "./components/Items";


function App() {
    let [cartSize,setCartSize]=useState(JSON.parse(localStorage.getItem('imdb')).length||0)

    return (

    <div>
        <BrowserRouter>
            <Navbar cartSize={cartSize} />
            <Routes>
                <Route path="/bill"  setCartSize={setCartSize} element={<Bill/>}/>
                <Route path="/"  setCartSize={setCartSize} element={<Items/>}/>
            </Routes>
        </BrowserRouter>
        {/*        /!*<Route exact path='/Bill' element={< Bill />}></Route>*!/*/}

    </div>
  );
}

export default App;
