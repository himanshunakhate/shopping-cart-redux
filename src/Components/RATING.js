import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const RATING = ({rating,onClick,style}) => {
  return( 

        [...Array(5)].map((_,i)=>(
            <span key={i} onClick={()=>onClick(i)} style={style}>
                {   
                    rating>i?(
                    <AiFillStar fontSize="20px"/>
                ):(<AiOutlineStar fontSize="20px"/>)}
            </span>
        ))
      
  )
}

export default RATING
