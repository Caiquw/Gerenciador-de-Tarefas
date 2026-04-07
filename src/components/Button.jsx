function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer bg-slate-500 text-shadow-white text-white rounded-2xl py-2 px-4  hover:bg-slate-600"
    >
      {props.children}
    </button>
  );
}

export default Button;
