import React, { useState } from 'react';

import { Card, Collapse, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

function DiseaseSection() {
  const [open, setOpen] = useState({});

  const toggleDiseaseDetails = (disease) => {
    setOpen((prevState) => ({
      ...prevState,
      [disease]: !prevState[disease],
    }));
  };

  return (
    <section className="disease-section" style={{ textAlign: 'center', marginTop: '2.5vw' }}>
      <h2>Disease Information</h2>

      {/* Bootstrap Grid to make cards responsive */}
      <Row style={{ display: 'flex', justifyContent: 'center', gap: '4vw', marginTop: '2.5vw', marginLeft: '0.5vw', marginRight: '0.5vw', marginBottom: '2vw' }}>
        
        {/* Cancer Card */}
{/* Cancer Card */}
<Col xs={12} sm={6} md={4} lg={3}>
  <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
    <Card.Body>
      <Card.Img 
        variant="top" 
        src="img/ca.jpg" 
        style={{ height: '150px', objectFit: 'cover' }} 
      />
      <Card.Title>Cancer</Card.Title>
      <Card.Text>
        Cancer is a group of diseases characterized by uncontrolled cell growth.
      </Card.Text>
      <Card.Subtitle className="mb-2 text-black">Symptoms & Prevention</Card.Subtitle>
      <div 
        onClick={() => toggleDiseaseDetails('cancer')} 
        style={{ color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}
      >
        {open.cancer ? 'Show Less' : 'Learn More'}
      </div>

      <Collapse in={open.cancer}>
        <div>
          <p><strong>Symptoms:</strong> Fatigue, weight loss, pain, etc.</p>
          <p><strong>Prevention:</strong> Avoid smoking, regular check-ups, healthy diet.</p>
        </div>
      </Collapse>
    </Card.Body>
  </Card>
</Col>



        {/* Diabetes Card */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <Card.Body>
              <Card.Img variant="top" src="img/ca.jpg" style={{ height: '150px', objectFit: 'cover' }} />
              <Card.Title>Diabetes</Card.Title>
              <Card.Text>
                Diabetes is a disease that occurs when your blood glucose is too high.
              </Card.Text>
              <Card.Subtitle className="mb-2 text-black">Symptoms & Prevention</Card.Subtitle>
              <div onClick={() => toggleDiseaseDetails('diabetes')} style={{ color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}>
                {open.diabetes ? 'Show Less' : 'Learn More'}
              </div>

              <Collapse in={open.diabetes}>
                <div>
                  <p><strong>Symptoms:</strong> Increased thirst, frequent urination, fatigue.</p>
                  <p><strong>Prevention:</strong> Healthy diet, exercise, regular monitoring of blood sugar levels.</p>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        

        {/* Heart Attack Card */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body>
              <Card.Img variant="top" src="img/ca.jpg" style={{ height: '150px', objectFit: 'cover' }} />
              <Card.Title>Heart Attack</Card.Title>
              <Card.Text>
                A heart attack occurs when the flow of oxygen-rich blood to the heart is blocked.
              </Card.Text>
              <Card.Subtitle className="mb-2 text-black">Symptoms & Prevention</Card.Subtitle>
              <div onClick={() => toggleDiseaseDetails('heart-attack')} style={{ color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}>
                {open['heart-attack'] ? 'Show Less' : 'Learn More'}
              </div>

              <Collapse in={open['heart-attack']}>
                <div>
                  <p><strong>Symptoms:</strong> Chest pain, shortness of breath, fatigue.</p>
                  <p><strong>Prevention:</strong> Regular exercise, avoid smoking, manage cholesterol levels.</p>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default DiseaseSection;
