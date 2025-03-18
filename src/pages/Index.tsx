
import React from "react";
import { FormProvider } from "@/context/FormContext";
import MultiStepForm from "@/components/MultiStepForm";
import { Toaster } from "sonner";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <FormProvider>
          <MultiStepForm />
        </FormProvider>
      </div>
      <Toaster position="top-center" />
      <style dangerouslySetInnerHTML={{ __html: `
        .form-container {
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .form-step-container {
          padding: 2rem;
        }
        
        .progress-bar {
          height: 4px;
          background-color: #3B82F6;
          transition: width 0.3s ease;
        }
        
        .form-option-circle {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .form-option-circle.selected {
          border-color: #3B82F6;
          background-color: #3B82F6;
          color: white;
        }
        
        .form-card {
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .form-card:hover {
          border-color: #d1d5db;
        }
        
        .form-card.selected {
          border-color: #3B82F6;
          background-color: #EFF6FF;
        }
        
        .input-primary {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          outline: none;
          transition: all 0.2s ease;
        }
        
        .input-primary:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
        }
        
        .button-primary {
          background-color: #3B82F6;
          color: white;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          transition: all 0.2s ease;
        }
        
        .button-primary:hover:not(:disabled) {
          background-color: #2563EB;
        }
        
        .button-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .button-secondary {
          background-color: white;
          color: #4B5563;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          transition: all 0.2s ease;
        }
        
        .button-secondary:hover {
          background-color: #F9FAFB;
          border-color: #9CA3AF;
        }
      `}} />
    </div>
  );
};

export default Index;
