
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="text-center space-y-6 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Изучайте иврит через <br />
          <span className="text-primary">истории и песни</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Откройте для себя красоту еврейской истории и культуры, изучая иврит с нашим интерактивным ботом.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <BookOpen className="mr-2 h-5 w-5" />
            Начать
          </Button>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-left text-muted-foreground">
          <p className="mb-4">
            Изучение языка в контексте и через погружение доказало свою эффективность. Традиционные методы, основанные на заучивании слов и правил, часто не дают долгосрочных результатов. В отличие от них, подходы, использующие контекст и погружение, помогают глубже понимать и запоминать материал.
          </p>
          <p className="mb-4">
            Например, исследование показывает, что учет контекстуальных факторов помогает учащимся лучше усваивать язык. Кроме того, обзор исследований по языковому погружению подчеркивает, что такие программы развивают грамотность на двух и более языках и улучшают когнитивные навыки.
          </p>
          <p className="mb-4">
            Методы, включающие чтение параллельных текстов и прослушивание песен, активируют интуитивное мышление. Это позволяет мозгу связывать новые слова с ситуациями и эмоциями, что делает обучение более естественным и эффективным.
          </p>
          <p>
            Мы в Sippurim создаем уникальный способ изучения иврита, предлагая материалы, которые помогут вам погрузиться в язык через истории, песни и параллельные тексты. А еще мы работаем над созданием Телеграм-бота, который будет выполнять функции полноценного приложения. Этот бот станет вашим помощником в изучении языка, предлагая интерактивные задания и персонализированный подход.
          </p>
        </div>
      </div>
    </section>
  );
};
