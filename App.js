import React, {useState, useEffect} from "react";

import Navigation from './app/navigations/Navigation';
import AnimacionEntrada from "./components/Animaciones/AnimacionEntrada";





export default function App() {

  const [animated, setAnimated] = useState(false);

  if (!animated)

  return ( 
    <AnimacionEntrada
    setAnimated={setAnimated}/>
  )
  
else
  return (<Navigation/>)
}