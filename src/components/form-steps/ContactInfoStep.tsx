
import React, { useState } from "react";
import { useForm } from "@/context/FormContext";
import FormNavigation from "@/components/FormNavigation";
import { toast } from "sonner";

const ContactInfoStep: React.FC = () => {
  const { formData, updateFormData } = useForm();
  const [name, setName] = useState(formData.name || "");
  const [email, setEmail] = useState(formData.email || "");
  
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleNext = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    
    if (!email.trim() || !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    
    updateFormData({ name, email });
    return true;
  };

  return (
    <div className="form-step">
      <h2 className="text-xl font-medium mb-8 text-center">
        When should I prepare this estimate for?
      </h2>
      
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Your name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="input-primary"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="input-primary"
          />
          <p className="text-xs text-slate-500 mt-1">
            We'll send your estimate here. We respect your privacy.
          </p>
        </div>
      </div>
      
      <FormNavigation 
        onNext={handleNext} 
        nextDisabled={!name.trim() || !email.trim() || !validateEmail(email)}
      />
    </div>
  );
};

export default ContactInfoStep;
