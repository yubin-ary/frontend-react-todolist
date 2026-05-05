import ParticleBackground from "./ParticleBackground";

const styles = {
  wrapper: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  content: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "0 24px",
  },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(138,43,226,0.5)",
    background: "rgba(138,43,226,0.12)",
    color: "#c084fc",
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "28px",
  },
  title: {
    fontSize: "clamp(2.4rem, 6vw, 5rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    margin: "0 0 24px",
    background: "linear-gradient(135deg, #e879f9 0%, #818cf8 40%, #22d3ee 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "rgba(200,200,230,0.7)",
    maxWidth: "520px",
    margin: "0 auto 40px",
    lineHeight: 1.65,
  },
  btnRow: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "14px 32px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 700,
    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
    color: "#fff",
    boxShadow: "0 0 28px rgba(124,58,237,0.45)",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
  btnSecondary: {
    padding: "14px 32px",
    borderRadius: "10px",
    border: "1px solid rgba(138,43,226,0.4)",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
    background: "rgba(255,255,255,0.04)",
    color: "rgba(200,200,230,0.85)",
    backdropFilter: "blur(8px)",
    transition: "transform 0.15s, border-color 0.15s",
  },
};

export default function HeroSection() {
  return (
    <div style={styles.wrapper}>
      <ParticleBackground />
      <div style={styles.content}>
        <div style={styles.badge}>New — v2.0 just shipped</div>
        <h1 style={styles.title}>
          Build things that<br />feel alive
        </h1>
        <p style={styles.subtitle}>
          A modern toolkit for teams who care about craft.
          Fluid interactions, zero compromises.
        </p>
        <div style={styles.btnRow}>
          <button style={styles.btnPrimary}>Get started free</button>
          <button style={styles.btnSecondary}>See the docs</button>
        </div>
      </div>
    </div>
  );
}
