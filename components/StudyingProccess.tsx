import { FC } from "react";
import Image from 'next/image';

const steps = [
  {
    title: "Initial assessment",
    description: `After a successful assessment and writing a standard SOP we, EDUCUDE will apply to the university for an offer letter on behalf of a student. It takes approx one week to get the offer letter. Students will get to know all about their courses including enrollment fees, enrollment date, tuition fees, courses destination, campus location, overseas health cover (medical fees), refundable and non-refundable expenses for study in Australia in the offer letter.`,
  },
  {
    title: "GTE Assessment",
    description: `In this step, the university will investigate students’ financial documents. For instance, if a student or sponsor has AUD $50,000 (Fifty thousand) in a bank for study purpose in Australia then the university will ask them about the income source of AUD $50,000. Student or sponsor must provide legitimate documents for each transaction in the bank. Besides the relationship with a sponsor, student’s passport, sponsor’s NID documents will be evaluated. Finally, the university will conduct an interview session with the student and student must pass in the interview. EDUCUDE provides full assistance in GTE assessments and helps students to pass in the interview.`,
  },
  {
    title: "COE (Confirmation of Enrollment)",
    description: `After a successful GTE assessment, University will allow students to pay initial tuition fees mentioned in the offer letter. After payment, students will be issued COE from University. In other words, COE is called pre-visa. EDUCUDE will also help to conduct the whole process for successful COE.`,
  },
  {
    title: "Visa Collection",
    description: `After having COE, EDUCUDE – on behalf of the student will submit all academics financial documents to the embassy and prepare students for bio-metrics and medical checkup. It takes 20-30 working days to get a visa.`,
  },
];

const StudyProcess: FC = () => {
  return (
    <section className="relative bg-black text-white py-12">
      <div className="absolute inset-0">
        <Image
          src="/shape-7.jpg" // Ensure this image is placed in the public folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-20 text-center">
        <h2 className="text-5xl font-bold mb-12">
          VISA <span className="text-red-500">PROCESS</span>
        </h2>
        {steps.map((step, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4 underline">{step.title}</h3>
            <p className="text-lg leading-relaxed">
              {step.description.split(" ").map((word, i) => {
                const isRed = ["AUD", "$50,000", "(Fifty", "thousand)", "interview", "session", "COE", "visa"].includes(word);
                return (
                  <span key={i} className={isRed ? "text-red-500" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default StudyProcess;
