
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="text-center space-y-6 animate-fade-up">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
          <MessageSquare className="w-4 h-4 mr-2" />
          Join our Telegram Community
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Discover Jewish History <br />
          <span className="text-primary">Learn Hebrew</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore fascinating stories from Jewish history and master Hebrew language
          with our interactive Telegram bot and engaging content.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <MessageSquare className="mr-2 h-5 w-5" />
            Join Channel
          </Button>
          <Button size="lg" variant="outline">
            <BookOpen className="mr-2 h-5 w-5" />
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  );
};
