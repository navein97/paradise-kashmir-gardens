import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Hammer, Droplet, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";
import gardenDesign from "@/assets/service-garden-design.jpg";
import hardscaping from "@/assets/service-hardscaping.jpg";
import lawnMaintenance from "@/assets/service-lawn-maintenance.jpg";
import waterFeatures from "@/assets/service-water-features.jpg";

const Home = () => {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Garden Design",
      description: "Transform your outdoor space with our bespoke Kashmir-inspired garden designs that blend natural beauty with functional elegance.",
      image: gardenDesign,
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Hardscaping",
      description: "Expert stone pathways, retaining walls, and elegant outdoor structures that stand the test of time.",
      image: hardscaping,
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Lawn Maintenance",
      description: "Keep your lawn pristine year-round with our comprehensive maintenance programs tailored to your needs.",
      image: lawnMaintenance,
    },
    {
      icon: <Droplet className="w-12 h-12 text-primary" />,
      title: "Water Features",
      description: "Create a serene atmosphere with custom fountains, ponds, and cascading water elements.",
      image: waterFeatures,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful Kashmir-inspired landscaped garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6">
            Bringing Paradise to Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8">
            Premium landscaping services inspired by the timeless beauty of Kashmir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get a Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Paradise Kashmir Landscaping?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            With years of expertise and a passion for creating stunning outdoor spaces, we bring the essence
            of Kashmir's natural beauty to every project. Our commitment to quality craftsmanship,
            sustainable practices, and personalized service sets us apart.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to maintenance, we offer comprehensive landscaping solutions tailored to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's create your dream landscape together. Contact us today for a free consultation.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
