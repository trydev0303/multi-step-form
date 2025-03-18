
import React from "react";
import { useForm } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormNavigationProps {
  onNext?: () => boolean | Promise<boolean>;
  onBack?: () => void;
  nextDisabled?: boolean;
  backDisabled?: boolean;
  nextLabel?: string;
  showBackButton?: boolean;
  className?: string;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  onNext,
  onBack,
  nextDisabled = false,
  backDisabled = false,
  nextLabel = "Next",
  showBackButton = true,
  className,
}) => {
  const { nextStep, prevStep } = useForm();
  const [loading, setLoading] = React.useState(false);

  const handleNext = async () => {
    if (nextDisabled) return;
    
    if (onNext) {
      setLoading(true);
      try {
        const canProceed = await onNext();
        if (canProceed) {
          nextStep();
        }
      } catch (error) {
        console.error("Error in form navigation:", error);
      } finally {
        setLoading(false);
      }
    } else {
      nextStep();
    }
  };

  const handleBack = () => {
    if (backDisabled) return;
    
    if (onBack) {
      onBack();
    }
    prevStep();
  };

  return (
    <div className={cn("flex justify-between mt-8", className)}>
      {showBackButton && (
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={backDisabled}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      )}
      <div className={!showBackButton ? "ml-auto" : ""}>
        <Button
          onClick={handleNext}
          disabled={nextDisabled || loading}
          className="button-primary"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <>
              {nextLabel}
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FormNavigation;
