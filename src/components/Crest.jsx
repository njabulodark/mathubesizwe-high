export function Crest({ size = 46, light = false }) {
  const shield = light ? "#ffffff" : "#0b2a5f";
  const accent = light ? "#0b2a5f" : "#7fb2ff";
  const field = light ? "#0b2a5f" : "#ffffff";
  return (
    <span className="crest" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Mathubesizwe High School crest"
      >
        {/* shield */}
        <path
          d="M32 3.5 54 9v16.5c0 10.9-8.8 16.5-22 21-13.2-4.5-22-10.1-22-21V9z"
          fill={shield}
          stroke={field}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M32 7.2 50.6 11.5V25c0 9.3-7.6 14.3-18.6 18.3C21 39.3 13.4 34.3 13.4 25V11.5z"
          fill="none"
          stroke={accent}
          strokeWidth="1"
        />
        {/* M · S */}
        <text
          x="12.5"
          y="22"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="12.5"
          fontWeight="700"
          fill={field}
        >
          M
        </text>
        <text
          x="44.5"
          y="22"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="12.5"
          fontWeight="700"
          fill={field}
        >
          S
        </text>
        {/* tree */}
        <path
          d="M32 25.6v-5.4"
          stroke={field}
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M32 23.4 28.2 20.4M32 23.4l3.8-3"
          stroke={field}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M24 21.3c0-3.9 3.6-6.3 8-6.3s8 2.4 8 6.3c0 1.4-1.3 1.7-2.6 1.1-.9 1.3-2.9 1.4-3.8.2-.8-1-1.6-1-2.4 0-.9 1.2-2.9 1.1-3.8-.2-1.3.6-2.6.3-2.6-1.1z"
          fill={field}
        />
        {/* open book with cross */}
        <path
          d="M23 32.6c3.2-2.3 6.9-2.3 9 0 2.1-2.3 5.8-2.3 9 0v6.1c-3.2-2.2-6.9-2.2-9 .2-2.1-2.4-5.8-2.4-9-.2z"
          fill={field}
        />
        <path
          d="M32 33.7v5.4M29.3 35.6h5.4"
          stroke={shield}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        {/* ribbon: Scientia Lux */}
        <path d="M10.5 47.4 6.2 51l4.3 3.6z" fill={field} />
        <path d="M53.5 47.4 57.8 51l-4.3 3.6z" fill={field} />
        <rect x="10.5" y="47.4" width="43" height="7.2" rx="1.4" fill={field} />
        <text
          x="32"
          y="52.7"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="4.3"
          fontWeight="700"
          letterSpacing="0.1"
          fill={shield}
        >
          SCIENTIA LUX
        </text>
      </svg>
    </span>
  );
}
