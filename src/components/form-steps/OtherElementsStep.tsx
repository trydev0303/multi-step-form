
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";

const OtherElementsStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [elements, setElements] = useState<string[]>(formData.otherElements || []);

  const options = [
    { value: "appliances", label: "Appliances", icon: "📻" },
    { value: "countertops", label: "Countertops", icon: "🍳" },
    { value: "lighting", label: "Lighting", icon: "💡" },
    { value: "flooring", label: "Flooring", icon: "🧱" },
    { value: "backsplash", label: "Backsplash", icon: "🔲" },
    { value: "hardware", label: "Handles & Hardware", icon: "🔧" }
  ];

  const handleToggle = (value: string) => {
    if (elements.includes(value)) {
      setElements(elements.filter(e => e !== value));
    } else {
      setElements([...elements, value]);
    }
  };

  const isSelected = (value: string) => elements.includes(value);

  const handleNext = () => {
    updateFormData({ otherElements: elements });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        Are there other elements of the kitchen you want to update?
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleToggle(option.value)}
            className={`form-card cursor-pointer ${isSelected(option.value) ? 'selected' : ''}`}
          >
            <div className="text-3xl mb-2">{option.icon}</div>
            <h3 className="font-medium text-sm">{option.label}</h3>
          </div>
        ))}
      </div>
      
      <FormNavigation onNext={handleNext} />
    </div>
  );
};

export default OtherElementsStep;
