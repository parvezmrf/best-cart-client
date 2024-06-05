
const Categories = () => {
    return (
        <div>
       
            <h2 className="text-xl py-10 text-center font-bold">Shop by category</h2>

            <div className="flex justify-center">
                <div className="w-60 hover:shadow-lg hover:scale-105">
                    <img src="https://i.ebayimg.com/thumbs/images/g/9TwAAOSwEKNZwLsb/s-l225.webp" alt="Apple Brands" />
                    <h2 className="text-xl font-semibold text-center">Apple Watch</h2>
                </div>
                <div className="w-60 hover:shadow-lg hover:scale-105">
                    <img src="https://i.ebayimg.com/thumbs/images/g/7n8AAOSwvWFfsjQr/s-l225.webp" alt="Apple Brands" />
                    <h2 className="text-xl font-semibold text-center">Motorala</h2>
                </div>
                <div className="w-60 hover:shadow-lg hover:scale-105">
                    <img src="https://i.ebayimg.com/thumbs/images/g/3O8AAOSwIQdZJXg9/s-l225.webp" alt="Apple Brands" />
                    <h2 className="text-xl font-semibold text-center">Samsung</h2>
                </div>
                <div className="w-60 hover:shadow-lg hover:scale-105">
                    <img src="https://i.ebayimg.com/thumbs/images/g/FYoAAOSw2gxYvAw2/s-l225.webp" alt="Apple Brands" />
                    <h2 className="text-xl font-semibold text-center">Sony</h2>
                </div>
               



            </div>

        
        </div>
    );
};

export default Categories;