import { InternshipCard } from "./InternshipCard";
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
  Sparkles
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
    <main className="min-h-screen bg-background-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Hi Ananya! 👋
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Here are personalized internship recommendations based on your profile and preferences.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card-gradient shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">47</p>
                  <p className="text-sm text-muted-foreground">Matches Found</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Bookmarked</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">87%</p>
                  <p className="text-sm text-muted-foreground">Profile Match</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Recommendations */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                Recommended For You
              </h3>
              <Button variant="outline" className="hover:bg-secondary/50">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              {mockInternships.map((internship, index) => (
                <InternshipCard
                  key={index}
                  {...internship}
                  onApply={() => console.log("Applying to:", internship.title)}
                  onBookmark={() => console.log("Bookmarking:", internship.title)}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skill Gaps */}
            <Card className="bg-card-gradient shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Target className="h-5 w-5 text-primary" />
                  Skill Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillGaps.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.skill}
                      </span>
                      <Badge 
                        variant={skill.priority === "High" ? "destructive" : 
                                skill.priority === "Medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {skill.priority}
                      </Badge>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {skill.progress}% completed
                    </p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 hover:bg-secondary/50">
                  View Learning Resources
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card-gradient shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start hover:bg-secondary/50">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Update Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-secondary/50">
                  <Award className="h-4 w-4 mr-2" />
                  Take Skill Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-secondary/50">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};