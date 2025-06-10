const Header = () => (
    <header className="p-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold">StayFinder</div>
        <input
            type="text"
            placeholder="Search properties..."
            className="border p-2 rounded-md w-1/2"
        />
        <div className="space-x-4">
            <button>Login</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Sign Up</button>
        </div>
    </header>
);

export default Header;