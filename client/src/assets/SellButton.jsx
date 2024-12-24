export default function SellButton() {
  return (
    <div className="flex items-center justify-center bg-white">
      <button className="sell-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="orange"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>SELL</span>
      </button>
    </div>
  );
}
