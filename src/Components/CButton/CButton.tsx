import { Button } from '@mui/material';
import React from 'react'

export default function CButton({type}:any) {
  const clickHandler = (type: any) => {
    alert('demo');
    console.log(type);
  }
  return (
    <Button onClick={clickHandler}>Manish Rane</Button>
  )
}
