export default function Tariff() {
  const tariffs = [
    { vehicle: 'Sedan', rate: '₹15/km', minimum: '₹500', description: 'Comfortable sedan for city travel' },
    { vehicle: 'SUV', rate: '₹20/km', minimum: '₹700', description: 'Spacious SUV for family trips' },
    { vehicle: 'Luxury Sedan', rate: '₹30/km', minimum: '₹1000', description: 'Premium luxury experience' },
    { vehicle: 'Luxury SUV', rate: '₹40/km', minimum: '₹1500', description: 'Top-tier luxury SUV' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Tariff Plans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tariffs.map((tariff, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{tariff.vehicle}</h3>
              <p className="text-gray-600 mb-4">{tariff.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Per Kilometer:</span>
                <span className="text-xl font-bold text-blue-600">{tariff.rate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Minimum Charge:</span>
                <span className="text-lg font-semibold">{tariff.minimum}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
