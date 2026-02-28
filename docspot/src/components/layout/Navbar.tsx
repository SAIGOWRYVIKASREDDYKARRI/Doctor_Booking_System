import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Moon, Sun } from "lucide-react";
import { jwtDecode } from "jwt-decode";

type Role = "doctor" | "patient";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"));

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      if (token) {
        const decoded: any = jwtDecode(token);
        setRole(decoded.role || "patient");
      } else setRole(null);
    } catch {
      localStorage.removeItem("token");
      setRole(null);
    }
  }, [token]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const enabled = document.documentElement.classList.contains("dark");
    setDark(enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const doctorLinks = [
    { path: "/dashboard", label: "Doctor Home" },
    { path: "/settings", label: "Settings" },
  ];

  const patientLinks = [
    { path: "/", label: "Home" },
    { path: "/doctors", label: "Find Doctors" },
    { path: "/doctors", label: "Specialties" },
    { path: "/dashboard", label: "My Appointments" },
    { path: "/about", label: "About Us" },
  ];

  const navLinks = role === "doctor" ? doctorLinks : patientLinks;
  const homePath = role ? "/dashboard" : "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">

        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <span
            onClick={() => navigate(homePath)}
            className="flex flex-col cursor-pointer"
          >
            <span className="font-bold text-2xl tracking-tight text-primary leading-none">HEALTHCARE</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">DOCTOR APPOINTMENT</span>
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10">
            {navLinks.map(link => (
              <span
                key={link.label}
                onClick={() => navigate(link.path)}
                className={`text-base font-medium cursor-pointer transition-colors hover:text-primary ${isActive(link.path) ? "text-primary border-b-2 border-primary" : "text-foreground"
                  }`}
              >
                {link.label}
              </span>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 items-center">

            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {!token ? (
              <>
                <Button size="sm" variant="ghost" onClick={() => navigate("/login")} className="text-base font-medium">
                  Login
                </Button>
                <Button size="lg" onClick={() => navigate("/register")} className="rounded-xl px-8 font-bold bg-primary hover:bg-primary/90">
                  Register
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            )}

          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t animate-in fade-in slide-in-from-top-4 duration-300">

            {navLinks.map(link => (
              <div
                key={link.label}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className="block py-3 text-lg font-medium cursor-pointer"
              >
                {link.label}
              </div>
            ))}

            <Button className="w-full mt-4 h-12 text-lg" variant="outline" onClick={toggleTheme}>
              {dark ? "Light Mode" : "Dark Mode"}
            </Button>

            {!token ? (
              <Button
                className="w-full mt-4 h-12 text-lg font-bold"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/register");
                }}
              >
                Register
              </Button>
            ) : (
              <Button
                className="w-full mt-4 h-12 text-lg"
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
              >
                Logout
              </Button>
            )}

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
