import product1 from "../assets/product1.png"

const products = [
  { img: product1, name: "Vanilla Beans", role: "Premium Quality" },
  { img: "images/p2 cocoa beans.png", name: "Cocoa Beans", role: "Organic & Pure" },
  { img: "images/p3 balsa wood.png", name: "Balsa Wood", role: "Lightweight & Durable" },
  { img: "images/p4 teak wood.png", name: "Teak Wood", role: "High-Quality Timber" },
  { img: "images/kiwlla wood (1).png", name: "Kwila Wood", role: "Hardwood Excellence" },
];

const Product = () => {
  return (
    <section className="bg-[#091D3E] py-12">
      <div className="container mx-auto px-4">
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
              <div className="text-center text-white py-4">
                <h5 className="text-lg font-semibold">{product.name}</h5>
                <h6 className="text-sm">{product.role}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="#" className="px-8 py-2 bg-[#0C51CD] text-white rounded-md transition-all border border-[#0C51CD] hover:bg-transparent hover:text-[#0C51CD]">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;