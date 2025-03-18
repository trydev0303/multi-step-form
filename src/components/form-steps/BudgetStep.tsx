
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";

const BudgetStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [budget, setBudget] = useState(formData.budget);

  const options = [
    { value: "5k", label: "less than $5k" },
    { value: "5k-10k", label: "$5k to $10k" },
    { value: "10k-15k", label: "$10k to $15k" },
    { value: "15k-25k", label: "$15k to $25k" },
    { value: "25k+", label: "$25k+" },
  ];

  const handleSelect = (value: string) => {
    setBudget(value);
  };

  const handleNext = () => {
    if (!budget) return false;
    updateFormData({ budget });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        Do you know what your approximate budget is?
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`px-5 py-3 border-2 rounded-full cursor-pointer transition-all ${
              budget === option.value 
                ? 'border-orange-500 bg-orange-50 text-orange-600' 
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-sm font-medium">{option.label}</span>
          </div>
        ))}
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={!budget}
      />
    </div>
  );
};

export default BudgetStep;
