import { FaUsers, FaChild, FaUserAlt, FaUserFriends, FaGraduationCap, FaUserTie } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Full Family Membership",
      price: "$385",
      description: "At vero eos et accusam et justo duo dolores.",
      icon: <FaUsers className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Courts Only Family Membership",
      price: "$165",
      description: "At vero eos et accusam et justo duo dolores.",
      icon: <FaChild className="text-green-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Full Adult Membership",
      price: "$255",
      description: "At vero eos et accusam et justo duo dolores.",
      icon: <FaUserAlt className="text-purple-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Students’ Membership",
      price: "$155",
      description: "At vero eos et accusam et justo duo dolores.",
      icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
    },
    {
      id: 5,
      title: "Dual (Adult) Membership",
      price: "$325",
      description: "At vero eos et accusam et justo duo dolores.",
      icon: <FaUserFriends className="text-pink-500 text-3xl" />,
    },
    {
      id: 6,
      title: "Junior Player Membership",
      price: "$145",
      description: "At vero eos et accusam et justo duo dolores.",
      icon: <FaUserTie className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <span className="text-lg text-gray-500 uppercase tracking-widest">About Us</span>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Our Flexible Pricing Plan</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{plan.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
            <div className="text-lg text-gray-700 font-bold">{plan.price}</div>
            <p className="text-gray-500 mt-2">{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
