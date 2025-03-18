
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";

const RefacingOptionStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [option, setOption] = useState(formData.refacingOption);

  const options = [
    {
      value: "replace-doors",
      label: "Replace Doors & Drawer Fronts",
      icon: "📋",
      description: "Keep existing cabinet boxes"
    },
    {
      value: "full-reface",
      label: "Full Reface",
      icon: "🚪",
      description: "Doors, drawer fronts & veneer"
    },
    {
      value: "other",
      label: "Other",
      icon: "💡",
      description: "Custom solution"
    }
  ];

  const handleSelect = (value: string) => {
    setOption(value);
  };

  const handleNext = () => {
    if (!option) return false;
    updateFormData({ refacingOption: option });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        What would you like to do with your kitchen cabinets?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
        {options.map((opt) => (
          <div 
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`form-card ${option === opt.value ? 'selected' : ''}`}
          >
            <div className="text-3xl mb-2">{opt.icon}</div>
            <h3 className="font-medium text-sm">{opt.label}</h3>
            <p className="text-xs text-slate-500">{opt.description}</p>
          </div>
        ))}
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={!option}
      />
    </div>
  );
};

export default RefacingOptionStep;
