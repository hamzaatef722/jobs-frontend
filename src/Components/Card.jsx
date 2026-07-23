function Card({ children, bg = "bg-white" }) {
  return (
    <div
      className={`${bg} rounded-3xl border border-slate-200/80 p-8 shadow-xl shadow-slate-200/70`}
    >
      {children}
    </div>
  );
}

export default Card;
