import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        background: "#000",
        color: "#ededed",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: 700, margin: 0 }}>404</h1>
      <p style={{ color: "#a1a1a1", margin: 0 }}>Page not found</p>
      <Link
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#fff",
          color: "#000",
          borderRadius: "8px",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        Go home
      </Link>
    </div>
  );
}

