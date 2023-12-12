import { Fragment,useEffect } from "react";
import { Container } from "react-bootstrap";
import Title from "../../../components/public/Global/Title";
import Formule from "../../../components/public/Menu/Formule";
import { Helmet } from "react-helmet-async";


const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    
  }, [])
  
  return (
    <Fragment>
    <Helmet>
        <title>Menu</title>
      
      </Helmet>
      <Title title="Nos Menus" />
      <Container>
        <Formule />
      </Container>
    </Fragment>
  );
};

export default Menu;
