"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className={cn(
        "pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={cn(
              "space-y-8 transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm animate-pulse">
                👋 Hello, I&apos;m
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  John Doe
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I build exceptional digital experiences with modern
                technologies. Passionate about clean code, user experience, and
                continuous learning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div
            className={cn(
              "flex justify-center lg:justify-end transition-all duration-1000 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Avatar className="w-80 h-80 border-4 border-primary/20 relative z-10 group-hover:scale-105 transition-transform duration-300">
                <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
                <AvatarFallback className="text-6xl bg-primary/10">
                  JD
                </AvatarFallback>
              </Avatar>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Badge className="bg-green-500 text-white shadow-lg">
                  Available for hire
                </Badge>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-pulse">
                <Badge variant="secondary" className="shadow-lg">
                  Full Stack
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
