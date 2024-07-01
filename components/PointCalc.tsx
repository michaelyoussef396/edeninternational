import AppointmentForm from "./AppointmentForm";
import Link from "next/link";

const PointCalc = () => {
  const links = [
    { name: "Migration", url: "/migration" },
    { name: "Temporary Skill Shortage (TSS) Visa - Subclass 482", url: "/temporary-skill-shortage-tss-visa-subclass-482" },
    { name: "Training Visa - Subclass 407", url: "/training-visa-subclass-407" },
    { name: "Skilled Independent Visa - Subclass 189", url: "/skilled-independent-visa" },
    { name: "Skilled Nominated Visa - Subclass 190", url: "/skilled-nominated-visa" },
    { name: "Skilled Work Regional Visa - Subclass 491", url: "/skilled-work-regional-visa" },
    { name: "Sponsored Jobs", url: "/sponsored-jobs" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md flex">
        <div className="w-1/3 p-4">
          <h2 className="text-2xl font-bold">Other Useful Links</h2>
          <ul className="space-y-2 mt-4">
            {links.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                  <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default PointCalc;
