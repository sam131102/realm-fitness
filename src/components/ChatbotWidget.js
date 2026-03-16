import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    const scriptSrc = "https://website-ai-assistant.replit.app/widget.js";

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.dataset.widgetId = "4";
    script.onload = () => {
      console.log("Realm chatbot loaded");
    };
    script.onerror = () => {
      console.error("Failed to load Realm chatbot");
    };

    document.head.appendChild(script);
  }, []);

  return null;
}