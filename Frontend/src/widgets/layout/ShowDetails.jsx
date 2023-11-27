import React from 'react'
import {
  Typography,
} from "@material-tailwind/react";

export function ShowDetails(props){
    return(
      <div className={props.className}>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {props.title}
        </Typography>
        <div className='flex'>
            
            {props.taskdata}
          
        </div>
      </div>
    );
  }
