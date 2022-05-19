const Input = ({ label, id, type, name, Icon, ...rest }) => {
  return (
    <label htmlFor={id}>
      <span className="text-white block mb-1">{label}</span>
      <div className="flex bg-white items-center transition border-2 border-transparent gap-5 px-5 py-2 rounded-full  focus-within:border-orange-400 ">
        {Icon && <Icon size="18" className="text-slate-500" />}
        <input
          id={id}
          type={type}
          name={name}
          className=" w-full bg-transparent outline-none"
          {...rest}
        />
      </div>
    </label>
  );
};

export { Input };
