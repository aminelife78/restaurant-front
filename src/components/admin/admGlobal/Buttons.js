import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ handleBtn, idx, children,color }) => {
  return (
    <>
      <Button
        className={`bg-${color} border-0 `}
        type="submit"
        onClick={() => handleBtn(idx)}
      >
        {children}
      </Button>
    </>
  );
};

export default Buttons;
