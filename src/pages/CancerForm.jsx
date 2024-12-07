import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const CancerForm = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Cancer Risk Prediction Form</h2>
        <Form className="p-4 border rounded">
          {/* Age and Gender */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" min="20" max="80" placeholder="Enter age (20-80)" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                  <option value="">Select gender</option>
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          {/* BMI and Smoking */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="bmi">
                <Form.Label>BMI</Form.Label>
                <Form.Control type="number" min="15" max="40" placeholder="Enter BMI (15-40)" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="smoking">
                <Form.Label>Smoking</Form.Label>
                <Form.Select>
                  <option value="">Do you smoke?</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          {/* Genetic Risk and Physical Activity */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="geneticRisk">
                <Form.Label>Genetic Risk</Form.Label>
                <Form.Select>
                  <option value="">Select genetic risk level</option>
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="physicalActivity">
                <Form.Label>Physical Activity (hours/week)</Form.Label>
                <Form.Control type="number" min="0" max="10" placeholder="Enter hours/week" />
              </Form.Group>
            </div>
          </div>

          {/* Alcohol Intake and Cancer History */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="alcoholIntake">
                <Form.Label>Alcohol Intake (units/week)</Form.Label>
                <Form.Control type="number" min="0" max="5" placeholder="Enter alcohol intake" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="cancerHistory">
                <Form.Label>Personal History of Cancer</Form.Label>
                <Form.Select>
                  <option value="">Do you have a personal history of cancer?</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="diagnosis">
                <Form.Label>Cancer Diagnosis</Form.Label>
                <Form.Select>
                  <option value="">Select diagnosis status</option>
                  <option value="0">No Cancer</option>
                  <option value="1">Cancer</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          {/* Predict Button */}
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

export default CancerForm;
