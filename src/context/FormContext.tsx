
import React, { createContext, useContext, useState } from "react";

type FormData = {
  zipCode: string;
  condition: string;
  refacingOption: string;
  otherChanges: string[];
  otherElements: string[];
  kitchenSize: string;
  propertyType: string;
  isAuthorized: boolean;
  budget: string;
  name: string;
  email: string;
  phone: string;
  comments: string;
};

type FormContextType = {
  currentStep: number;
  formData: FormData;
  progress: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

const initialFormData: FormData = {
  zipCode: "",
  condition: "",
  refacingOption: "",
  otherChanges: [],
  otherElements: [],
  kitchenSize: "",
  propertyType: "",
  isAuthorized: false,
  budget: "",
  name: "",
  email: "",
  phone: "",
  comments: "",
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const totalSteps = 13;

  const progress = Math.floor((currentStep / totalSteps) * 100);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        formData,
        progress,
        setCurrentStep,
        nextStep,
        prevStep,
        updateFormData,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
