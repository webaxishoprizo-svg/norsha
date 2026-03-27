import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            About <span className="text-primary">Norsha</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A parent company driving innovation across ecommerce, artificial intelligence, and digital media.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build and nurture technology-driven companies that solve complex modern business challenges. Through NexusQ, Flowlith, and NakMedia, we provide the tools, intelligence, and visibility businesses need to succeed.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-indigo-50/50 p-10 rounded-3xl border border-indigo-100"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision an interconnected digital ecosystem where commerce, conversational AI, and marketing seamlessly integrate to create unparalleled brand experiences and exponential growth for our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive into Companies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Norsha Family</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our subsidiaries operate independently but share a common DNA of excellence and innovation.
            </p>
          </div>

          <div className="space-y-12">
            {/* NexusQ */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">NexusQ</h3>
                <p className="text-lg text-muted-foreground mb-6">Headless Ecommerce Infrastructure</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  NexusQ frees brands from the constraints of traditional monolithic ecommerce platforms. By separating the frontend presentation layer from backend commerce logic, we allow businesses to build blazing fast, highly customized shopping experiences across web, mobile, and IoT.
                </p>
                <a href="https://nexusq.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-50 text-primary font-medium hover:bg-blue-100 transition-colors">
                  Visit NexusQ.in <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gray-100">
                {/* headless ecommerce dashboard UI code interface */}
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="NexusQ Team" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Flowlith */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">Flowlith</h3>
                <p className="text-lg text-muted-foreground mb-6">Iris Voice Agent AI</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Flowlith is pushing the boundaries of conversational AI with 'Iris' - our proprietary voice agent technology. Capable of understanding nuance, sentiment, and context, Iris transforms customer support, sales, and internal operations with human-like voice interactions.
                </p>
                <a href="https://flowlith.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-50 text-indigo-600 font-medium hover:bg-indigo-100 transition-colors">
                  Visit Flowlith.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gray-100">
                {/* AI artificial intelligence futuristic data node */}
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop" alt="Flowlith AI" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* NakMedia */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">NakMedia</h3>
                <p className="text-lg text-muted-foreground mb-6">Digital Marketing & Growth</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  NakMedia acts as the growth engine for ambitious brands. Combining data analytics, creative storytelling, and performance marketing, we architect campaigns that deliver measurable ROI and dominant market positioning.
                </p>
                <a href="https://nakmedia.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-50 text-teal-600 font-medium hover:bg-teal-100 transition-colors">
                  Visit NakMedia.co <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gray-100">
                {/* marketing team working data charts */}
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="NakMedia Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
