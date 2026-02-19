import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0A2463] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="font-semibold text-xl text-[#0A2463]">Vedronix</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              AI-powered calling automation platform by Vereda Digital Technologies
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-[#0A2463] mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-gray-600 hover:text-[#0A2463] transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-gray-600 hover:text-[#0A2463] transition-colors">Use Cases</a></li>
              <li><a href="#integrations" className="text-gray-600 hover:text-[#0A2463] transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-[#0A2463] transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#0A2463] mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#0A2463] mb-4">Company</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0A2463] transition-colors">Contact</a></li>
            </ul>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sales@vedronix.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2026 Vereda Digital Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#0A2463] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0A2463] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#0A2463] transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
