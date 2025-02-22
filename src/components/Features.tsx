
import { MessageSquare, Music, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Интерактивный бот",
    description: "Общайтесь с нашим ботом, чтобы изучать слова, практиковать переводы и многое другое.",
  },
  {
    icon: Music,
    title: "Песни и тексты",
    description: "Получите доступ к тщательно подобранной библиотеке песен на иврите и параллельных текстов для улучшения вашего обучения.",
  },
  {
    icon: Smartphone,
    title: "Будущее приложение",
    description: "Следите за новостями о нашем будущем приложении, которое сделает ваш опыт обучения еще лучше.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Особенности</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
