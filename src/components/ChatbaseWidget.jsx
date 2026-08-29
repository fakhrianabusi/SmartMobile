import { useEffect } from "react";

// Chatbase bot ID — the script tag is appended with this as its id,
// so we can also use it to detect whether the widget already exists.
const CHATBASE_SCRIPT_ID = "g4ISMudmynJDc6L4AMLxr";
const CHATBASE_EMBED_SRC = "https://www.chatbase.co/embed.min.js";
const CHATBASE_DOMAIN = "www.chatbase.co";

/**
 * Module-level guard: ensures the widget bootstrap runs only once,
 * no matter how many times the component mounts or re-renders
 * (React StrictMode intentionally double-invokes effects in dev).
 */
let isChatbaseLoaded = false;

/**
 * ChatbaseWidget — embeds the Chatbase chatbot as a floating bubble
 * at the bottom-right of the page. Renders nothing itself.
 * Mount it exactly once, near the root of the app (App.jsx).
 */
export default function ChatbaseWidget() {
  useEffect(() => {
    // Already bootstrapped earlier in this session — do nothing.
    if (isChatbaseLoaded) return;

    // Safety net: if the embed script is already in the DOM (e.g. added
    // by another integration or a previous mount), don't inject again.
    if (document.getElementById(CHATBASE_SCRIPT_ID)) {
      isChatbaseLoaded = true;
      return;
    }

    // --- Official Chatbase embed snippet (unchanged) ---
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...arguments_) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(arguments_);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = CHATBASE_EMBED_SRC;
      script.id = CHATBASE_SCRIPT_ID;
      script.domain = CHATBASE_DOMAIN;
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    // --- End official Chatbase snippet ---

    isChatbaseLoaded = true;

    // Intentionally no cleanup: the chatbot should persist for the whole
    // session. Removing it on unmount would kill the widget on re-renders.
    // (Script is injected into document.body, outside React's tree.)
  }, []);

  // The widget renders its own floating UI — this component has no visual output.
  return null;
}
