"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Passionate Developer with a Love for Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a software developer who believes in creating meaningful
            solutions that make a difference in people&apos;s lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div
            className={cn(
              "space-y-6 transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="text-2xl font-semibold">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I started my journey in software development 4 years ago, driven
                by curiosity and a desire to build things that matter. What
                began as simple scripts has evolved into full-stack applications
                that serve thousands of users.
              </p>
              <p className="leading-relaxed">
                I specialize in modern web technologies, with expertise in
                React, Node.js, and cloud platforms. My approach combines
                technical excellence with user-centered design principles.
              </p>
              <p className="leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to
                open-source projects, mentoring junior developers, or exploring
                new technologies to stay ahead of the curve.
              </p>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div
            className={cn(
              "space-y-8 transition-all duration-1000 delay-400",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Experience</h3>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">
                        Senior Software Developer
                      </h4>
                      <Badge variant="secondary">2023 - Present</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">DI Solutions</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading development of enterprise applications, mentoring
                      team members, and implementing best practices for scalable
                      architecture.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Front End Developer</h4>
                      <Badge variant="secondary">2022 - 2023</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">DI Solutions</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built and maintained multiple web applications,
                      collaborated with cross-functional teams, and contributed
                      to product strategy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">
                      Bachelor of Electrical Engineering
                    </h4>
                    <Badge variant="secondary">2015 - 2019</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Gujarat Technological University
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Graduated with honors. Specialized in electrical engineering
                    and participated in various hackathons and coding
                    competitions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
