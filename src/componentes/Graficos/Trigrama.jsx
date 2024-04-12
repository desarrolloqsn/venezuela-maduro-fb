import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';
import dataNube from './../../datos/datos_globales_nube_de_trigramas.json'
import {HiDocumentDownload} from 'react-icons/hi'
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { write, utils } from 'xlsx';
import { Button, Select, Tooltip } from 'antd';
import jsonFechas from './../../datos/rango_fechas.json'

export default function NubePalabrasTrigrama() {
  const [fechas, setFechas] = useState(jsonFechas.fechas);
  const [filtroFecha, setFiltroFecha] = useState(fechas[0]);
  const dataFiltroFecha = dataNube[filtroFecha];
  const series = dataFiltroFecha ? Object.keys(dataFiltroFecha) : [];
  const [filtroSerie, setFiltroSerie] = useState(series.length > 0 ? series[0] : ''); 
  const dataGrafico = dataNube[filtroFecha] && dataNube[filtroFecha][filtroSerie];

  useEffect(() => {
    if (dataFiltroFecha) {
      setFiltroSerie(series.length > 0 ? series[0] : ''); // Establecer la primera serie como opción predeterminada
    }
  }, [filtroFecha, dataFiltroFecha, series]);
 
  const opcionesFechas = fechas.map((fecha, index) => (
    <Select.Option key={index} value={fecha}>
      {fecha.slice(0, 10)}
    </Select.Option>
  ));

  const opcionesSeries = dataNube[filtroFecha] && typeof dataNube[filtroFecha] === 'object' ? Object.keys(dataNube[filtroFecha]).map((serie, index) => (
    <Select.Option key={index} value={serie}>
      {serie}
    </Select.Option>
  )) : [];
  const config = {
    data: dataGrafico,
    wordField: 'palabra',
    weightField: 'valor',
    colorField: 'palabra',
    color:['#8A2BE2','#A52A2A','#D2691E','#00008B','#556B2F','#00CED1','#B22222','#008000','#F08080','#FF00FF','#66CDAA','#FFA500',
    '#BC8F8F','#8B4513','#008080'],
    
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0,
    },
    random: () => 0.5,
  };

  const handleDownloadExcel = () => {
    if (dataGrafico) {
      const worksheet = utils.json_to_sheet(dataGrafico);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'Datos');
      const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        // Obtener la fecha actual
  const today = new Date();
  const date = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

  // Nombre del archivo con la fecha actual
  const fileName = `Trigramas_${date}.xlsx`;

  saveAs(data, fileName);
     
    }
  };

  const handleFiltroFechaChange = (valor) => {
    setFiltroFecha(valor);
  };

  const handleFiltroSerieChange = (valor) => {
    setFiltroSerie(valor);
  };

  return (
    <div>
      <div className='titulo-carta'>Trigramas</div>
      <div className='subtitulo-carta'>
        <div>Cantidad de menciones de tres palabras juntas</div>
        <Tooltip title='Descargar Excel'>
          <Button onClick={handleDownloadExcel} type='primary' shape='circle' className='subtitulo-boton'>
            <HiDocumentDownload />
          </Button>
        </Tooltip>
      </div>
      <div className='carta nubepalabras'>
        <div className='fechas'>
          <Select placeholder
    ="Fechas" onChange={handleFiltroFechaChange} defaultValue={filtroFecha.slice(0, 10)}>
    {opcionesFechas}
  </Select>


  <Select placeholder="Series" onChange={handleFiltroSerieChange} defaultValue={filtroSerie}>
    {opcionesSeries}
  </Select>
  </div>
<WordCloud {...config} />
</div>
</div>
);
};