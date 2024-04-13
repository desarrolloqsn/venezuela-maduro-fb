import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import { Collapse, Tooltip, Button, Select } from 'antd';
import video from './../../imagenes/AtributosPoliticos.mp4'
import imagen from './../../imagenes/grafo.png'

// //FILTRO FECHAS
// import json from './../../datos/datos_globales_grafo_atributos_politicos.json'
// import jsonFechas from './../../datos/rango_fechas.json'
// //FIN FILTRO FECHAS
// const { Panel } = Collapse;
// const text = `
// Este grafo representa una comparación entre dos políticos basada en tweets relacionados con ellos. Cada político tiene atributos asignados que están rodeados por las palabras que formaron dicho atributo y se mencionaron en los tweets.`;



export default function Graph2(){

  const [network, setNetwork] = useState();
  const [data, setData] = useState();
  const [displayGrafoTendencias, setdisplayGrafoTendencias] = useState('none');
  const [showGraphTendencias, setShowGraphTendencias] = useState(false);
  const [display, setDisplay] = useState(true)
//FILTRO FECHAS
// const [fechas, setFechas] = useState(jsonFechas.fechas)
// const [filtroFecha, setFiltroFecha] = useState(fechas[0])

// const opciones = fechas.map((fecha, index) => {
//   return (
//     <Select.Option key={index} value={fecha}>
//       {fecha}
//     </Select.Option>
//   );
// });

// const handleFiltroFechaChange = (valor) => {
//   setFiltroFecha(valor);
//   // console.log(valor)
// };
// // FIN FILTRO FECHAS

//   function handleDisplay(){
//     setDisplay(!display)
//   }

//   useEffect(() => {
//     window.addEventListener('error', e => {
//         if (e.message === 'ResizeObserver loop limit exceeded') {
//             const resizeObserverErrDiv = document.getElementById(
//                 'webpack-dev-server-client-overlay-div'
//             );
//             const resizeObserverErr = document.getElementById(
//                 'webpack-dev-server-client-overlay'
//             );
//             if (resizeObserverErr) {
//                 resizeObserverErr.setAttribute('style', 'display: none');
//             }
//             if (resizeObserverErrDiv) {
//                 resizeObserverErrDiv.setAttribute('style', 'display: none');
//             }
//         }
//     });
// }, []);

  
  
  // useEffect(() => {
  //   const drawGraph = () => {
  //     const container = document.getElementById('mynetwork2');

  //     // parsing and collecting nodes and edges from the python
 
  //     const data = {
  //       nodes: nodes,
  //       edges: edges
  //     };

  //     const options = {
  //       height: '700px',
  //       backgroundColor: '#000000',
        
  //       position: 'relative',
  //       float: 'left'
  //     };

  //     // create a network
  //     const network= new Network(container, data, options);

  //     // store references to the network and data in the state
  //     setNetwork(network);
  //     setData(data);
  //   };

  //   drawGraph();
  // }, [filtroFecha]);
  

  return (
    <div className="fondo-grafo">
    <div className="card-body">
    {/* <Collapse accordion style={{marginBottom:"1rem"}}>
    <Panel header="Información" key="1">
      <p>{text}</p>
    </Panel>
    </Collapse> */}


      {/*FILTRO FECHAS*/}
      {/* <Select placeholder="Fechas" className='fechas-grafos' onChange={handleFiltroFechaChange} defaultValue={filtroFecha}>
          {opciones}
        </Select>
         */}
   
    {display ? 
    <div className='grafo-video'>
    <div className='cartaGrafo' style={{backgroundColor:"black"}}><img src={imagen}></img></div>
    <div className='video-texto cartaGrafo'>
    <video src={video} autoplay muted loop type="video/mp4" controls className="video-explicativo cartaGrafo" ></video>
    <div className="texto-explicativo cartaGrafo scrollable-card" >
      <br></br>
      
      Este grafo construido a partir de dos conjuntos de datos, que representan políticos o series, contiene información valiosa sobre las categorías asociadas a los atributos de los políticos mencionados en los tweets de cada serie. El grosor de las líneas en el grafo refleja la frecuencia con la que esas categorías aparecen en los tweets, proporcionando una indicación visual de su relevancia.
Al analizar este grafo, podemos extraer información importante. Primero, podemos identificar las categorías más frecuentes en los tweets de cada serie, lo que nos da una idea de los temas y atributos que están en el centro de atención. Además, las conexiones entre los políticos a través de las palabras asociadas revelan similitudes o interacciones en sus discursos o acciones, lo que podría indicar alianzas, rivalidades o agendas políticas comunes.
En resumen, este grafo nos permite visualizar y comprender de manera intuitiva las categorías de atributos políticos más relevantes en cada serie, así como las relaciones y similitudes entre los políticos basadas en las palabras asociadas en los tweets. Proporciona una valiosa herramienta para el análisis de la información y el descubrimiento de patrones en el mundo político y las narrativas mediáticas.
    </div>
    </div>
    {/* <Tooltip title='Ocultar video'>
    <Button  shape="circle" onClick={handleDisplay}>
        -
    </Button>
    </Tooltip> */}
    </div>
    :
    <div className='grafo-video'>
    <div className='carta2' style={{backgroundColor:"black"}}><img src={imagen}></img></div>
    {/* <Tooltip title='Mostrar video'>
    <Button  shape="circle" onClick={handleDisplay}>
        +
    </Button>
    </Tooltip> */}
      </div>
    }
    </div>
    </div>
    );
    }