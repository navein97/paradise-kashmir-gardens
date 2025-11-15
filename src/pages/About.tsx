import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Leaf, Users } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Passion for Excellence",
      description: "Every project receives our full dedication and attention to detail, ensuring results that exceed expectations.",
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Quality Craftsmanship",
      description: "We use only the finest materials and proven techniques to create landscapes that endure for generations.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-accent" />,
      title: "Sustainable Practices",
      description: "Our eco-friendly approach protects the environment while creating beautiful, thriving outdoor spaces.",
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Client-Focused Service",
      description: "Your vision guides every decision we make, from initial concept to final installation and beyond.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Paradise Kashmir Landscaping
          </h1>
          <p className="text-xl text-muted-foreground">
            Creating timeless outdoor spaces inspired by nature's masterpiece
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Paradise Kashmir Landscaping LLC was founded with a simple vision: to bring the breathtaking
                  beauty of Kashmir's natural landscapes to outdoor spaces everywhere. Drawing inspiration from
                  the lush gardens, majestic mountains, and serene water features of Kashmir, we've built our
                  reputation on creating stunning, functional landscapes that stand the test of time.
                </p>
                <p>
                  With years of experience and a team of passionate landscaping professionals, we've transformed
                  countless residential and commercial properties into outdoor paradises. Our commitment to
                  quality, sustainability, and personalized service has made us the trusted choice for discerning
                  clients who demand excellence.
                </p>
                <p>
                  Whether you're envisioning a tranquil garden retreat, an elegant outdoor entertainment space,
                  or a complete property transformation, we bring the expertise, creativity, and craftsmanship
                  to make your dreams a reality.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Paradise Kashmir Landscaping team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To transform outdoor spaces into personalized paradises through exceptional design, quality
                  craftsmanship, and sustainable practices. We strive to exceed client expectations by
                  delivering landscapes that enhance property value, promote environmental stewardship, and
                  provide lasting beauty and enjoyment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the premier landscaping company known for creating Kashmir-inspired outdoor spaces that
                  seamlessly blend natural beauty with modern functionality. We envision a world where every
                  property has the potential to become a personal paradise, enriching lives and communities
                  through thoughtful landscape design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expertise & Experience</h3>
              <p className="text-primary-foreground/90">
                Our team brings years of specialized knowledge in landscape design, horticulture, and
                hardscaping, ensuring every project is executed to perfection.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kashmir-Inspired Design</h3>
              <p className="text-primary-foreground/90">
                We draw inspiration from the natural beauty of Kashmir, creating unique landscapes that
                combine timeless elegance with modern functionality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Services</h3>
              <p className="text-primary-foreground/90">
                From initial consultation to ongoing maintenance, we provide end-to-end solutions for all
                your landscaping needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-primary-foreground/90">
                Our portfolio of successful projects and satisfied clients speaks to our commitment to
                excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
