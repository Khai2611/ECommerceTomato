import { ProfileForm } from "../components/checkout/ProfileForm";
import ProductList from "../components/checkout/ProductList";

const CheckoutForm = () => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 mt-10">
      <div className="flex-1 flex items-start justify-center bg-zinc-100 rounded">
        <div className="w-full max-w-xl mt-4" style={{ marginTop: "110px" }}>
          <ProductList></ProductList>
        </div>
      </div>
      <div
        className="flex-1 flex items-start justify-center"
        style={{ marginTop: "110px" }}
      >
        <div className="w-full max-w-xl ">
          <ProfileForm></ProfileForm>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
