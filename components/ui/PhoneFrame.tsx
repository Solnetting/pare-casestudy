import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label?: string;
}

export default function PhoneFrame({ children, label }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {/* Frame */}
      <div
        className="frame-shadow"
        style={{
          width: 210,
          height: 434,
          borderRadius: 38,
          background: "#14202E",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 74,
            height: 22,
            borderRadius: 12,
            background: "#14202E",
            zIndex: 10,
          }}
        />
        {/* Screen */}
        <div
          style={{
            position: "absolute",
            inset: 3,
            borderRadius: 35,
            background: "white",
            overflow: "hidden",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px 6px",
            }}
          >
            <span style={{ fontFamily: "var(--font-inter-var)", fontSize: 9, fontWeight: 600, color: "#1B2B4B" }}>9:41</span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                <rect x="0" y="2.5" width="1.5" height="5.5" rx="0.5" fill="#1B2B4B" opacity="0.4"/>
                <rect x="2.5" y="1.5" width="1.5" height="6.5" rx="0.5" fill="#1B2B4B" opacity="0.6"/>
                <rect x="5" y="0" width="1.5" height="8" rx="0.5" fill="#1B2B4B"/>
                <rect x="7.5" y="0" width="1.5" height="8" rx="0.5" fill="#1B2B4B"/>
              </svg>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
                <rect x="0.5" y="0.5" width="10.5" height="7" rx="1.5" stroke="#1B2B4B" strokeWidth="0.8"/>
                <rect x="11.5" y="2.5" width="1" height="3" rx="0.5" fill="#1B2B4B"/>
                <rect x="2" y="2" width="7" height="4" rx="0.5" fill="#1B2B4B"/>
              </svg>
            </div>
          </div>

          {/* Screen content */}
          <div style={{ position: "relative", height: "calc(100% - 32px)", overflow: "hidden" }}>
            {children}
          </div>
        </div>
      </div>

      {label && (
        <span
          style={{
            fontFamily: "var(--font-inter-var)",
            fontSize: 11,
            fontWeight: 400,
            color: "var(--color-muted)",
            letterSpacing: "0.02em",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
