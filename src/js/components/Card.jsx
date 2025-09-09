import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


const Card = ({title, description}) =>{
    return(
        <div className='card g-2 m-2'>
        <div className='card-body'>
        <img src={rigoImage} className='card-img-top' alt='grey background' />
        <h5 className='card-title mt-2'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href="#" target='_blank' className='btn btn-primary'>
          Go some where !
        </a>
      </div>
    </div>
    );
}
       
export default Card;
