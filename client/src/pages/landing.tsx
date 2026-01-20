import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "@assets/Gemini_Generated_Image_nr0s97nr0s97nr0s_1768938358986.png";
import logoImage from "@assets/axis_labs_logo_1768937979291.png";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-hidden relative selection:bg-primary/20 selection:text-primary">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

      {/* Navigation */}
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoImage} alt="Axis Labs Ltd" className="h-10 w-auto" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:block"
        >
          <a href="mailto:hello@axislabs.co.uk" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact Us
          </a>
        </motion.div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 py-12 lg:py-0">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Under Construction
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Building the <br />
            <span className="text-primary">Future</span> of Tech.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
            We are engineering the next generation of digital solutions. 
            Something extraordinary is in the works at Axis Labs.
          </p>

          {/* <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-muted/50 border border-transparent focus:border-primary/50 focus:bg-background focus:outline-hidden transition-all placeholder:text-muted-foreground/70"
                data-testid="input-email"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="h-12 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80 disabled:cursor-default"
              data-testid="button-notify"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Notified</span>
                </>
              ) : (
                <>
                  <span>Notify Me</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form> */}

          <div className="mt-12 flex items-center gap-8 text-muted-foreground/50 grayscale hover:grayscale-0 transition-all duration-500 opacity-60">
             {/* Tech badges or similar placeholder logos could go here */}
          </div>
        </motion.div>

        {/* 3D Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-xl relative"
        >
          <div className="relative aspect-square">
            {/* Blob behind image */}
            <div className="absolute inset-4 bg-primary/10 rounded-full blur-2xl -z-10" />
            
            <img 
              src={heroImage} 
              alt="Engineers building interface" 
              className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            {/* Floating UI Elements (Decorative) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-border hidden md:block"
            >
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                <div className="w-24 h-2 bg-muted rounded-full" />
                <div className="w-16 h-2 bg-muted/60 rounded-full" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white p-3 rounded-xl shadow-lg border border-border flex items-center gap-3 hidden md:flex"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <div className="w-20 h-2 bg-muted rounded-full mb-1" />
                <div className="w-12 h-2 bg-muted/60 rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center md:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Axis Labs Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
