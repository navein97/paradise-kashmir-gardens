import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import gardenDesign from "@/assets/service-garden-design.jpg";
import hardscaping from "@/assets/service-hardscaping.jpg";
import lawnMaintenance from "@/assets/service-lawn-maintenance.jpg";
import waterFeatures from "@/assets/service-water-features.jpg";

const Services = () => {
  const services = [
    {
      title: "Garden Design & Installation",
      description:
        "Create your dream garden with our bespoke design services. We blend Kashmir-inspired aesthetics with functional layouts to transform your outdoor space into a personal paradise.",
      image: gardenDesign,
      features: [
        "Custom design consultation",
        "3D visualization and planning",
        "Plant selection and placement",
        "Seasonal color planning",
        "Sustainable landscaping options",
        "Complete installation services",
      ],
    },
    {
      title: "Hardscaping & Outdoor Structures",
      description:
        "Enhance your property with elegant stone pathways, retaining walls, patios, and outdoor living spaces that combine beauty with lasting durability.",
      image: hardscaping,
      features: [
        "Stone pathways and walkways",
        "Retaining walls and terracing",
        "Patio and deck construction",
        "Outdoor kitchen installations",
        "Fire pits and seating areas",
        "Pergolas and arbors",
      ],
    },
    {
      title: "Lawn Care & Maintenance",
      description:
        "Keep your lawn looking pristine year-round with our comprehensive maintenance programs tailored to your property's unique needs and seasonal requirements.",
      image: lawnMaintenance,
      features: [
        "Regular mowing and edging",
        "Fertilization programs",
        "Weed and pest control",
        "Aeration and overseeding",
        "Seasonal cleanup services",
        "Irrigation system management",
      ],
    },
    {
      title: "Water Features & Irrigation",
      description:
        "Add tranquility and elegance to your landscape with custom water features and efficient irrigation systems that keep your plants thriving.",
      image: waterFeatures,
      features: [
        "Custom fountain design",
        "Pond construction and maintenance",
        "Waterfall installations",
        "Automated irrigation systems",
        "Drip irrigation for gardens",
        "Smart water management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive landscaping solutions tailored to create your perfect outdoor space
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <Card className="h-full border-2 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-3xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Seasonal Planting</h3>
                <p className="text-muted-foreground text-sm">
                  Keep your landscape vibrant year-round with seasonal flower and plant installations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Landscape Lighting</h3>
                <p className="text-muted-foreground text-sm">
                  Enhance safety and beauty with professionally designed outdoor lighting systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Consultation Services</h3>
                <p className="text-muted-foreground text-sm">
                  Expert advice and planning for DIY projects or long-term landscape development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your landscaping needs and create a customized plan for your property.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
