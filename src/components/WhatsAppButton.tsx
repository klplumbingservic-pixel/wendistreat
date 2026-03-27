import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2348000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

export default WhatsAppButton;
