import React from "react";
import NavbarNoSearch from "../../Components/NavbarNoSearch/NavbarNoSearch";
import CardProfile from "../../Components/CardProfile/CardProfile";
import "./InfoPenawaran.css";
import { Container, Row, Col } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import CardPenawaran from "../../Components/CardPenawaran/CardPenawaran";

const InfoPenawaran = () => {
  return (
    <>
      <NavbarNoSearch title='Info Penawaran'/>
      <Container>
        <Row>
          <a href="/" className="back">
            <IoArrowBackOutline />
          </a>
          <Col lg={7} className="mx-auto">
            <CardProfile />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto mt-4" lg={7}>
            <h6>Daftar Produkmu yang Ditawar</h6>
            <CardPenawaran />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoPenawaran;
