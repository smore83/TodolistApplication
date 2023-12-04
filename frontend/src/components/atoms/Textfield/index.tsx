import { TextField as MuiTextField,TextFieldProps } from '@mui/material'
import React from 'react';

interface MuiTextFieldProps extends Omit<TextFieldProps,"variant">{

}
const TextField :React.FC<MuiTextFieldProps>= (props) => {
  return (
    <MuiTextField {...props}/>
  )
}

export default TextField