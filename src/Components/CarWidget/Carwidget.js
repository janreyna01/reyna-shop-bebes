import React, { useContext } from "react";
import { Context } from "../Contex/CartContext";
import { orange } from "@mui/material/colors";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



export const Carwidget = () => {
  const { qty } = useContext(Context);
  

  return (
    <>
      <p>{qty}</p>
      <ShoppingCartOutlinedIcon sx={{ color: orange[500] }} fontSize="large" />
    </>
  );
};

export default Carwidget;