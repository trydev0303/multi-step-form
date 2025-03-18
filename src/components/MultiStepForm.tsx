
import React from "react";
import { useForm } from "@/context/FormContext";
import ProgressBar from "./ProgressBar";
import ZipCodeStep from "./form-steps/ZipCodeStep";
import NoContractorsStep from "./form-steps/NoContractorsStep";
import CabinetConditionStep from "./form-steps/CabinetConditionStep";
import RefacingOptionStep from "./form-steps/RefacingOptionStep";
import OtherChangesStep from "./form-steps/OtherChangesStep";
import OtherElementsStep from "./form-steps/OtherElementsStep";
import KitchenSizeStep from "./form-steps/KitchenSizeStep";
import PropertyTypeStep from "./form-steps/PropertyTypeStep";
import AuthorizedStep from "./form-steps/AuthorizedStep";
import BudgetStep from "./form-steps/BudgetStep";
import ContactInfoStep from "./form-steps/ContactInfoStep";
import PhoneStep from "./form-steps/PhoneStep";
import CompletionStep from "./form-steps/CompletionStep";

const MultiStepForm: React.FC = () => {
  const { currentStep } = useForm();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ZipCodeStep />;
      case 2:
        return <NoContractorsStep />;
      case 3:
        return <CabinetConditionStep />;
      case 4:
        return <RefacingOptionStep />;
      case 5:
        return <OtherChangesStep />;
      case 6:
        return <OtherElementsStep />;
      case 7:
        return <KitchenSizeStep />;
      case 8:
        return <PropertyTypeStep />;
      case 9:
        return <AuthorizedStep />;
      case 10:
        return <BudgetStep />;
      case 11:
        return <ContactInfoStep />;
      case 12:
        return <PhoneStep />;
      case 13:
        return <CompletionStep />;
      default:
        return <ZipCodeStep />;
    }
  };

  return (
    <div className="form-container relative bg-white">
      <ProgressBar />
      <div className="form-step-container overflow-hidden">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
