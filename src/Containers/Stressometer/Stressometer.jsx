import React from "react";
import axios from "axios";
import { useState } from "react";

const api_url = "/apis/predict/";
const Stressometer = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formValues, setFormValues] = useState({
    anxiety_level: "",
    self_esteem: "",
    mental_health_history: "",
    depression: "",
    headache: "",
    blood_pressure: "",
    sleep_quality: "",
    breathing_problem: "",
    noise_level: "",
    living_conditions: "",
    safety: "",
    basic_needs: "",
    academic_performance: "",
    study_load: "",
    teacher_student_relationship: "",
    future_career_concerns: "",
    social_support: "",
    peer_pressure: "",
    extracurricular_activities: "",
    bullying: "",
  });
  const totalSteps = 20;
  const [result, setResult] = useState(null);

  // const handleChange = (event) => {
  //     setFormData({...formData,[event.target.name]:event.target.value});
  // }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(api_url, formValues);
      setResult(response.data);
      console.log("Prediction:", response.data.result);
    } catch (e) {
      console.log(e);
    }
  };
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <label htmlFor="anxiety_level" className="form-label">
              Anxiety Level
            </label>
            <input
              type="number"
              id="anxiety_level"
              name="anxiety_level"
              value={formValues.anxiety_level}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label htmlFor="self_esteem" className="form-label">
              Self Esteem
            </label>
            <input
              type="number"
              id="self_esteem"
              name="self_esteem"
              value={formValues.self_esteem}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label htmlFor="mental_health_history" className="form-label">
              Mental Health History
            </label>
            <input
              type="number"
              id="mental_health_history"
              name="mental_health_history"
              value={formValues.mental_health_history}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <label htmlFor="depression" className="form-label">
              Depression
            </label>
            <input
              type="number"
              id="depression"
              name="depression"
              value={formValues.depression}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 5:
        return (
          <div>
            <label htmlFor="headache" className="form-label">
              Headache
            </label>
            <input
              type="number"
              id="headache"
              name="headache"
              value={formValues.headache}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 6:
        return (
          <div>
            <label htmlFor="blood_pressure" className="form-label">
              Blood Pressure
            </label>
            <input
              type="number"
              id="blood_pressure"
              name="blood_pressure"
              value={formValues.blood_pressure}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 7:
        return (
          <div>
            <label htmlFor="sleep_quality" className="form-label">
              Sleep Quality
            </label>
            <input
              type="number"
              id="sleep_quality"
              name="sleep_quality"
              value={formValues.sleep_quality}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 8:
        return (
          <div>
            <label htmlFor="breathing_problem" className="form-label">
              Breathing Problem
            </label>
            <input
              type="number"
              id="breathing_problem"
              name="breathing_problem"
              value={formValues.breathing_problem}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 9:
        return (
          <div>
            <label htmlFor="noise_level" className="form-label">
              Noise Level
            </label>
            <input
              type="number"
              id="noise_level"
              name="noise_level"
              value={formValues.noise_level}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );

      case 10:
        return (
          <div>
            <label htmlFor="living_conditions" className="form-label">
              Living Conditions
            </label>
            <input
              type="number"
              id="living_conditions"
              name="living_conditions"
              value={formValues.living_conditions}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 11:
        return (
          <div>
            <label htmlFor="safety" className="form-label">
              Safety
            </label>
            <input
              type="number"
              id="safety"
              name="safety"
              value={formValues.safety}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 12:
        return (
          <div>
            <label htmlFor="basic_needs" className="form-label">
              Basic Needs
            </label>
            <input
              type="number"
              id="basic_needs"
              name="basic_needs"
              value={formValues.basic_needs}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 13:
        return (
          <div>
            <label htmlFor="academic_performance" className="form-label">
              Academic Performance
            </label>
            <input
              type="number"
              id="academic_performance"
              name="academic_performance"
              value={formValues.academic_performance}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 14:
        return (
          <div>
            <label htmlFor="study_load" className="form-label">
              Study Load
            </label>
            <input
              type="number"
              id="study_load"
              name="study_load"
              value={formValues.study_load}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 15:
        return (
          <div>
            <label
              htmlFor="teacher_student_relationship"
              className="form-label"
            >
              Teacher-Student Relationship
            </label>
            <input
              type="number"
              id="teacher_student_relationship"
              name="teacher_student_relationship"
              value={formValues.teacher_student_relationship}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 16:
        return (
          <div>
            <label htmlFor="future_career_concerns" className="form-label">
              Future Career Concerns
            </label>
            <input
              type="number"
              id="future_career_concerns"
              name="future_career_concerns"
              value={formValues.future_career_concerns}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 17:
        return (
          <div>
            <label htmlFor="social_support" className="form-label">
              Social Support
            </label>
            <input
              type="number"
              id="social_support"
              name="social_support"
              value={formValues.social_support}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 18:
        return (
          <div>
            <label htmlFor="peer_pressure" className="form-label">
              Peer Pressure
            </label>
            <input
              type="number"
              id="peer_pressure"
              name="peer_pressure"
              value={formValues.peer_pressure}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 19:
        return (
          <div>
            <label htmlFor="extracurricular_activities" className="form-label">
              Extracurricular Activities
            </label>
            <input
              type="number"
              id="extracurricular_activities"
              name="extracurricular_activities"
              value={formValues.extracurricular_activities}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      case 20:
        return (
          <div>
            <label htmlFor="bullying" className="form-label">
              Bullying
            </label>
            <input
              type="number"
              id="bullying"
              name="bullying"
              value={formValues.bullying}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (

    <div>
      <form onSubmit={handleSubmit} className="step-form">
        {renderFormStep()}
        <div>
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="btn btn-secondary"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps && (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
            >
              Next
            </button>
          )}
          {currentStep === totalSteps && (
            <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
      {result && <div className="prediction-result">Result: {result.result}</div>}
    </div>
  );
};

export default Stressometer;
