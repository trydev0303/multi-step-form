
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { Check } from "lucide-react";

const CabinetConditionStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [condition, setCondition] = useState(formData.condition);

  const options = [
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
    { value: "poor", label: "Poor" }
  ];

  const handleSelect = (value: string) => {
    setCondition(value);
  };

  const handleNext = () => {
    if (!condition) return false;
    updateFormData({ condition });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        Are your existing cabinets in good condition?
      </h2>
      
      <div className="flex justify-center gap-6 mb-8">
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className={`form-option-circle mb-2 ${condition === option.value ? 'selected' : ''}`}>
              {condition === option.value && <Check className="w-5 h-5" />}
            </div>
            <span className="text-sm font-medium">{option.label}</span>
          </div>
        ))}
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={!condition}
      />
    </div>
  );
};

export default CabinetConditionStep;
