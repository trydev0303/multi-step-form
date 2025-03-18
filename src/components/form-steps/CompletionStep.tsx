
import React from "react";
import { useForm } from "@/context/FormContext";

const CompletionStep: React.FC = () => {
  const { formData } = useForm();
  
  // Helper function to render array values as a bulleted list
  const renderArrayItems = (items: string[]) => {
    if (!items || items.length === 0) return "None selected";
    
    if (items.length === 1) return items[0];
    
    return (
      <ul className="list-disc pl-5 mt-1">
        {items.map((item, index) => (
          <li key={index} className="text-slate-600">{item}</li>
        ))}
      </ul>
    );
  };
  
  return (
    <div className="form-step">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <img 
            src="/lovable-uploads/b1d1343f-3fa2-4569-8265-fdaf76a04799.png" 
            alt="Completion" 
            className="w-16 h-16 object-contain"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">
          Thank you! Your contractor Revalize Kitchens will call soon!
        </h2>
        
        <p className="text-slate-600 max-w-lg">
          You'll receive a detailed estimate for your kitchen cabinet refacing project within 24 hours. We've matched you with top-rated contractors in your area.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
        <div className="bg-slate-50 p-6 rounded-xl">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
            No-obligation appointment
          </h3>
          <p className="text-sm text-slate-600">
            A professional kitchen designer will contact you to schedule a free consultation at your convenience.
          </p>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-xl">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
            Ready to call you!
          </h3>
          <p className="text-sm text-slate-600">
            Your matched contractor will call you shortly at {formData.phone} to discuss your project in detail.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl max-w-2xl mx-auto mb-8">
        <h3 className="font-medium mb-4">Your Project Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">ZIP Code:</p>
            <p className="text-slate-600">{formData.zipCode}</p>
          </div>
          <div>
            <p className="font-medium">Cabinet Condition:</p>
            <p className="text-slate-600">{formData.condition}</p>
          </div>
          <div>
            <p className="font-medium">Refacing Option:</p>
            <p className="text-slate-600">{formData.refacingOption}</p>
          </div>
          <div>
            <p className="font-medium">Layout Changes:</p>
            <div className="text-slate-600">{renderArrayItems(formData.otherChanges)}</div>
          </div>
          <div>
            <p className="font-medium">Other Elements:</p>
            <div className="text-slate-600">{renderArrayItems(formData.otherElements)}</div>
          </div>
          <div>
            <p className="font-medium">Kitchen Size:</p>
            <p className="text-slate-600">{formData.kitchenSize}</p>
          </div>
          <div>
            <p className="font-medium">Property Type:</p>
            <p className="text-slate-600">{formData.propertyType}</p>
          </div>
          <div>
            <p className="font-medium">Authorized:</p>
            <p className="text-slate-600">{formData.isAuthorized ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="font-medium">Budget:</p>
            <p className="text-slate-600">{formData.budget}</p>
          </div>
          <div>
            <p className="font-medium">Name:</p>
            <p className="text-slate-600">{formData.name}</p>
          </div>
          <div>
            <p className="font-medium">Email:</p>
            <p className="text-slate-600">{formData.email}</p>
          </div>
          <div>
            <p className="font-medium">Phone:</p>
            <p className="text-slate-600">{formData.phone}</p>
          </div>
        </div>
        {formData.comments && (
          <div className="mt-4">
            <p className="font-medium">Additional Comments:</p>
            <p className="text-slate-600">{formData.comments}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletionStep;
