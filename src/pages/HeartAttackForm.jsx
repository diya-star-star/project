import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const HeartAttackForm = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Heart Attack Prediction Form</h2>
        <Form className="p-4 border rounded">
          {/* Age and Sex */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter age" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Select>
                  <option value="">Select sex</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          {/* Exercise Induced Angina and Major Vessels */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="exang">
                <Form.Label>Exercise Induced Angina</Form.Label>
                <Form.Select>
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="ca">
                <Form.Label>Number of Major Vessels (0-3)</Form.Label>
                <Form.Control type="number" min="0" max="3" placeholder="Enter number" />
              </Form.Group>
            </div>
          </div>

          {/* Maximum Heart Rate Achieved and Chest Pain Type in One Column */}
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <Form.Group controlId="thalach">
                    <Form.Label>Maximum Heart Rate Achieved</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Enter maximum heart rate" />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="cp">
                    <Form.Label>Chest Pain Type</Form.Label>
                    <Form.Select>
                      <option value="">Select chest pain type</option>
                      <option value="1">Typical Angina</option>
                      <option value="2">Atypical Angina</option>
                      <option value="3">Non-anginal Pain</option>
                      <option value="4">Asymptomatic</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>

          {/* Resting BP and Cholesterol */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="trtbps">
                <Form.Label>Resting Blood Pressure (mm Hg)</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter blood pressure" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="chol">
                <Form.Label>Cholesterol (mg/dl)</Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter cholesterol level" />
              </Form.Group>
            </div>
          </div>

          {/* Fasting Blood Sugar and Rest ECG */}
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="fbs">
                <Form.Label>Fasting Blood Sugar</Form.Label>
                <Form.Select>
                  <option value="">Select</option>
                  <option value="1">True (FBS greater than 120 mg/dl)</option>
                  <option value="0">False</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="rest_ecg">
                <Form.Label>Resting ECG Results</Form.Label>
                <Form.Select>
                  <option value="">Select ECG result</option>
                  <option value="0">Normal</option>
                  <option value="1">ST-T Wave Abnormality</option>
                  <option value="2">Left Ventricular Hypertrophy</option>
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

export default HeartAttackForm;
