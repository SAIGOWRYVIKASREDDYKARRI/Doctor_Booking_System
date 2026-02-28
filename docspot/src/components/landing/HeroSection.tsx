import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero_doctor_new.jpg";

const HeroSection = () => {
  const features = [
    "Verified Doctors",
    "Easy Booking",
    "24/7 Support",
  ];

  return (
    <section className="bg-secondary/50 pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
              Find Your <span className="text-primary italic">Best</span>
              <span className="block mt-2">Doctor Anytime</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              We provide the best medical services for your health. Book an appointment with our professional doctors today.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/doctors">
                <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20">
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-2xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={heroImage}
                alt="Doctor"
                className="w-full h-auto object-cover scale-105 transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce shadow-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Verified Doctors</p>
                  <p className="text-xs text-muted-foreground">Certified Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
