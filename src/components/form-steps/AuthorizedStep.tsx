
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { Check } from "lucide-react";

const AuthorizedStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(
    formData.isAuthorized || null
  );

  const handleSelect = (value: boolean) => {
    setIsAuthorized(value);
  };

  const handleNext = () => {
    if (isAuthorized === null) return false;
    updateFormData({ isAuthorized: !!isAuthorized });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        Are you the homeowner or authorized to make property changes?
      </h2>
      
      <div className="flex justify-center gap-6 mb-8">
        <div 
          onClick={() => handleSelect(true)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className={`form-option-circle mb-2 ${isAuthorized === true ? 'selected' : ''}`}>
            {isAuthorized === true && <Check className="w-5 h-5" />}
          </div>
          <span className="text-sm font-medium">Yes</span>
        </div>
        
        <div 
          onClick={() => handleSelect(false)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className={`form-option-circle mb-2 ${isAuthorized === false ? 'selected' : ''}`}>
            {isAuthorized === false && <Check className="w-5 h-5" />}
          </div>
          <span className="text-sm font-medium">No</span>
        </div>
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={isAuthorized === null}
      />
    </div>
  );
};

export default AuthorizedStep;
