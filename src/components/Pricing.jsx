import {
  FaUsers,
  FaChild,
  FaUserAlt,
  FaUserFriends,
  FaGraduationCap,
  FaUserTie,
} from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Full Family Membership",
      price: "$385",
      icon: <FaUsers className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Courts Only Family Membership",
      price: "$165",
      icon: <FaChild className="text-green-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Full Adult Membership",
      price: "$255",
      icon: <FaUserAlt className="text-purple-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Students’ Membership",
      price: "$155",
      icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
    },
    {
      id: 5,
      title: "Dual (Adult) Membership",
      price: "$325",
      icon: <FaUserFriends className="text-pink-500 text-3xl" />,
    },
    {
      id: 6,
      title: "Junior Player Membership",
      price: "$145",
      icon: <FaUserTie className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <section className="px-28 py-20">
      <div className="text-center mb-12">
        <span className="text-lg text-gray-500 uppercase tracking-widest">
          PRICING
        </span>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Our Flexible Pricing Plan
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex items-center justify-between text-gray-800 text-lg"
          >
            <div className="flex items-center gap-4">
              {plan.icon}
              <h3 className="text-2xl uppercase font-semibold">{plan.title}</h3>
            </div>
            <span className="flex-grow border-dotted border-b-4 border-black mx-4"></span>
            <span className="font-bold text-xl">{plan.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
