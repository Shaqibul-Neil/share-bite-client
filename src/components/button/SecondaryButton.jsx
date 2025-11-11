const SecondaryButton = ({
  children,
  className = "",
  type = "button",
  hoverTextColor,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`relative inline-flex items-center justify-center overflow-hidden font-medium transition-all rounded group border cursor-pointer text-white px-4 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Hover animated background */}
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

      {/* Button text */}
      <span
        className={`relative transition-colors duration-300 ease-in-out ${hoverTextColor}`}
      >
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;
