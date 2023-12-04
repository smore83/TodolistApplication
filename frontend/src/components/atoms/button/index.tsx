import React from 'react';
import { ButtonProps, Button as MuiButton } from "@mui/material";
interface MuiButtonProps extends ButtonProps{

}
const Button:React.FC<MuiButtonProps> = (props) => {
  return (
    <MuiButton {...props} />
  )
}

export default Button