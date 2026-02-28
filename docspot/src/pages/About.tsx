import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-background">
            <div className="max-w-3xl text-center space-y-8 animate-fade-in">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <Heart className="w-12 h-12" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                    Wherever the <span className="text-primary italic">art of medicine</span> is loved,
                    there is also a love of <span className="text-primary">humanity</span>.
                </h1>

                <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                    Dedicated to the art of healing and the science of care.
                    Vikas Healthcare is committed to bringing top-tier medical expertise to every household.
                </p>

                <div className="pt-8">
                    <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
                        <Link to="/">Explore Our Doctors</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;
