import { MapPin } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/Olpe+-+Colch%C3%B5es+e+Sof%C3%A1s/@-7.2013099,-48.21995,17z/data=!4m15!1m8!3m7!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!2sOlpe+-+Colch%C3%B5es+e+Sof%C3%A1s!8m2!3d-7.2013099!4d-48.21995!10e1!16s%2Fg%2F11wfpnvvwl!3m5!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!8m2!3d-7.2013099!4d-48.21995!16s%2Fg%2F11wfpnvvwl?hl=en-BR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

const TopBar = () => {
  return (
    <>
      <style>{`
        @keyframes map-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(200,170,119,0.45); }
          70%  { box-shadow: 0 0 0 6px rgba(200,170,119,0); }
          100% { box-shadow: 0 0 0 0 rgba(200,170,119,0); }
        }

        .btn-como-chegar {
          animation: map-pulse 2.6s ease-out infinite;
        }
      `}</style>

      <div
        className="fixed left-0 top-0 z-50 w-full text-xs"
        style={{
          backgroundColor: "rgba(13, 79, 122, 0.96)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
        }}
      >
        <div className="container mx-auto flex h-[46px] items-center justify-between gap-2 px-4 md:h-[58px] md:px-6">
          {/* COMO CHEGAR */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-como-chegar inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 hover:scale-[1.02] md:px-5 md:py-2 md:text-sm"
            style={{
              backgroundColor: "rgba(248,247,243,0.90)",
              color: "#0D4F7A",
              boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
            }}
          >
            <MapPin size={12} className="text-[#0D4F7A]" />
            Como chegar
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5563991217070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex whitespace-nowrap rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 hover:scale-[1.02] md:px-5 md:py-2 md:text-sm"
            style={{
              backgroundColor: "rgba(248,247,243,0.96)",
              color: "#0D4F7A",
              boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default TopBar;
