import { Layout } from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";
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
          title: "Success",
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

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-white relative">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 rounded-bl-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Whether you have a question about our companies, partnerships, or just want to say hi, we're here for you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Our Office</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        123 Innovation Drive<br />
                        Tech Park, TP 45678<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email Us</p>
                      <a href="mailto:hello@norsha.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        hello@norsha.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Call Us</p>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-gray-100">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                      <input
                        {...form.register("name")}
                        id="name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground"
                        placeholder="John Doe"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                      <input
                        {...form.register("email")}
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground"
                        placeholder="john@example.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <input
                      {...form.register("subject")}
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground"
                      placeholder="How can we help?"
                    />
                    {form.formState.errors.subject && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      {...form.register("message")}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
