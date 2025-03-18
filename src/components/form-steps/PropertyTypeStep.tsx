
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";

const PropertyTypeStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [type, setType] = useState(formData.propertyType);

  const options = [
    { value: "single", label: "Single Family Home", icon: "🏠" },
    { 
      value: "multi", 
      label: "Multi-family / Apt Building", 
      icon: "🏢" 
    },
    { value: "condo", label: "Condo / Co-op", icon: "🏙️" },
  ];

  const handleSelect = (value: string) => {
    setType(value);
  };

  const handleNext = () => {
    if (!type) return false;
    updateFormData({ propertyType: type });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        What type of property is this?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`form-card ${type === option.value ? 'selected' : ''}`}
          >
            <div className="text-3xl mb-2">{option.icon}</div>
            <h3 className="font-medium text-sm">{option.label}</h3>
          </div>
        ))}
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={!type}
      />
    </div>
  );
};

export default PropertyTypeStep;
