/** Minimal line-style garage AI SVGs — lightweight, no client hooks */

type SvgProps = { className?: string };

export function SvgMechanicAI({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <rect x="40" y="40" width="200" height="140" rx="16" fill="#F8FAFC" stroke="#E5E7EB" />
      <circle cx="140" cy="88" r="24" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1.5" />
      <rect x="108" y="108" width="64" height="48" rx="12" fill="#EDE9FE" />
      <rect x="168" y="118" width="44" height="56" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <line x1="178" y1="132" x2="202" y2="132" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <line x1="178" y1="144" x2="196" y2="144" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      <path d="M80 168 H200" stroke="#E5E7EB" strokeWidth="1.5" />
    </svg>
  );
}

export function SvgDashboard({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <rect x="50" y="45" width="180" height="130" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="50" y="45" width="180" height="32" rx="12" fill="#EDE9FE" />
      <rect x="70" y="95" width="28" height="60" rx="4" fill="#8B5CF6" opacity="0.35" />
      <rect x="108" y="110" width="28" height="45" rx="4" fill="#8B5CF6" opacity="0.5" />
      <rect x="146" y="88" width="28" height="67" rx="4" fill="#8B5CF6" opacity="0.7" />
      <rect x="184" y="102" width="28" height="53" rx="4" fill="#8B5CF6" />
      <circle cx="200" cy="58" r="6" fill="#8B5CF6" />
    </svg>
  );
}

export function SvgInvoice({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <rect x="70" y="40" width="140" height="150" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <line x1="90" y1="70" x2="190" y2="70" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <line x1="90" y1="90" x2="170" y2="90" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="90" y1="108" x2="160" y2="108" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      <rect x="90" y="140" width="100" height="32" rx="8" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1" />
      <path d="M165 156 L175 166 L155 166 Z" fill="#8B5CF6" />
    </svg>
  );
}

export function SvgCustomerAI({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <circle cx="140" cy="100" r="50" fill="#F8FAFC" stroke="#E5E7EB" />
      <circle cx="140" cy="88" r="18" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M110 130 Q140 155 170 130" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1.5" />
      <rect x="185" y="75" width="50" height="70" rx="8" fill="white" stroke="#E5E7EB" />
      <circle cx="210" cy="95" r="8" fill="#8B5CF6" opacity="0.4" />
      <line x1="198" y1="115" x2="222" y2="115" stroke="#D1D5DB" strokeWidth="2" />
    </svg>
  );
}

export function SvgWorkshop({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <path d="M60 160 H220 V100 L140 55 L60 100 Z" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="115" y="120" width="50" height="40" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
      <circle cx="95" cy="160" r="14" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <circle cx="185" cy="160" r="14" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    </svg>
  );
}

export function SvgInventory({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <rect x="55" y="50" width="170" height="120" rx="10" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1.5" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={68 + c * 50}
            y={62 + r * 34}
            width={38}
            height={24}
            rx="4"
            fill={r === 1 && c === 2 ? "#EDE9FE" : "white"}
            stroke="#E5E7EB"
          />
        ))
      )}
      <text x="200" y="68" fill="#8B5CF6" fontSize="11" fontWeight="600">
        AI
      </text>
    </svg>
  );
}

export function SvgAnalytics({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 280 220" fill="none" className={className} aria-hidden>
      <rect x="50" y="50" width="180" height="120" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <path
        d="M75 140 L110 110 L145 125 L180 85 L205 100"
        stroke="#8B5CF6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="110" cy="110" r="4" fill="#8B5CF6" />
      <circle cx="180" cy="85" r="4" fill="#8B5CF6" />
    </svg>
  );
}
