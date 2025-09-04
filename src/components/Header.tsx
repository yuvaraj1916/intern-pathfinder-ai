import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  User, 
  Upload, 
  Settings, 
  Bookmark, 
  FileText,
  HelpCircle,
  Shield
} from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PM Internship</h1>
              <p className="text-xs text-muted-foreground">Recommendation Engine</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Dashboard
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <FileText className="h-4 w-4 mr-2" />
              My Applications
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmarks
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <Shield className="h-4 w-4 mr-2" />
              Safety Tips
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-accent"></Badge>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};