import { Phone } from "lucide-react";

export const contactPhone = "+91 83411 46226";
export const callUrl = "tel:+918341146226";
export const whatsappUrl = "https://wa.me/918341146226";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.4-1.7a12 12 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.1-1.2-6.1-3.5-8.3ZM12.1 21.7a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.9 9.9 0 1 1 8.4 4.7Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function ContactActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={callUrl}
        className="bg-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground"
      >
        <Phone size={18} aria-hidden="true" />
        Call us
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#087f49] px-6 py-3 font-semibold text-white hover:bg-[#06673b]"
      >
        <WhatsAppIcon />
        Chat on WhatsApp
      </a>
    </div>
  );
}

export function FloatingContact() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vizag Araku Tourism on WhatsApp"
      className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#087f49] text-white shadow-lg transition hover:scale-105"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
