import { motion } from 'framer-motion';
import { Code2, Briefcase, TrendingUp, Award } from 'lucide-react';
import { Card } from './ui/card';

export const AboutMe = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Expert",
      description: "C# .NET, React.js, Android Studio"
    },
    {
      icon: Briefcase,
      title: "Enterprise Solutions",
      description: "ERP, CRM, Payroll, Finance Systems"
    },
    {
      icon: TrendingUp,
      title: "Marketing Manager",
      description: "Digital campaigns & automation"
    },
    {
      icon: Award,
      title: "Project Leadership",
      description: "End-to-end delivery excellence"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            <span className="text-gradient glow-text">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Results-driven Full Stack Web Developer & Marketing Manager with extensive experience 
            in building scalable enterprise solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border h-full">
              <h3 className="text-2xl font-bold text-gradient mb-6">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed space-y-4">
                <span className="block">
                  Extensive experience in C# .NET, React.js, Android Studio, specializing in ERP, CRM, 
                  Payroll, Finance, and Retail systems. Skilled in end-to-end project management, from 
                  requirement gathering and documentation to development, testing, and delivery.
                </span>
                <span className="block">
                  Proven track record in designing e-commerce and corporate websites, implementing automation 
                  workflows, integrating AI voice systems, and executing marketing campaigns that increase 
                  user engagement.
                </span>
                <span className="block">
                  Strong problem-solving skills with a history of resolving critical system issues, optimizing 
                  databases, and improving operational efficiency. Adept at collaborating with clients and 
                  cross-functional teams to deliver projects on time and to specification.
                </span>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-gradient-to-r from-card/80 to-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
