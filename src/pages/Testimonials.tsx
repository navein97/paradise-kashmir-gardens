import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Residential Client",
      rating: 5,
      text: "Paradise Kashmir Landscaping transformed our backyard into an absolute paradise! Their attention to detail and commitment to quality is unmatched. The team was professional, punctual, and exceeded all our expectations. We now have the garden of our dreams!",
    },
    {
      name: "Michael Chen",
      location: "Commercial Property Owner",
      rating: 5,
      text: "Working with Paradise Kashmir was an exceptional experience. They designed and installed a stunning landscape for our office complex that has received countless compliments. Their Kashmir-inspired design brought a unique elegance to our property.",
    },
    {
      name: "Emily Rodriguez",
      location: "Homeowner",
      rating: 5,
      text: "From the initial consultation to the final installation, every step was handled with professionalism and care. The hardscaping work is beautiful and functional, and the plant selections are perfect for our climate. Highly recommend!",
    },
    {
      name: "David Thompson",
      location: "Residential Client",
      rating: 5,
      text: "We've been using their maintenance services for two years now, and our lawn has never looked better. The team is reliable, knowledgeable, and always goes above and beyond. Worth every penny!",
    },
    {
      name: "Jennifer Martinez",
      location: "Property Developer",
      rating: 5,
      text: "Paradise Kashmir Landscaping has been our go-to partner for multiple development projects. Their ability to deliver high-quality results on time and within budget is impressive. They understand both aesthetics and functionality perfectly.",
    },
    {
      name: "Robert Williams",
      location: "Homeowner",
      rating: 5,
      text: "The water feature they installed in our front yard is absolutely breathtaking. It's become the focal point of our property and adds such a peaceful ambiance. Their craftsmanship is truly outstanding.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            Hear what our satisfied clients have to say about their experience with Paradise Kashmir
            Landscaping
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow relative">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Experience the Paradise Kashmir difference for yourself. Let's create your dream landscape together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
