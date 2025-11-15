import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "10 Essential Spring Landscaping Tips for Your Garden",
      excerpt:
        "Prepare your garden for the spring season with these expert tips on soil preparation, plant selection, and seasonal care routines that will ensure a vibrant outdoor space.",
      category: "Seasonal Care",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "The Art of Kashmir-Inspired Garden Design",
      excerpt:
        "Discover how to incorporate the timeless beauty of Kashmiri gardens into your landscape design, featuring terraced layouts, water features, and traditional plant selections.",
      category: "Design Trends",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Sustainable Landscaping: Eco-Friendly Practices for Your Yard",
      excerpt:
        "Learn how to create a beautiful landscape while minimizing environmental impact through water conservation, native plants, and organic maintenance practices.",
      category: "Sustainability",
      date: "March 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Choosing the Right Plants for Your Climate",
      excerpt:
        "A comprehensive guide to selecting plants that will thrive in your specific climate zone, ensuring long-term success and reduced maintenance requirements.",
      category: "Plant Guide",
      date: "February 28, 2024",
      readTime: "8 min read",
    },
    {
      title: "Hardscaping 101: Materials, Design, and Installation",
      excerpt:
        "Everything you need to know about hardscaping elements including stone pathways, patios, retaining walls, and how they enhance both beauty and functionality.",
      category: "Hardscaping",
      date: "February 20, 2024",
      readTime: "10 min read",
    },
    {
      title: "Seasonal Maintenance Checklist: Year-Round Landscape Care",
      excerpt:
        "Stay on top of your landscape maintenance with this comprehensive seasonal checklist covering spring, summer, fall, and winter care requirements.",
      category: "Maintenance",
      date: "February 15, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Landscaping Resources & Tips
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert advice, design inspiration, and practical guides for creating and maintaining your perfect
            outdoor space
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <Badge className="w-fit mb-3" variant="secondary">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Garden Design",
              "Seasonal Care",
              "Sustainable Practices",
              "Plant Selection",
              "Hardscaping",
              "Water Features",
              "Lawn Maintenance",
              "Landscaping Trends",
            ].map((topic, index) => (
              <Badge key={index} variant="outline" className="text-base px-6 py-2">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest landscaping tips, design inspiration, and seasonal care
            advice delivered to your inbox.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
