const WHATSAPP_NUMBER = "5563991217070";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo catálogo e quero saber mais sobre os produtos.");

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <>
      {/* Pulse ring */}
      <span
        className="pointer-events-none fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full"
        aria-hidden="true"
        style={{
          background: "rgba(37,211,102,0.25)",
          animation: "whatsapp-pulse 2.4s ease-out infinite",
        }}
      />

      {/* Botão */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Ícone WhatsApp SVG nativo — sem dependência externa */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.648 4.833 1.78 6.87L2 30l7.34-1.742A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.594l-.418-.248-4.355 1.034 1.062-4.24-.272-.435A11.46 11.46 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.617c-.345-.172-2.04-1.006-2.355-1.12-.316-.115-.546-.172-.776.172-.23.345-.89 1.12-1.09 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.773-1.712-1.025-.914-1.716-2.043-1.917-2.388-.2-.345-.021-.531.15-.703.155-.155.345-.4.518-.6.172-.2.23-.345.345-.575.115-.23.057-.43-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.672-.564-.581-.776-.592l-.66-.011c-.23 0-.603.086-.918.43-.316.345-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.708 5.882 5.199.823.355 1.464.567 1.965.726.826.263 1.578.226 2.172.137.663-.099 2.04-.833 2.327-1.637.287-.804.287-1.493.2-1.637-.086-.143-.316-.23-.66-.4z" />
        </svg>
      </a>

      {/* Keyframe inline */}
      <style>{`
        @keyframes whatsapp-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.9); opacity: 0;   }
          100% { transform: scale(1.9); opacity: 0;   }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
