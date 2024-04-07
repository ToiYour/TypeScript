const ButtonAdmin = (props: { title: string }) => {
  return (
    <button
      className=" middle none center mr-4 rounded-lg bg-blue-500 py-3 px-12 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      {props.title}
    </button>
  );
};

export default ButtonAdmin;
