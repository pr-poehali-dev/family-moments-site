import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string; date: string } | null>(null);

  const sections = [
    {
      id: 'travel',
      title: 'Путешествия',
      icon: 'Plane',
      color: 'bg-gradient-to-br from-primary to-pink-400',
      images: [
        { url: 'https://cdn.poehali.dev/files/b6342490-bf2e-45ea-93d4-0eb30a8ee9dd.jpg', caption: 'Морской собор, Кронштадт', date: 'Апрель 2024' },
        { url: 'https://cdn.poehali.dev/files/5e7cec88-5694-4254-bd15-de85c0a01f13.jpg', caption: 'Парк «Остров фортов»', date: 'Апрель 2024' },
      ],
      description: 'Наши приключения по всему миру',
    },
    {
      id: 'memories',
      title: 'Воспоминания',
      icon: 'Heart',
      color: 'bg-gradient-to-br from-secondary to-cyan-400',
      images: [
        { url: 'https://cdn.poehali.dev/files/ff0da5eb-5b42-4836-ae39-59dd6ee0ed96.jpg', caption: 'Кафе «Восточный экспресс»', date: 'Февраль 2024' },
        { url: 'https://cdn.poehali.dev/files/8c364452-97bb-4346-8a1d-2e150dc879ae.jpg', caption: 'Первое свидание в новом году', date: 'Сентябрь 2024' },
      ],
      description: 'Особенные моменты нашей жизни',
    },
    {
      id: 'events',
      title: 'События',
      icon: 'Calendar',
      color: 'bg-gradient-to-br from-accent to-yellow-300',
      images: [
        { url: 'https://cdn.poehali.dev/files/07c6ea3c-6600-4d7b-a1de-308745ae5d2d.jpg', caption: 'Концерт в филармонии', date: 'Март 2024' },
        { url: 'https://cdn.poehali.dev/files/31f1fc5c-4544-4760-88b2-8aa754398233.jpg', caption: 'Ужин с семьёй', date: 'Июль 2024' },
      ],
      description: 'Важные даты и праздники',
    },
    {
      id: 'hobbies',
      title: 'Хобби',
      icon: 'Palette',
      color: 'bg-gradient-to-br from-purple-400 to-indigo-400',
      images: [],
      description: 'Наши увлечения и творчество',
    },
    {
      id: 'wedding',
      title: 'Свадьба',
      icon: 'Sparkles',
      color: 'bg-gradient-to-br from-pink-300 to-rose-400',
      images: [],
      description: 'Самый важный день в нашей жизни',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/10">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наша Семья
          </h1>
          <nav className="hidden md:flex gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {section.title}
              </button>
            ))}
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <img 
          src="https://cdn.poehali.dev/files/8c364452-97bb-4346-8a1d-2e150dc879ae.jpg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        
        <div className="relative z-10 text-center px-4 pb-12 md:pb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white drop-shadow-2xl">
            Наша История
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto drop-shadow-lg">
            Запечатлённые моменты любви, счастья и приключений
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            onClick={() => {
              const element = document.getElementById('travel');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начать путешествие
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${section.color} mb-4 animate-scale-in`}>
                    <Icon name={section.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-4xl font-heading font-bold mb-2">{section.title}</h3>
                  <p className="text-lg text-foreground/70">{section.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.images.map((image, imgIndex) => (
                    <Card
                      key={imgIndex}
                      className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                      onClick={() => {
                        if (typeof image !== 'string') {
                          setSelectedImage(image);
                        }
                      }}
                    >
                      <CardContent className="p-0 relative">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={typeof image === 'string' ? image : image.url}
                            alt={typeof image === 'string' ? `${section.title} ${imgIndex + 1}` : image.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            {typeof image !== 'string' && (
                              <>
                                <p className="font-heading font-semibold text-lg mb-1">{image.caption}</p>
                                <p className="text-sm text-white/80 flex items-center gap-2">
                                  <Icon name="Calendar" size={16} />
                                  {image.date}
                                </p>
                              </>
                            )}
                            {typeof image === 'string' && (
                              <p className="font-heading font-semibold text-lg">Смотреть больше</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="group border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300 cursor-pointer hover:shadow-lg">
                    <CardContent className="p-0 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          <Icon name="Plus" size={32} className="text-primary" />
                        </div>
                        <p className="text-foreground/60 font-medium">Добавить фото</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={24} className="text-primary fill-primary animate-pulse" />
            <p className="text-lg font-heading font-semibold">Создано с любовью</p>
          </div>
          <p className="text-foreground/60">© 2025 Наша Семья. Все воспоминания бесценны.</p>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-12 h-12"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={28} />
          </Button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                {selectedImage.caption}
              </h3>
              <p className="text-lg text-white/80 flex items-center justify-center gap-2">
                <Icon name="Calendar" size={20} />
                {selectedImage.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;