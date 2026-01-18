import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-ananta-bg py-20 border-t border-ananta-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">Let's Build Presence</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
                    <a href="mailto:kavisharatnayaka@gmail.com" className="flex items-center text-gray-300 hover:text-ananta-gold transition-colors group">
                        <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-lg">kavisharatnayaka@gmail.com</span>
                    </a>
                    <a href="tel:+94777339119" className="flex items-center text-gray-300 hover:text-ananta-gold transition-colors group">
                        <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-lg">+94 77 733 9119</span>
                    </a>
                    <a href="https://instagram.com/ananta.ig" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-ananta-gold transition-colors group">
                        <Instagram className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-lg">@ananta.ig</span>
                    </a>
                </div>

                <div className="text-gray-600 text-sm font-light">
                    <p>&copy; {new Date().getFullYear()} Ananta. All rights reserved.</p>
                    <p className="mt-2">Colombo, Sri Lanka</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
