import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0A2463] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <span className="font-semibold text-xl text-[#0A2463]">Vedronix</span>
        </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-[#0A2463] transition-colors">Features</a>
          <a href="#use-cases" className="text-sm hover:text-[#0A2463] transition-colors">Use Cases</a>
          <a href="#integrations" className="text-sm hover:text-[#0A2463] transition-colors">Integrations</a>
          <a href="#pricing" className="text-sm hover:text-[#0A2463] transition-colors">Deployment</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:flex">
            Sign In
          </Button>
         <Link
  to="/ai-agent-demo"
  className=" flex justify-center items-center px-6 py-3 bg-[#0A2463] text-white rounded-lg font-medium hover:bg-[#0A2463]/90 transition duration-200"
>
  Request Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>
        </div>
      </div>
    </header>
  );
}
