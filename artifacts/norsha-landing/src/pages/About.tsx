import { Layout } from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Lightbulb, Shield, Zap, Crosshair, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";

export default function About() {
  const h1Text = "About Norsha".split(" ");

  // Parallax refs
  const nexusQRef = useRef(null);
  const flowlithRef = useRef(null);
  const nakMediaRef = useRef(null);

  const { scrollYProgress: sqY1 } = useScroll({ target: nexusQRef, offset: ["start end", "end start"] });
  const sqY1Trans = useTransform(sqY1, [0, 1], [-30, 30]);

  const { scrollYProgress: sqY2 } = useScroll({ target: flowlithRef, offset: ["start end", "end start"] });
  const sqY2Trans = useTransform(sqY2, [0, 1], [-30, 30]);

  const { scrollYProgress: sqY3 } = useScroll({ target: nakMediaRef, offset: ["start end", "end start"] });
  const sqY3Trans = useTransform(sqY3, [0, 1], [-30, 30]);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-32 bg-gradient-to-b from-[#040812] to-[#0a1628] relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen animate-float" style={{ animationDuration: '8s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight flex flex-wrap justify-center gap-x-[0.25em]">
            {h1Text.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: h1Text.length * 0.08 + 0.1 }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
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
          <div ref={nexusQRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-sm font-semibold tracking-wide uppercase mb-6">Headless Shopify Specialists</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#040812]">NexusQ</h3>
              <p className="text-base text-[#2563EB] font-medium mb-6 italic">"Engineered for Performance"</p>
              <p className="text-xl text-gray-500 leading-relaxed mb-6">
                NexusQ builds elite React storefronts using Shopify Hydrogen and Next.js — engineered for sub-second speed and conversion-driven growth. From D2C skincare to luxury streetwear, every build delivers measurable results.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-[#f7f9ff] rounded-2xl border border-blue-50">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-[#040812]">0.8s</div>
                  <div className="text-xs text-gray-500 mt-1">Avg Load Time</div>
                </div>
                <div className="text-center border-x border-blue-100">
                  <div className="text-2xl font-display font-bold text-[#040812]">100/100</div>
                  <div className="text-xs text-gray-500 mt-1">Lighthouse Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-[#040812]">250%+</div>
                  <div className="text-xs text-gray-500 mt-1">Conversion Lift</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2 font-medium uppercase tracking-wider">Services</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Hydrogen & Oxygen", "Next.js Headless", "Shopify Mobile Apps"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-sm font-medium">{s}</span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-2 font-medium uppercase tracking-wider">Recent Work</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { name: "Bluu Skincare", stat: "+145% Conv." },
                  { name: "The Maze", stat: "+180% Sales" },
                  { name: "Imamom", stat: "+115% Retention" },
                ].map((p) => (
                  <span key={p.name} className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm">
                    {p.name} <span className="text-[#2563EB] font-semibold">{p.stat}</span>
                  </span>
                ))}
              </div>
              <a href="https://nexusq.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-lg hover:gap-3 transition-all">
                Explore NexusQ <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div style={{ y: sqY1Trans }} className="w-full h-[120%] -top-[10%] absolute">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Ecommerce Analytics" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>

          {/* Flowlith */}
          <div ref={flowlithRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div style={{ y: sqY2Trans }} className="w-full h-[120%] -top-[10%] absolute">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="Artificial Intelligence" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-6">Iris Voice Agent AI</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#040812]">Flowlith</h3>
              <p className="text-base text-indigo-500 font-medium mb-6 italic">"Meet Iris — Your AI Agent"</p>
              <p className="text-xl text-gray-500 leading-relaxed mb-6">
                Flowlith's Iris is an intelligent AI agent built for real-world business automation. From customer support to lead qualification, Iris handles complex conversations with human-like understanding — 24/7, at scale.
              </p>
              <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">What Iris Does</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Customer support automation",
                  "Lead qualification & follow-up",
                  "Human-like voice conversations",
                  "Complex multi-turn interactions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://flowlith.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-lg hover:gap-3 transition-all">
                Explore Flowlith <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* NakMedia */}
          <div ref={nakMediaRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold tracking-wide uppercase mb-6">Dubai · India · Global</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#040812]">NakMedia</h3>
              <p className="text-base text-teal-600 font-medium mb-6 italic">"Production · Digital Marketing · AI Automation"</p>
              <p className="text-xl text-gray-500 leading-relaxed mb-6">
                NakMedia is a full-service agency trusted by forward-thinking brands across Dubai and India. They combine cinematic brand production, data-driven performance marketing, and intelligent AI automation into one powerful growth engine.
              </p>
              <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">Services</p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {[
                  "Social Media Marketing",
                  "Brand Cinematography",
                  "Digital Advertising",
                  "Website & Web Infra",
                  "Lead Automations",
                  "AI Avatar Marketing",
                  "UI/UX Design",
                  "App Development",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-600 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <a href="https://nakmedia.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-600 font-semibold text-lg hover:gap-3 transition-all">
                Explore NakMedia <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div style={{ y: sqY3Trans }} className="w-full h-[120%] -top-[10%] absolute">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Data Analytics" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
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
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -4 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6 text-[#2563EB]">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#040812]">Trust</h3>
              <p className="text-gray-500 leading-relaxed">We build platforms that enterprises rely on. Security, reliability, and transparency are foundational to everything we create.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6 text-[#2563EB]">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#040812]">Innovation</h3>
              <p className="text-gray-500 leading-relaxed">We don't follow trends; we set them. Our companies exist to disrupt legacy systems and introduce superior methodologies.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6 text-[#2563EB]">
                <Crosshair className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#040812]">Precision</h3>
              <p className="text-gray-500 leading-relaxed">Execution is everything. Whether in code, marketing strategy, or AI training, we operate with exacting standards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#2563EB]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Ready to partner with Norsha?</h2>
          <Link href="/contact" className="inline-flex px-8 py-4 rounded-[6px] bg-white text-[#2563EB] font-bold hover:bg-gray-50 transition-colors shadow-lg text-lg">
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}