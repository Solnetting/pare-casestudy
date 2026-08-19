import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label?: string;
  className?: string;
}

export default function PhoneFrame({ children, label, className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Frame */}
      <div
        className="phone-shadow relative flex-shrink-0 rounded-[2.5rem] bg-pare-navy"
        style={{ width: 200, height: 412 }}
      >
        {/* Dynamic island */}
        <div
          className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-pare-navy rounded-full z-10"
          style={{ width: 72, height: 22 }}
        />
        {/* Screen */}
        <div
          className="absolute inset-[3px] rounded-[2.2rem] bg-white overflow-hidden"
          style={{ top: 3, bottom: 3, left: 3, right: 3 }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-1">
            <span
              className="font-inter text-pare-navy"
              style={{ fontSize: 9, fontWeight: 600 }}
            >
              9:41
            </span>
            <div className="flex items-center gap-1">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <rect x="0" y="2" width="2" height="6" rx="0.5" fill="#1B2B4B" opacity="0.4"/>
                <rect x="3" y="1" width="2" height="7" rx="0.5" fill="#1B2B4B" opacity="0.6"/>
                <rect x="6" y="0" width="2" height="8" rx="0.5" fill="#1B2B4B"/>
                <rect x="9" y="0" width="2" height="8" rx="0.5" fill="#1B2B4B"/>
              </svg>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <rect x="0.5" y="0.5" width="10" height="7" rx="1.5" stroke="#1B2B4B" strokeWidth="1"/>
                <rect x="11" y="2.5" width="1" height="3" rx="0.5" fill="#1B2B4B"/>
                <rect x="2" y="2" width="7" height="4" rx="0.5" fill="#1B2B4B"/>
              </svg>
            </div>
          </div>
          {/* Screen content */}
          <div className="h-full overflow-hidden">{children}</div>
        </div>
      </div>
      {label && (
        <span
          className="text-center font-inter text-pare-subtle"
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.04em" }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
