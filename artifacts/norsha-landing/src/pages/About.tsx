import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Zap, Crosshair, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-32 bg-gradient-to-b from-[#040812] to-[#0a1628] relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            About Norsha
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light"
          >
            A holding company driving structural innovation across ecommerce infrastructure, artificial intelligence, and digital performance.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f0f4ff] p-12 rounded-3xl border border-[#2563EB]/10 shadow-sm"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-3xl font-display font-bold text-[#040812] mb-6">Our Mission</h3>
              <p className="text-[#040812]/70 text-lg leading-relaxed">
                To build and nurture technology-driven companies that solve complex modern business challenges. Through NexusQ, Flowlith, and NakMedia, we provide the tools, intelligence, and visibility businesses need to succeed in a digital-first world.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#f0f4ff] p-12 rounded-3xl border border-[#2563EB]/10 shadow-sm"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Lightbulb className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-3xl font-display font-bold text-[#040812] mb-6">Our Vision</h3>
              <p className="text-[#040812]/70 text-lg leading-relaxed">
                We envision an interconnected digital ecosystem where scalable commerce infrastructure, conversational AI, and performance marketing seamlessly integrate to create unparalleled brand experiences and exponential growth for our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive into Companies - Premium Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* NexusQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-sm font-semibold tracking-wide uppercase mb-6">Commerce Infrastructure</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#040812]">NexusQ</h3>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                NexusQ frees brands from the constraints of traditional monolithic ecommerce platforms. By separating the frontend presentation layer from backend commerce logic, we allow businesses to build blazing fast, highly customized shopping experiences across web, mobile, and IoT.
              </p>
              <a href="https://nexusq.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-lg hover:gap-3 transition-all">
                Explore NexusQ <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Ecommerce Analytics" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Flowlith */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="Artificial Intelligence" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-6">Conversational AI</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#040812]">Flowlith</h3>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Flowlith is pushing the boundaries of conversational AI with 'Iris' - our proprietary voice agent technology. Capable of understanding nuance, sentiment, and context, Iris transforms customer support, sales, and internal operations with human-like voice interactions.
              </p>
              <a href="https://flowlith.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-lg hover:gap-3 transition-all">
                Explore Flowlith <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* NakMedia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold tracking-wide uppercase mb-6">Digital Performance</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#040812]">NakMedia</h3>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                NakMedia acts as the growth engine for ambitious brands. Combining data analytics, creative storytelling, and performance marketing, we architect campaigns that deliver measurable ROI and dominant market positioning.
              </p>
              <a href="https://nakmedia.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-600 font-semibold text-lg hover:gap-3 transition-all">
                Explore NakMedia <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Data Analytics" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#040812] mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">The principles that guide our investments, our development, and our people.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 text-center">
              <div className="w-16 h-16 mx-auto bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6 text-[#2563EB]">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#040812]">Trust</h3>
              <p className="text-gray-500 leading-relaxed">We build platforms that enterprises rely on. Security, reliability, and transparency are foundational to everything we create.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 text-center">
              <div className="w-16 h-16 mx-auto bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6 text-[#2563EB]">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#040812]">Innovation</h3>
              <p className="text-gray-500 leading-relaxed">We don't follow trends; we set them. Our companies exist to disrupt legacy systems and introduce superior methodologies.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 text-center">
              <div className="w-16 h-16 mx-auto bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6 text-[#2563EB]">
                <Crosshair className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#040812]">Precision</h3>
              <p className="text-gray-500 leading-relaxed">Execution is everything. Whether in code, marketing strategy, or AI training, we operate with exacting standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Ready to partner with Norsha?</h2>
          <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-[#2563EB] font-bold hover:bg-gray-50 transition-colors shadow-lg text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
