import React from 'react';
import { TypographyProps, Typography as MuiTypography } from "@mui/material";
interface MuiTypographyProps extends TypographyProps{

}
const Typography:React.FC<MuiTypographyProps> = (props) => {
  return (
    <MuiTypography {...props} />
  )
}

export default Typography