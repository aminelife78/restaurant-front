import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Title from "../../../components/public/Global/Title";
import Formule from "../../../components/public/Menu/Formule";

const Menu = () => {
  return (
    <Fragment>
      <Title title="Nos Menus" />
      <Container>
        <Formule />
      </Container>
    </Fragment>
  );
};

export default Menu;
