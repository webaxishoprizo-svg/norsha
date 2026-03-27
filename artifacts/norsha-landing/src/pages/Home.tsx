import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Mic, TrendingUp, ChevronRight } from "lucide-react";

const companies = [
  {
    id: "nexusq",
    name: "NexusQ",
    description: "The next-generation headless ecommerce platform empowering modern retail brands to scale without limits.",
    url: "https://nexusq.in",
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    color: "bg-blue-50",
  },
  {
    id: "flowlith",
    name: "Flowlith",
    description: "Iris voice agent AI. Revolutionizing customer interactions with hyper-realistic conversational artificial intelligence.",
    url: "https://flowlith.com",
    icon: <Mic className="w-8 h-8 text-indigo-500" />,
    color: "bg-indigo-50",
  },
  {
    id: "nakmedia",
    name: "NakMedia",
    description: "Data-driven digital marketing agency helping brands dominate their market through precise execution.",
    url: "https://nakmedia.co",
    icon: <TrendingUp className="w-8 h-8 text-teal-500" />,
    color: "bg-teal-50",
  }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              Welcome to Norsha Pvt. Ltd.
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-[1.1]">
              Empowering the Future <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                Through Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We build, incubate, and scale technology companies that define the next generation of digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#companies" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Companies
              </a>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-foreground border border-gray-200 font-semibold shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the innovative brands under the Norsha umbrella, each leading the way in their respective industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${company.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {company.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{company.name}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {company.description}
                </p>
                <a 
                  href={company.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Visit Website <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                {/* using stock image for corporate lifestyle */}
                {/* corporate office modern clean bright */}
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop" 
                  alt="Corporate Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="font-display font-bold text-5xl text-primary mb-1">3+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Industry Leaders</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Building The Future of Digital Business</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Norsha Pvt. Ltd., we don't just invest in companies; we actively build and scale them. Our ecosystem is designed to create synergistic value across e-commerce, artificial intelligence, and digital marketing.
              </p>
              <ul className="space-y-4 mb-8">
                {['Innovation-First Approach', 'Sustainable Growth Strategies', 'Industry-Leading Technology'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-md"
              >
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're looking for headless ecommerce, voice AI, or digital marketing solutions, our companies have you covered.
          </p>
          <Link 
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
