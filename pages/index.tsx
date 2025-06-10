import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/Pill";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront"];

const Hero = () => (
  <section
    className="bg-cover bg-center h-[300px] flex items-center justify-center text-white text-center px-4"
    style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}
  >
    <div>
      <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
      <p className="text-lg mt-2">
        The best prices for over 2 million properties worldwide.
      </p>
    </div>
  </section>
);

const ListingCard = ({ property }: { property: PropertyProps }) => (
  <div className="border rounded-md overflow-hidden shadow hover:shadow-lg transition">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold">{property.name}</h3>
      <p className="text-sm text-gray-500">
        {property.address.city}, {property.address.country}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-500 font-bold">
          ${property.price}/night
        </span>
        <span className="text-yellow-500">⭐ {property.rating}</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="my-4 px-4 flex gap-2 overflow-x-auto">
        {filters.map((label) => (
          <Pill key={label} label={label} />
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <ListingCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
