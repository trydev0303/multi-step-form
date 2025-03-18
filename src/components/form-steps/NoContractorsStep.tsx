
import React from "react";
import FormNavigation from "@/components/FormNavigation";
import { useForm } from "@/context/FormContext";

const NoContractorsStep: React.FC = () => {
  const { formData, nextStep, prevStep } = useForm();
  
  const handleContinue = () => {
    nextStep();
  };
  
  const handleGoBack = () => {
    prevStep();
  };
  
  return (
    <div className="form-step">
      <div className="text-center mb-8">
        <h2 className="text-xl font-medium mb-4">
          Unfortunately, I have no matching contractors in your area yet.
        </h2>
        <p className="text-slate-500 mb-6">
          We're working on expanding our network. Would you like to continue anyway to help us understand your needs?
        </p>
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          className="button-secondary"
          onClick={handleGoBack}
        >
          I'll come back later
        </button>
        <button 
          className="button-primary"
          onClick={handleContinue}
        >
          Continue anyway
        </button>
      </div>
      
      <FormNavigation 
        className="hidden" 
        showBackButton={true}
      />
    </div>
  );
};

export default NoContractorsStep;
