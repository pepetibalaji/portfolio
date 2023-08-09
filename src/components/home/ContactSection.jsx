import React, { useState } from "react";
import "./ContactSection.css"
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Avatar from "../../assets/SVGs/Avatar2.svg";
import WIFI from "../../assets/SVGs/wifi.svg";

function ContactSection() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className="contact-section section" id="contact">
        <Container>
          <Row>
            <div className="stage">Say hello👋</div>
            <h1 className="h1">
              <span data-aos="zoom-in-up" data-aos-delay="150">
                Contact Me
              </span>
            </h1>
          </Row>
          <Row className="contact-flex">
            <Col lg={6} md={6} sm={12} className="mt-4 pt-2">
              <Form noValidate validated={validated} as={Col} md="10" onSubmit={handleSubmit} className="contact-form" data-aos="zoom-in" data-aos-delay="350">
                <Row className="mb-3">
                  <Form.Group as={Col} md="12">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="name@example.com"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder=""
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid message.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md="12">
                    <div className="d-flex justify-content-between">
                        <div className="form-social-icons">
                            <a href="https://www.linkedin.com/in/pepeti-balaji-1b107a236" className="form-social-icon">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/pepetibalaji" className="form-social-icon">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.facebook.com/balaji.pepeti" className="form-social-icon">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/balaji_pepeti/" className="form-social-icon">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="mailto:pepetibalaji@gmail.com" className="form-social-icon">
                                <i className="bi bi-envelope"></i>
                            </a>
                        </div>
                      <Button className="submit-button" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form.Group>
                </Row>
              </Form>
            </Col>
            <Col>
                <div className="contact-images">
                    <img className="contact-avatar" src={Avatar} alt="contact-img" data-aos="zoom-in" data-aos-delay="150"  />
                    <img className="wifi" src={WIFI} alt="wifi" data-aos="zoom-in" data-aos-delay="350" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContactSection;
