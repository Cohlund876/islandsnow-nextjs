'use client';

import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const IslandSnowLogo = () => (
  <Row className="justify-content-center">
    <Col className="col-4 d-flex justify-content-center">
      <Image
        src="https://courses.ics.hawaii.edu/ics314s25/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"
        alt="logo"
        className="img-fluid"
      />
    </Col>
  </Row>

);

export default IslandSnowLogo;
