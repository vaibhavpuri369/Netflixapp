import React from 'react';
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from './Sdata';


function ncard(val){
  console.log(val);
  return(
    <Card
      key ={val.id}
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
  )
}

ReactDOM.render(  
  <>

    <h1 className='heading_style'>List of top 5 Netflix  Series in 2020</h1>
    {Sdata.map(ncard)}
    {/* <Card
      imgsrc={Sdata[0].imgscr}
      title = {Sdata[0].title}
      sname = {Sdata[0].sname}
      link={Sdata[0].links}
    />

    
    <Card
      imgsrc={Sdata[1].imgscr}
      title = {Sdata[1].title}
      sname = {Sdata[1].sname}
      link={Sdata[1].links}
    />


     <Card
      imgsrc={Sdata[2].imgscr}
      title = {Sdata[2].title}
      sname = {Sdata[2].sname}
      link={Sdata[2].links}
    />

     <Card
      imgsrc={Sdata[3].imgscr}
      title = {Sdata[3].title}
      sname = {Sdata[3].sname}
      link={Sdata[3].links}
    /> */}

 
   </>,

  document.getElementById("root")
);
