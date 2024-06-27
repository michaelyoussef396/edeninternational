import AppointmentForm from "./AppointmentForm";

const PointCalc = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-1/3 p-4">
        <h2 className="text-2xl font-bold">Other Useful Links</h2>
        <ul className="space-y-2 mt-4">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Migration
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Temporary Skill Shortage (TSS) Visa - Subclass 482
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Training Visa - Subclass 407
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Skilled Independent Visa - Subclass 189
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Skilled Nominated Visa - Subclass 190
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Skilled Work Regional Visa - Subclass 491
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Sponsored Jobs
          </li>
        </ul>
      </div>
      <div className="w-2/3 p-4">
        <AppointmentForm />
      </div>
    </div>
  );
};

export default PointCalc;