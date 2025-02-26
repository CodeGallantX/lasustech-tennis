const plans = [
    { id: 1, title: "Full Family Membership", price: "$385", icon: "people", detail: "At vero eos et accusam et justo duo dolores." },
    { id: 2, title: "Courts Only Family Membership", price: "$165", icon: "child", detail: "At vero eos et accusam et justo duo dolores." },
    { id: 3, title: "Full Adult Membership", price: "$255", icon: "person", detail: "At vero eos et accusam et justo duo dolores." },
    { id: 4, title: "Students’ Membership", price: "$155", icon: "mortarboard", detail: "At vero eos et accusam et justo duo dolores." },
    { id: 5, title: "Dual (Adult) Membership", price: "$325", icon: "people-fill", detail: "At vero eos et accusam et justo duo dolores." },
    { id: 6, title: "Junior Player Membership", price: "$145", icon: "person-badge", detail: "At vero eos et accusam et justo duo dolores." }
];

document.addEventListener("DOMContentLoaded", () => {
    const pricingContainer = document.getElementById("pricing-plans");
    
    plans.forEach(plan => {
        const planElement = document.createElement("div");
        planElement.classList.add("w-full", "md:w-1/2", "p-4");
        
        planElement.innerHTML = `
            <div class="p-6 border rounded-lg shadow-md bg-white">
                <div class="flex items-center justify-between text-gray-800">
                    <h3 class="text-xl font-semibold uppercase">${plan.title}</h3>
                    <span class="flex-grow border-b-2 border-gray-500 mx-3"></span>
                    <h4 class="font-bold text-xl">${plan.price}</h4>
                </div>
                <p class="text-gray-600 mt-2">${plan.detail}</p>
                <div class="text-blue-500 text-3xl mt-4">
                    <i class="bi bi-${plan.icon}"></i>
                </div>
            </div>
        `;
        
        pricingContainer.appendChild(planElement);
    });
});
