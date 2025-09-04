import { InternshipCard } from "./InternshipCard";
import { AnimatedBackground } from "./AnimatedBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  BookOpen, 
  Target, 
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  Star
} from "lucide-react";

// Mock data for internships
const mockInternships = [
  {
    title: "AI/ML Research Intern",
    organization: "Ministry of Electronics & IT",
    domain: "Artificial Intelligence",
    location: "New Delhi",
    duration: "3 months",
    matchScore: 95,
    whyRecommended: "Perfect match for your Python, Machine Learning, and Data Science skills from your Computer Science background."
  },
  {
    title: "Policy Research Intern",
    organization: "NITI Aayog",
    domain: "Public Policy",
    location: "New Delhi",
    duration: "6 months",
    matchScore: 88,
    whyRecommended: "Your research experience and interest in governance aligns well with policy analysis requirements."
  },
  {
    title: "Digital India Campaign Intern",
    organization: "Ministry of Electronics & IT",
    domain: "Digital Transformation",
    location: "Mumbai",
    duration: "4 months",
    matchScore: 82,
    whyRecommended: "Your web development skills and passion for social impact make you ideal for digital initiatives."
  },
  {
    title: "Financial Analytics Intern",
    organization: "Ministry of Finance",
    domain: "Data Analytics",
    location: "New Delhi",
    duration: "5 months",
    matchScore: 79,
    whyRecommended: "Your mathematics background and analytical skills match the quantitative requirements perfectly."
  },
  {
    title: "Smart Cities Research Intern",
    organization: "Ministry of Housing & Urban Affairs",
    domain: "Urban Planning",
    location: "Bangalore",
    duration: "4 months",
    matchScore: 76,
    whyRecommended: "Your interest in technology and sustainable development aligns with smart city initiatives."
  }
];

const skillGaps = [
  { skill: "Advanced Excel", progress: 30, priority: "High" },
  { skill: "Public Speaking", progress: 60, priority: "Medium" },
  { skill: "Project Management", progress: 45, priority: "High" },
  { skill: "Data Visualization", progress: 80, priority: "Low" }
];

export const Dashboard = () => {
  return (
    <main className="relative min-h-screen bg-background-gradient overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold text-gradient font-poppins">
              Hi Ananya! 👋
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl">
            Your AI-powered career companion has analyzed <span className="text-primary font-semibold">47 opportunities</span> and found perfect matches for your profile. Let's build your future together!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="group bg-card-gradient shadow-soft border-border/30 card-hover overflow-hidden animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Target className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient font-poppins">47</p>
                  <p className="text-sm text-muted-foreground font-inter">Perfect Matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card-gradient shadow-soft border-border/30 card-hover overflow-hidden animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                  <Award className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-poppins">3</p>
                  <p className="text-sm text-muted-foreground font-inter">Applications Sent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card-gradient shadow-soft border-border/30 card-hover overflow-hidden animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-secondary/50 rounded-xl group-hover:bg-secondary/70 transition-colors duration-300">
                  <BookOpen className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-poppins">12</p>
                  <p className="text-sm text-muted-foreground font-inter">Saved Opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card-gradient shadow-soft border-border/30 card-hover overflow-hidden animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-success-gradient/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <TrendingUp className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient font-poppins">94%</p>
                  <p className="text-sm text-muted-foreground font-inter">Profile Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground font-poppins">
                  AI-Curated Just For You
                </h3>
              </div>
              <Button variant="outline" className="group hover:bg-primary-gradient hover:text-white hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 font-medium">
                View All 47 Matches
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="space-y-6">
              {mockInternships.map((internship, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <InternshipCard
                    {...internship}
                    onApply={() => console.log("Applying to:", internship.title)}
                    onBookmark={() => console.log("Bookmarking:", internship.title)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.7s' }}>
            {/* Skill Gaps */}
            <Card className="bg-card-gradient shadow-soft border-border/30 hover:shadow-medium transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-foreground font-poppins">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  Skill Enhancement
                  <Badge className="ml-auto bg-success-gradient text-white">
                    <Star className="h-3 w-3 mr-1" />
                    AI Powered
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillGaps.map((skill, index) => (
                  <div key={index} className="space-y-3 group/skill">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground font-inter group-hover/skill:text-primary transition-colors duration-200">
                        {skill.skill}
                      </span>
                      <Badge 
                        variant={skill.priority === "High" ? "destructive" : 
                                skill.priority === "Medium" ? "default" : "secondary"}
                        className="text-xs font-medium"
                      >
                        {skill.priority}
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress value={skill.progress} className="h-3 bg-secondary/50" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-sm opacity-50"></div>
                    </div>
                    <p className="text-xs text-muted-foreground font-inter">
                      {skill.progress}% mastered • {100 - skill.progress}% to expert level
                    </p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-6 bg-primary/5 hover:bg-primary-gradient hover:text-white border-primary/20 hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 font-medium">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explore Learning Paths
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card-gradient shadow-soft border-border/30 hover:shadow-medium transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-foreground font-poppins">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-105 font-medium group/action">
                  <BookOpen className="h-4 w-4 mr-3 group-hover/action:scale-110 transition-transform duration-300" />
                  Update Preferences
                  <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover/action:opacity-100 group-hover/action:translate-x-1 transition-all duration-300" />
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-accent/5 hover:border-accent/30 hover:text-accent transition-all duration-300 hover:scale-105 font-medium group/action">
                  <Award className="h-4 w-4 mr-3 group-hover/action:scale-110 transition-transform duration-300" />
                  Take Skill Assessment
                  <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover/action:opacity-100 group-hover/action:translate-x-1 transition-all duration-300" />
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-105 font-medium group/action">
                  <TrendingUp className="h-4 w-4 mr-3 group-hover/action:scale-110 transition-transform duration-300" />
                  View Analytics
                  <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover/action:opacity-100 group-hover/action:translate-x-1 transition-all duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};