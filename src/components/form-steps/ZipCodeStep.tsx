
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { toast } from "sonner";

const ZipCodeStep: React.FC = () => {
  const { formData, updateFormData, nextStep } = useForm();
  const [zipCode, setZipCode] = useState(formData.zipCode);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipCode(value);
    setIsValid(value.length === 5);
  };

  const handleContinue = () => {
    if (zipCode.length !== 5) {
      setIsValid(false);
      toast.error("Please enter a valid 5-digit ZIP code");
      return;
    }
    
    updateFormData({ zipCode });
    nextStep();
  };

  return (
    <div className="form-step">
      <div className="bg-blue-500 -mx-12 -mt-14 mb-10 py-10 px-12 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          How Much Does Kitchen Cabinet Refacing Cost?
        </h1>
      </div>
      
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-medium mb-6 text-center">What is Your ZIP Code?</h2>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={zipCode}
            onChange={handleChange}
            placeholder="Enter ZIP code"
            className={`input-primary flex-1 text-center text-lg ${!isValid ? 'border-red-500 focus:ring-red-500' : ''}`}
            maxLength={5}
          />
          
          <button
            onClick={handleContinue}
            disabled={!zipCode || zipCode.length !== 5}
            className="button-primary ml-2"
          >
            Continue
          </button>
        </div>
        
        {!isValid && (
          <p className="text-red-500 text-sm mt-2">Please enter a valid 5-digit ZIP code</p>
        )}
      </div>
      
      <FormNavigation 
        onNext={() => {
          updateFormData({ zipCode });
          return true;
        }} 
        nextDisabled={!zipCode || zipCode.length !== 5}
        showBackButton={false}
        className="hidden"
      />
    </div>
  );
};

export default ZipCodeStep;
