"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{
    [key: string]: boolean;
  }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 60 },
        { name: "Jest", level: 75 },
      ],
    },
  ];

  const otherSkills = [
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "CI/CD",
    "Agile/Scrum",
    "System Design",
    "Performance Optimization",
    "Security Best Practices",
    "Testing",
    "Code Review",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills((prev) => ({
                  ...prev,
                  [`${category.title}-${skill.name}`]: true,
                }));
              }, categoryIndex * 200 + skillIndex * 100);
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and frameworks to
            create robust and scalable applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={cn(
                "transition-all duration-1000 hover:shadow-lg hover:scale-105",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={cn(
                          "bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out",
                          animatedSkills[`${category.title}-${skill.name}`]
                            ? "w-full"
                            : "w-0"
                        )}
                        style={{
                          width: animatedSkills[
                            `${category.title}-${skill.name}`
                          ]
                            ? `${skill.level}%`
                            : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Skills */}
        <div
          className={cn(
            "text-center transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h3 className="text-2xl font-semibold mb-6">
            Other Skills & Knowledge
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className={cn(
                  "text-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-pointer",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-1000 delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="text-sm animate-pulse">
                  Rust
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  WebAssembly
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  Machine Learning
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                >
                  Blockchain
                </Badge>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                I believe in continuous learning and staying updated with the
                latest technologies and best practices in the industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
