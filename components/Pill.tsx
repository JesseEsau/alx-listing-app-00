const Pill: React.FC<{ label: string }> = ({ label }) => (
    <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
        {label}
    </button>
);

export default Pill;
