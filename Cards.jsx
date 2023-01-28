import React  from "react";

function Card(props){
  console.log(props);
  return(
    <>
    <div className='cards'>
      <div className="card"> 
       <img src={props.imgsrc} alt="mypic" className="card__img"/>
       <div className="card_info">
        <span className="card__category">
          {props.titles}
        </span>
        <h3 className="card__title">{props.sname}</h3>
        <a href={props.link} rel="noopener noreferrer">
           <button>watch Now</button>
        </a>
       </div>
      </div>
    </div>
  </>
  );
}

export default Card;

