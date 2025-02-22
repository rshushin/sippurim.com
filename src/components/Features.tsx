
import { MessageSquare, Book, Globe, User } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Telegram Channel",
    description: "Daily stories and insights about Jewish history and culture.",
  },
  {
    icon: Book,
    title: "Hebrew Learning",
    description: "Interactive bot to help you master the Hebrew language.",
  },
  {
    icon: Globe,
    title: "Rich Content",
    description: "Discover the depth and beauty of Jewish heritage.",
  },
  {
    icon: User,
    title: "Personal Growth",
    description: "Learn at your own pace with personalized guidance.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sippurim?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community and embark on a journey through Jewish history while
            mastering the Hebrew language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-background hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
