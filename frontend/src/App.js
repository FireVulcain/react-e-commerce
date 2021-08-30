import data from "./data";

function App() {
    return (
        <div className="flex flex-col h-full">
            <header className="bg-[#203040] flex flex-wrap justify-between items-center">
                <div>
                    <a className="text-white p-4 text-5xl font-bold inline-block" href="/">
                        amazona
                    </a>
                </div>
                <div>
                    <a className="text-white p-4 inline-block" href="/cart">
                        Cart
                    </a>
                    <a className="text-white p-4 inline-block" href="/signin">
                        Sign In
                    </a>
                </div>
            </header>
            <main className="p-4">
                <div>
                    <div className="flex flex-wrap items-center justify-center">
                        {data.products.map((product) => (
                            <div key={product._id} className="border-[0.1rem] border-gray-100 border-solid bg-[#f8f8f8] rounded-lg m-4">
                                <a href={`/product/${product._id}`}>
                                    <img className="rounded-lg max-w-md w-full" src={product.image} alt={product.name} />
                                </a>
                                <div className="p-4">
                                    <a className="mb-2" href={`/product/${product._id}`}>
                                        <h2 className="mb-2">{product.name}</h2>
                                    </a>
                                    <div className="mb-2">
                                        <span className="text-[#f0c040] mb-2 m-0.5">
                                            <i className="fa fa-star mb-2"></i>
                                        </span>
                                        <span className="text-[#f0c040] mb-2 m-0.5">
                                            <i className="fa fa-star mb-2"></i>
                                        </span>
                                        <span className="text-[#f0c040] mb-2 m-0.5">
                                            <i className="fa fa-star mb-2"></i>
                                        </span>
                                        <span className="text-[#f0c040] mb-2 m-0.5">
                                            <i className="fa fa-star mb-2"></i>
                                        </span>
                                        <span className="text-[#f0c040] mb-2 m-0.5">
                                            <i className="fa fa-star mb-2"></i>
                                        </span>
                                    </div>
                                    <div className="text-[2rem] mb-2">${product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="bg-[#203040] text-white flex flex-wrap justify-center items-center">All right reserved</footer>
        </div>
    );
}

export default App;
