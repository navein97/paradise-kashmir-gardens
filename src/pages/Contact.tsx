import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform your outdoor space? Contact us for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Request a Free Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Input id="service" placeholder="e.g., Garden Design" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Please describe your landscaping needs, property size, timeline, and any specific ideas you have in mind..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Request Consultation"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">info@paradisekashmir.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-sm text-muted-foreground">
                          Serving residential and commercial clients throughout the region
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Free on-site consultations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Licensed & insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Competitive pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Quality workmanship guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Eco-friendly practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Paradise?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Don't wait to transform your outdoor space. Contact us today and let's start planning your dream
            landscape.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
