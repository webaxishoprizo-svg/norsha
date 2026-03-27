import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { motion, useScroll, useTransform, useSpring, useInView, animate } from "framer-motion";
import { ArrowRight, ShoppingBag, Mic, TrendingUp, Zap, BarChart3, Headphones, ChevronDown } from "lucide-react";

function CountUp({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [to, duration, inView]);

  return <span ref={nodeRef}>0</span>;
}

function CountUpFrom({ from, to, duration = 1.5 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function Home() {
  const { scrollY } = useScroll();
  const chevronOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const h1Text = "Building Tomorrow's Digital Ecosystem".split(" ");
  const ctaH2Text = "Let's Build Something Great".split(" ");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-[#040812] to-[#0a1628]">
        {/* Floating blue orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#2563EB]/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen animate-float" style={{ animationDuration: '6s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.1),transparent)] bg-[length:200%_100%]" />
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse relative z-10" />
              <span className="relative z-10">Norsha Pvt. Ltd. — Innovation Holding</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[96px] font-display font-bold text-white mb-6 leading-[1.05] tracking-tighter flex flex-wrap justify-center gap-x-[0.25em]">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            >
              We incubate, scale, and lead category-defining companies that shape the future of technology and commerce.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
            >
              <a 
                href="#companies" 
                className="w-full sm:w-auto px-8 py-4 rounded-[6px] bg-[#2563EB] text-white font-medium hover:bg-blue-600 transition-all duration-300 text-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)]"
              >
                Explore Companies
              </a>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-[6px] bg-transparent text-white border border-white/20 hover:bg-white/10 font-medium transition-all duration-300 text-lg backdrop-blur-sm"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          style={{ opacity: chevronOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-[#040812] mb-6 tracking-tight"
            >
              Our Portfolio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xl text-gray-500 max-w-2xl mx-auto"
            >
              Three category-defining companies across ecommerce, AI, and marketing.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NexusQ */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative bg-white border border-black/5 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2563EB]" />
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShoppingBag className="w-8 h-8 text-[#2563EB]" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2 px-2 py-1 bg-blue-50 w-fit rounded-full">Headless Shopify Specialists</div>
              <h3 className="text-3xl font-display font-bold text-[#040812] mb-3">NexusQ</h3>
              <p className="text-gray-500 mb-6 flex-1 leading-relaxed">
                Elite React storefronts engineered for sub-second speed and conversion-driven growth. Hydrogen, Next.js, and Shopify Mobile — built for brands that demand performance.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8 py-4 border-t border-b border-black/5">
                <div className="text-center">
                  <div className="text-xl font-display font-bold text-[#040812]">0.8s</div>
                  <div className="text-xs text-gray-400 mt-0.5">Avg Load</div>
                </div>
                <div className="text-center border-x border-black/5">
                  <div className="text-xl font-display font-bold text-[#040812]">100</div>
                  <div className="text-xs text-gray-400 mt-0.5">Lighthouse</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-display font-bold text-[#040812]">250%+</div>
                  <div className="text-xs text-gray-400 mt-0.5">Conv. Lift</div>
                </div>
              </div>
              <div className="mt-auto">
                <a 
                  href="https://nexusq.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-start group/link"
                >
                  <span className="flex items-center gap-2 text-[#040812] font-semibold text-lg">
                    Visit Website <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-sm text-gray-400 mt-1">nexusq.in</span>
                </a>
              </div>
            </motion.div>

            {/* Flowlith */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative bg-white border border-black/5 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
              <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mic className="w-8 h-8 text-indigo-500" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2 px-2 py-1 bg-indigo-50 w-fit rounded-full">Iris Voice Agent AI</div>
              <h3 className="text-3xl font-display font-bold text-[#040812] mb-3">Flowlith</h3>
              <p className="text-gray-500 mb-6 flex-1 leading-relaxed">
                Meet Iris — an intelligent AI agent built for real-world business automation. From customer support to lead qualification, Iris handles complex conversations with human-like understanding.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 py-4 border-t border-b border-black/5">
                {[
                  { icon: <Headphones className="w-3.5 h-3.5" />, label: "Customer Support Automation" },
                  { icon: <Zap className="w-3.5 h-3.5" />, label: "Lead Qualification" },
                  { icon: <Mic className="w-3.5 h-3.5" />, label: "Human-like Voice Conversations" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-indigo-400">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <a 
                  href="https://flowlith.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-start group/link"
                >
                  <span className="flex items-center gap-2 text-[#040812] font-semibold text-lg">
                    Visit Website <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-sm text-gray-400 mt-1">flowlith.com</span>
                </a>
              </div>
            </motion.div>

            {/* NakMedia */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative bg-white border border-black/5 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500" />
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-8 h-8 text-teal-500" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-500 mb-2 px-2 py-1 bg-teal-50 w-fit rounded-full">Production · Marketing · Branding</div>
              <h3 className="text-3xl font-display font-bold text-[#040812] mb-3">NakMedia</h3>
              <p className="text-gray-500 mb-6 flex-1 leading-relaxed">
                Dubai & India-based agency covering social media marketing, brand cinematography, digital advertising, web infrastructure, and AI automation — all under one roof.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8 py-4 border-t border-b border-black/5">
                {["Social Media", "Cinematography", "Digital Ads", "AI Automation", "Web Infra", "UI/UX Design"].map((s) => (
                  <div key={s} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <BarChart3 className="w-3 h-3 text-teal-400 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <a 
                  href="https://nakmedia.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-start group/link"
                >
                  <span className="flex items-center gap-2 text-[#040812] font-semibold text-lg">
                    Visit Website <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-sm text-gray-400 mt-1">nakmedia.co</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Blurb */}
      <section className="py-32 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center">
                <div className="text-6xl font-display font-bold text-[#2563EB] mb-2 tracking-tighter"><CountUp to={3} /></div>
                <div className="text-sm font-semibold uppercase tracking-widest text-gray-500">Companies</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center text-center mt-12">
                <div className="text-6xl font-display font-bold text-[#040812] mb-2 tracking-tighter"><CountUpFrom from={2000} to={2024} /></div>
                <div className="text-sm font-semibold uppercase tracking-widest text-gray-500">Founded</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-[#040812] tracking-tight">Architecting the future of digital business.</h2>
              <div className="prose prose-lg text-gray-500 mb-10">
                <p>
                  At Norsha Pvt. Ltd., we don't just invest in companies; we build ecosystems. We identified the critical intersections of modern commerce—infrastructure, intelligence, and visibility—and built specialized companies to master each domain.
                </p>
                <p>
                  Our vision is a seamlessly interconnected landscape where our technologies empower brands to achieve unprecedented growth and efficiency.
                </p>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 text-[#2563EB] font-semibold text-lg hover:gap-4 transition-all"
              >
                Read Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#040812] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight flex flex-wrap justify-center gap-x-[0.25em]">
            {ctaH2Text.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 20 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Whether you're looking for headless ecommerce, voice AI, or digital marketing solutions, our ecosystem is built to serve your ambition.
          </p>
          <div className="relative inline-block">
            <motion.div 
              className="absolute inset-0 bg-[#2563EB]/40 blur-[60px] rounded-[6px] -z-10"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Link 
              href="/contact"
              className="inline-flex px-10 py-5 rounded-[6px] bg-[#2563EB] text-white font-medium hover:bg-blue-600 transition-all duration-300 text-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] relative z-10"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
