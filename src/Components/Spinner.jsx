import { RingLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

function Spinner({ loading = true, color = "#4f46e5", size = 50 }) {
  return (
    <div className="flex min-h-[250px] w-full items-center justify-center py-16">
      <RingLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
      />
    </div>
  );
}

export default Spinner;
