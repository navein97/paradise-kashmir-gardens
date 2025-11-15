import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Residential Garden Paradise",
      category: "Residential",
      description:
        "Complete transformation of a front yard into a stunning Kashmir-inspired garden featuring colorful flower beds, stone pathways, and elegant landscaping that enhances curb appeal and property value.",
      image: portfolio1,
      features: ["Custom Garden Design", "Stone Pathways", "Seasonal Planting", "Lawn Renovation"],
    },
    {
      title: "Modern Commercial Landscape",
      category: "Commercial",
      description:
        "Sophisticated commercial property landscaping with geometric hedges, professional outdoor spaces, and low-maintenance design that creates a lasting impression for clients and visitors.",
      image: portfolio2,
      features: ["Modern Design", "Hardscaping", "Corporate Landscaping", "Water-Efficient Systems"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of stunning landscape transformations
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4" variant="secondary">
                      {project.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div>
                      <h3 className="font-semibold mb-3">Project Features:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We meet with you to understand your vision, needs, and budget.",
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates a detailed plan with 3D visualizations.",
              },
              {
                step: "03",
                title: "Installation",
                description: "Expert craftsmen bring your landscape design to life.",
              },
              {
                step: "04",
                title: "Maintenance",
                description: "Ongoing care ensures your landscape remains pristine.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Transformation</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Ready to see your property transformed? Let's create something beautiful together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
