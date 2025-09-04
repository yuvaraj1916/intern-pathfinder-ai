import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Building, Bookmark, ExternalLink } from "lucide-react";
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
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card-gradient border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge 
                className={`${getMatchScoreColor(matchScore)} ${getMatchScoreTextColor(matchScore)} font-semibold px-3 py-1`}
              >
                {matchScore}% Match
              </Badge>
              <Badge variant="outline" className="font-medium">
                {domain}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground mt-1">
              <Building className="h-4 w-4" />
              <span className="text-sm font-medium">{organization}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className="shrink-0 hover:bg-secondary/50"
          >
            <Bookmark 
              className={`h-4 w-4 transition-colors ${
                bookmarked ? "fill-primary text-primary" : "text-muted-foreground"
              }`} 
            />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-3 border-l-4 border-primary">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Why recommended: </span>
            {whyRecommended}
          </p>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={onApply}
            className="flex-1 bg-primary-gradient hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            onClick={handleBookmark}
            className="hover:bg-secondary/50"
          >
            {bookmarked ? "Saved" : "Save"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};