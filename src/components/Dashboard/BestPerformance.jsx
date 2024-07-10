import seo from "../../assets/seo.jpeg";

const BestPerformance = () => {
  return (
    <div className="bg-white p-6 rounded-lg max-w-4xl mx-auto h-[350px]  shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Best Performance</h2>
        <button className="text-sm text-purple-700 hover:underline focus:outline-none">See all</button>
      </div>
      <div>
        <img
          src={seo}
          alt="Best Performance"
          className="rounded-lg mb-4 w-full h-44 object-cover transition-transform duration-500 transform hover:scale-105"
        />
        <div className="font-semibold text-lg text-gray-700">Monthly Budget </div>
        <div className="text-2xl font-bold text-purple-700">$897,500</div>
        <div className="text-gray-600"> Revenue Generated from Recent Month </div>
      </div>
    </div>
  );
};

export default BestPerformance;
