import { useEffect } from "react";

export default function Trustindex() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?2670c50580008756df7696f02a1";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // ❌ DO NOT REMOVE script on unmount (causes removeChild error)
  }, []);

  return (
    <div className="my-10">
      {/* You must place the widget container Trustindex gave you */}
      <div
        className="ti-widget"
        data-ti-widget-id="6cf59d75896904252626badacf2"
      ></div>
    </div>
  );
}
