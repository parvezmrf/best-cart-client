import AllProductCard from "./AllProductCard";

const AllProducts = () => {
  return (
    <div className="my-10">
      <h1 className="text-xl py-10 text-center font-bold">All Watches</h1>
      <div className="flex flex-wrap gap-5 justify-center mx-10">
        <AllProductCard />
        <AllProductCard />
        <AllProductCard />
        <AllProductCard />
      </div>
    </div>
  );
};

export default AllProducts;
