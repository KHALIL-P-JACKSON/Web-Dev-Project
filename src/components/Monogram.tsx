function Monogram({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`monogram ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 15V49M15 33L30 15M15 33L31 49M49 15V38C49 45 45 49 39 49H35"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Monogram;
