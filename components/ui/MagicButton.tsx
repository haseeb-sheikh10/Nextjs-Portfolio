import React from "react";

const MagicButton = ({
  label,
  icon,
  handleClick,
}: {
  label: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-secondary"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#52A3FF_0%,#A67AF8_50%,#52A3FF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
        {label}
        {icon}
      </span>
    </button>
  );
};

export default MagicButton;
