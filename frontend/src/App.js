import { BrowserRouter, Link, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { ProductView } from "./views/ProductView";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col h-full">
                <header className="bg-[#203040] flex flex-wrap justify-between items-center">
                    <div>
                        <Link className="text-white p-4 text-5xl font-bold inline-block" to="/">
                            amazona
                        </Link>
                    </div>
                    <div>
                        <Link className="text-white p-4 inline-block" to="/cart">
                            Cart
                        </Link>
                        <Link className="text-white p-4 inline-block" to="/signin">
                            Sign In
                        </Link>
                    </div>
                </header>
                <main className="p-4">
                    <Route path="/" component={HomeView} exact></Route>
                    <Route path="/product/:id" component={ProductView}></Route>
                </main>
                <footer className="bg-[#203040] text-white flex flex-wrap justify-center items-center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
