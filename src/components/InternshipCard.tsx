import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Building, Bookmark, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

interface InternshipCardProps {
  title: string;
  organization: string;
  domain: string;
  location: string;
  duration: string;
  matchScore: number;
  whyRecommended: string;
  isBookmarked?: boolean;
  onBookmark?: () => void;
  onApply?: () => void;
}

export const InternshipCard = ({
  title,
  organization,
  domain,
  location,
  duration,
  matchScore,
  whyRecommended,
  isBookmarked = false,
  onBookmark,
  onApply
}: InternshipCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    onBookmark?.();
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "bg-success-gradient";
    if (score >= 75) return "bg-primary-gradient";
    return "bg-secondary";
  };

  const getMatchScoreTextColor = (score: number) => {
    if (score >= 75) return "text-white";
    return "text-foreground";
  };

  return (
    <Card className="group relative hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card-gradient border-border/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Badge 
                className={`${getMatchScoreColor(matchScore)} ${getMatchScoreTextColor(matchScore)} font-semibold px-4 py-2 text-sm shadow-soft group-hover:shadow-medium transition-all duration-300 hover:scale-105 font-poppins`}
              >
                ✨ {matchScore}% Match
              </Badge>
              <Badge variant="outline" className="font-medium border-border/50 hover:border-primary/30 transition-colors duration-300 font-inter">
                {domain}
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 font-poppins mb-2">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                <Building className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium font-inter">{organization}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className="shrink-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 group/bookmark"
          >
            <Bookmark 
              className={`h-5 w-5 transition-all duration-300 group-hover/bookmark:scale-110 ${
                bookmarked 
                  ? "fill-primary text-primary animate-pulse-glow" 
                  : "text-muted-foreground group-hover/bookmark:text-primary"
              }`} 
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 relative z-10">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium font-inter">{location}</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium font-inter">{duration}</span>
          </div>
        </div>
        
        <div className="relative bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl p-4 border-l-4 border-primary/60 group-hover:border-primary transition-colors duration-300 shimmer-effect">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed font-inter">
                <span className="font-semibold text-foreground">Why AI recommends this: </span>
                {whyRecommended}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 pt-3">
          <Button 
            onClick={onApply}
            className="flex-1 bg-primary-gradient hover:bg-primary-gradient-hover hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium font-semibold font-poppins"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            onClick={handleBookmark}
            className="hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
          >
            {bookmarked ? (
              <>
                <Bookmark className="h-4 w-4 mr-2 fill-primary text-primary" />
                Saved
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};