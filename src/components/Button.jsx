const Button = ({ children, variant = "main", Icon, ...rest }) => {
  const mainStyles =
    "bg-gradient-to-r from-orange-500 to-violet-600 hover:bg-orange-400 text-white font-bold px-2 rounded shadow p-2 m-1";
  const secondaryStyles =
    "bg-white hover:bg-gray-300 text-black px-2 font-bold rounded shadow p-2 m-1";
  return (
    <button
      {...rest}
      className={variant === "main" ? mainStyles : secondaryStyles}
    >
      {Icon && <Icon size="20" className="inline mr-5" />}
      {children}
    </button>
  );
};

export { Button };
