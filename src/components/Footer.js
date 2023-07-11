import React from "react";
import "./Footer.css";

import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="contact">
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href="https://www.linkedin.com/in/lucy-kim-593730249/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" size={32}/>
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://github.com/lucyk37" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" size={32} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    </section>
  );
};

export default Footer;
