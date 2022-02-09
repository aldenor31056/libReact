import React from "react";
import Checkbox from '@mui/material/Checkbox';

const FireflyCheckbox = (props: any) => {

  return  <><Checkbox {...props}/>{props.label}</>
};

export default FireflyCheckbox;
