interface CardProps {
    title: string;
    description: string;
    className?: string;
}

export default function Card({ title, description, className = '' }: CardProps) {
    return (
        <div className={`p-4 border rounded-lg shadow-sm ${className}`}>
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}