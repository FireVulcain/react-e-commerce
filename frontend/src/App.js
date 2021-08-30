import { Product } from "./components/Product";
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
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </main>
            <footer className="bg-[#203040] text-white flex flex-wrap justify-center items-center">All right reserved</footer>
        </div>
    );
}

export default App;
