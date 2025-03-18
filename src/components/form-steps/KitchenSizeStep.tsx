
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { Check } from "lucide-react";

const KitchenSizeStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [size, setSize] = useState(formData.kitchenSize);

  const options = [
    { value: "small", label: "Less than 10 ft.", icon: "🏠" },
    { value: "medium", label: "10 - 15 ft.", icon: "🏡" },
    { value: "large", label: "15ft. - 25 ft.", icon: "🏘️" },
    { value: "xlarge", label: "25ft +", icon: "🏰" },
    { value: "not-sure", label: "Not sure", icon: "❓" },
  ];

  const handleSelect = (value: string) => {
    setSize(value);
  };

  const handleNext = () => {
    if (!size) return false;
    updateFormData({ kitchenSize: size });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        Approximately how large is your kitchen (in
        square feet)?
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`form-card ${size === option.value ? 'selected' : ''}`}
          >
            <div className="text-3xl mb-2">{option.icon}</div>
            <h3 className="font-medium text-sm">{option.label}</h3>
          </div>
        ))}
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={!size}
      />
    </div>
  );
};

export default KitchenSizeStep;
