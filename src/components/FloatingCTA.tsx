import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Plus } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-scale-in">
          <Button
            size="sm"
            variant="outline"
            className="bg-card-gradient/95 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 font-medium"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Resume
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-card-gradient/95 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 font-medium"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Get AI Tips
          </Button>
        </div>
      )}

      {/* Main FAB */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-primary-gradient shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-110 animate-pulse-glow ${
          isExpanded ? "rotate-45" : ""
        }`}
      >
        <Plus className="h-6 w-6 text-white transition-transform duration-300" />
      </Button>
    </div>
  );
};