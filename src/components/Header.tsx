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
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:shadow-strong">
                <span className="text-white font-bold text-sm font-poppins">PM</span>
              </div>
              <div className="absolute inset-0 bg-hero-gradient rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-poppins group-hover:text-primary transition-colors duration-300">PM Internship</h1>
              <p className="text-xs text-muted-foreground font-inter">AI-Powered Career Engine</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 hover:scale-105">
              Dashboard
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 hover:scale-105">
              <FileText className="h-4 w-4 mr-2" />
              Applications
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 hover:scale-105">
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmarks
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 hover:scale-105">
              <Shield className="h-4 w-4 mr-2" />
              Safety
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 hover:scale-105">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-card-gradient hover:bg-primary-gradient hover:text-white border-border/50 hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 font-medium">
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
            
            <Button variant="ghost" size="sm" className="relative hover:bg-primary/5 transition-all duration-300 hover:scale-110">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-success-gradient animate-pulse-glow"></Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="hover:bg-primary/5 transition-all duration-300 hover:scale-110">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="hover:bg-primary/5 transition-all duration-300 hover:scale-110">
              <div className="w-6 h-6 bg-hero-gradient rounded-full flex items-center justify-center text-white text-xs font-semibold">
                A
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};