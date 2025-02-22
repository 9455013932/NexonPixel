import { Link } from "react-router-dom";
import product1 from "../assets/product1.png"

const products = [
  { img: product1, name: "VR Business Card", role: "Premium Digital Identity" },  
  { img: product1, name: "Website Development", role: "Custom & Scalable Solutions" },  
  { img: product1, name: "Digital Marketing", role: "Boost Your Online Presence" },  
  { img: product1, name: "SEO Optimization", role: "Rank Higher, Grow Faster" },  
  { img: product1, name: "Branding Solutions", role: "Create a Lasting Impact" },  
  
];

const Product = () => {
  return (
    <section className="bg-[#091D3E] p-8 ">
      <div className="container mx-auto px-4 ">
        <div className="text-center text-white mb-8">
          <h2 className="text-3xl font-bold">Our Products</h2>
          <hr className="w-24 mx-auto border-t-2 border-white mt-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full">
                <img src={product.img} alt={product.name} className="w-full" />
              </div>
              <div className="text-center text-[#091D3E] py-4">
                <h5 className="text-lg font-semibold">{product.name}</h5>
                <h6 className="text-sm">{product.role}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to={"/products"} className="px-8 py-2 bg-[#0C51CD] text-white rounded-md transition-all border border-[#0C51CD] hover:bg-transparent hover:text-[#0C51CD]">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;