"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Define the schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    {
      title: "Email",
      value: "john.doe@example.com",
      icon: "📧",
      link: "mailto:john.doe@example.com",
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📱",
      link: "tel:+15551234567",
    },
    {
      title: "Location",
      value: "San Francisco, CA",
      icon: "📍",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "🐙",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "💼",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "🐦",
    },
    {
      name: "Portfolio",
      url: "#",
      icon: "🌐",
    },
  ];

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

  const onSubmit = async (data: ContactFormData) => {
    console.log('data',data)
    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        created: Timestamp.now(),
      });
      reset();
      // Optionally show a success message
    } catch (error) {
      // Optionally show an error message
      console.error("Error sending message:", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you&apos;d like to
            connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={cn(
              "space-y-8 transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-muted hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      <span>{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">
                      Available for new opportunities
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I&apos;m currently accepting freelance work and full-time
                    positions. Let&apos;s discuss how I can help bring your
                    ideas to life!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-1000 delay-400",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                      {errors.name?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                      {errors.email?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register("subject")}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    />
                    {errors.subject?.message && (
                      <p className="text-red-500 text-xs">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
                    />
                    {errors.message?.message && (
                      <p className="text-red-500 text-xs">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full hover:scale-105 transition-transform duration-200 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {isSubmitSuccessful && (
                    <p className="text-green-600 text-center mt-2">
                      Message sent successfully!
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div
          className={cn(
            "text-center mt-16 pt-8 border-t transition-all duration-1000 delay-600",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-muted-foreground">
            © 2024 John Doe. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with Next.js, TypeScript, and shadcn/ui
          </p>
        </div>
      </div>
    </section>
  );
}
