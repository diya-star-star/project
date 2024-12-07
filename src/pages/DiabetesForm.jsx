import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const DiabetesForm = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Diabetes Prediction Form</h2>
        <Form className="p-4 border rounded">
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="pregnancies">
                <Form.Label>Pregnancies</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter pregnancies" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="glucose">
                <Form.Label>Glucose</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter glucose level" />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="bp">
                <Form.Label>Blood Pressure</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter blood pressure" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="skinThickness">
                <Form.Label>Skin Thickness</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter skin thickness" />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="insulin">
                <Form.Label>Insulin</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter insulin level" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="bmi">
                <Form.Label>BMI</Form.Label>
                <Form.Control type="number" step="0.01" min="0" placeholder="Enter BMI" />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="diabetesPedigree">
                <Form.Label>Diabetes Pedigree Function</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Enter diabetes pedigree function"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter age" />
              </Form.Group>
            </div>
          </div>
          <Button variant="primary" type="button" className="w-100">
            Predict
          </Button>
        </Form>
        <div className="mt-4 text-center">
          <h4>Prediction Outcome:</h4>
          <p className="fw-bold">[Outcome will appear here]</p>
        </div>
      </Container>
    </div>
  );
};

export default DiabetesForm;
