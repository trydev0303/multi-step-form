
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { toast } from "sonner";

const PhoneStep: React.FC = () => {
  const { formData, updateFormData, nextStep } = useForm();
  const [phone, setPhone] = useState(formData.phone || "");
  
  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    
    const phoneNumber = value.replace(/[^\d]/g, "");
    
    if (phoneNumber.length < 4) return phoneNumber;
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };
  
  const handleGetEstimate = () => {
    const digitsOnly = phone.replace(/\D/g, "");
    
    if (digitsOnly.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    
    updateFormData({ phone });
    nextStep();
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        What is your phone number?
      </h2>
      
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="(555) 555-5555"
            className="input-primary"
          />
          <p className="text-xs text-slate-500 mt-1">
            Standard rates apply. Your information is kept private and secure.
          </p>
        </div>
        
        <button 
          onClick={handleGetEstimate}
          disabled={phone.replace(/\D/g, "").length !== 10}
          className="button-primary w-full mt-4"
        >
          Get My Estimate
        </button>
      </div>
      
      <FormNavigation 
        onNext={() => {
          updateFormData({ phone });
          return true;
        }} 
        nextDisabled={phone.replace(/\D/g, "").length !== 10}
        className="hidden"
      />
    </div>
  );
};

export default PhoneStep;
