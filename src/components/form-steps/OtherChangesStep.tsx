
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { Check } from "lucide-react";

const OtherChangesStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [changes, setChanges] = useState<string[]>(formData.otherChanges || []);
  const [comment, setComment] = useState("");

  const options = [
    { value: "no", label: "No" },
    { value: "maybe", label: "Maybe" },
    { value: "yes", label: "Yes" }
  ];

  const handleSelect = (value: string) => {
    if (value === "no") {
      setChanges(["no"]);
    } else {
      const newChanges = changes.filter(c => c !== "no");
      if (newChanges.includes(value)) {
        setChanges(newChanges.filter(c => c !== value));
      } else {
        setChanges([...newChanges, value]);
      }
    }
  };

  const isSelected = (value: string) => changes.includes(value);

  const handleNext = () => {
    updateFormData({ 
      otherChanges: changes,
      comments: comment || formData.comments
    });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        Are you considering any changes to your layout, such as
        rearranging your appliances or sink?
      </h2>
      
      <div className="flex justify-center gap-6 mb-8">
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className={`form-option-circle mb-2 ${isSelected(option.value) ? 'selected' : ''}`}>
              {isSelected(option.value) && <Check className="w-5 h-5" />}
            </div>
            <span className="text-sm font-medium">{option.label}</span>
          </div>
        ))}
      </div>
      
      <div className="max-w-xl mx-auto">
        <p className="text-sm text-center text-slate-500 mb-4">
          If you would like to provide more details about your project or kitchen layout changes, please do so below:
        </p>
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Optional comments about your project..."
          className="input-primary h-24 resize-none"
        />
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={changes.length === 0}
      />
    </div>
  );
};

export default OtherChangesStep;
