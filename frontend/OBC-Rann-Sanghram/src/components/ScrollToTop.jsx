import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "12px 16px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "#f57c00",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer"
      }}
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
