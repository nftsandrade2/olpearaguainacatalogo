import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "5500000000000"; // placeholder
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
      style={{
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
        boxShadow:
          "0 8px 24px rgba(37, 211, 102, 0.35), 0 0 0 1px rgba(255,255,255,0.1)",
      }}
    >
      <MessageCircle size={26} className="text-white" strokeWidth={2} />
    </a>
  );
};

export default WhatsAppButton;
