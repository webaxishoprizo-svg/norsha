import { Layout } from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormValues, useSubmitContact } from "@/hooks/use-contact";

export default function Contact() {
  const { toast } = useToast();
  const { mutate: submitContact, isPending } = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitContact(data, {
      onSuccess: (res) => {
        toast({
          title: "Message Sent",
          description: res.message,
        });
        form.reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      },
    });
  };

  const h1Text = "Get in Touch".split(" ");

  const formContainerVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15,
        staggerChildren: 0.05,
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-[#040812] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
          >
            Connect with our team to discuss partnerships, investments, or inquiries regarding our portfolio companies.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Contact Info Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-2 bg-[#0d1b2a] rounded-3xl p-10 md:p-12 text-white shadow-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-display font-bold mb-8">Contact Information</h3>
                <p className="text-white/60 mb-12 text-lg leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div className="pt-2">
                      <a href="mailto:norshaprivatelimited@gmail.com" className="text-lg text-white hover:text-[#2563EB] transition-colors break-all">
                        norshaprivatelimited@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div className="pt-2">
                      <p className="text-lg text-white leading-relaxed">
                        Door No:5/52 Kodibail,<br />
                        Mangalpady Gram Panchayth,<br />
                        Uppala, Kasargod- 671322,<br />
                        Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden shrink-0"
                    style={{
                      backgroundImage: "url('/norsha-logo.jpg')",
                      backgroundSize: "auto 100%",
                      backgroundPosition: "left center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <span className="font-display font-bold tracking-tight">Norsha Pvt. Ltd.</span>
                </div>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div 
              variants={formContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3 bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-black/5"
            >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={fieldVariants} className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold text-[#040812] uppercase tracking-wide">Your Name</label>
                    <input
                      {...form.register("name")}
                      id="name"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 focus:scale-[1.02] transition-all text-[#040812] text-lg"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500 font-medium">{form.formState.errors.name.message}</p>
                    )}
                  </motion.div>

                  <motion.div variants={fieldVariants} className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold text-[#040812] uppercase tracking-wide">Email Address</label>
                    <input
                      {...form.register("email")}
                      id="email"
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 focus:scale-[1.02] transition-all text-[#040812] text-lg"
                      placeholder="john@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500 font-medium">{form.formState.errors.email.message}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={fieldVariants} className="space-y-3">
                  <label htmlFor="subject" className="text-sm font-semibold text-[#040812] uppercase tracking-wide">Subject</label>
                  <input
                    {...form.register("subject")}
                    id="subject"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 focus:scale-[1.02] transition-all text-[#040812] text-lg"
                    placeholder="How can we help?"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-sm text-red-500 font-medium">{form.formState.errors.subject.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-3">
                  <label htmlFor="message" className="text-sm font-semibold text-[#040812] uppercase tracking-wide">Message</label>
                  <textarea
                    {...form.register("message")}
                    id="message"
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 focus:scale-[1.02] transition-all text-[#040812] text-lg resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500 font-medium">{form.formState.errors.message.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fieldVariants} className="pt-4">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full md:w-auto px-10 py-5 rounded-[6px] bg-[#3333CC] text-white font-bold shadow-lg shadow-[#3333CC]/25 hover:bg-[#2828B8] hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-4 md:mt-6 text-center md:text-left">We'll respond within 24 hours.</p>
                </motion.div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}