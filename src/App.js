import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Main from './Components/Main';

const App = () => {
  const [addtocart, setaddtocart] = useState(0)
  const [saved, setsaved] = useState(0)

  return (
    <>
      <Navbar saved={saved}/>
      <Home addtocart={addtocart} />
      <Main setaddtocart={setaddtocart} addtocart={addtocart}  setsaved={setsaved} saved={saved}/>
    </>
  )
}

export default App
