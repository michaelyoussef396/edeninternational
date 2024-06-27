import Accordion from "@/components/Accordion";
import { studyInCanadaItems } from "@/data/index";
import { FC } from "react";

const TopReasonsCanada: FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          TOP REASONS TO CHOOSE <span className="text-red-500">CANADA</span>
        </h2>
        <p className="text-center mb-12">
          Are you looking to study abroad in the near future? If yes, then studying in Canada can be the perfect opportunity for you. As a developed country with an undisputed reputation for education and immigration opportunities, Canada has a lot to offer to the young as well as to senior individuals.
        </p>
        <Accordion items={studyInCanadaItems} />
        <div className="mt-8 text-center">
          <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 font-bold">
            GET A FREE INITIAL ASSESSMENT OF YOUR ELIGIBILITY
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopReasonsCanada;
