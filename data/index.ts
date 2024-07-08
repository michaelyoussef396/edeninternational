



export const logos = [
  '/Acsenda-School-of-ManagementEduCo-Australia (1).png',
  '/Bupa-Australia-Educube.png',
  '/Charles-Darwin-University-Australia-Educube.png',
  '/Deakin-University-Australia-Educube.png',
  '/Edith-Cowan-University-Australia-Educube.png',
  '/Excelsia-College-Australia-Educube.png',
  '/Federation-University-Australia-Educube.png',
  '/Griffit-University-Australia-educube.png',
  '/Holmes-Institute-Australia-Educube.png',
  '/Kings-own-Institute-Australia-Educube.png',
  '/La-Trobe-University-Australia-educube.png',
  '/Southern-Cross-University-Australia-Educube.png',
  '/The-University-of-NewCastle-Australia-Educube.png',
  '/University-of-South-Australia-Educube.png',
  '/Victoria-University-Sydney-Australia-Educube.png',
  '/Western-Sydney-University-Australia-Educube.png'
];
// data/index.ts

interface Detail {
  title: string;
  content: string;
}

interface SubSection {
  subHeading: string;
  details?: Detail[];
  listItems?: string[];
  note?: string;
  content?: string;
}

interface Section {
  heading: string;
  subSections?: SubSection[];
  listItems?: string[];
  note?: string;
  content?: string;
}

interface VisaData {
  title: string;
  description: string;
  sections: Section[];
}

export const trainingVisaData: VisaData = {
  title: "ABOUT THIS VISA",
  description: "The Training visa subclass 407 is a temporary visa for people in Australia who want to undergo job or work training in Australia. This visa helps the holder to develop their skills in their current profession, area of tertiary study or field of expertise. The visa is generally valid for stay in Australia for up to 2 years.",
  sections: [
    {
      heading: "HOW DO I QUALIFY FOR THE TRAINING SUBCLASS 407 VISA?",
      listItems: [
        "be sponsored by an approved sponsor, to participate in relevant professional development or occupational training programs directly from the sponsor",
        "have been nominated for an approved occupation position by an approved Australian temporary activities sponsor, and that nomination has been approved",
        "be invited to apply for the visa, if the sponsor is a Commonwealth agency",
        "be undertaking training in an occupation on the 407 Training Visa Occupations List, and have already worked or studied full time in this occupation for at least 12 months full time in the last 24 months",
        "be at least 18 years old at the time of visa grant decision, in most circumstances",
        "meet English language requirements",
        "if applying in Australia, hold a substantive visa that is NOT a:",
        "— Subclass 403 Temporary Work Visa in the Domestic Worker (Diplomatic or Consular stream)",
        "— Subclass 771 Transit Visa, or",
        "— Special Purpose Visa",
        "meet health and character requirements",
        "meet the requirements of the stream in which you apply",
        "demonstrate sufficient funds to support themselves in Australia",
        "be a genuine temporary entrant"
      ]
    },
    {
      heading: "HOW DO I APPLY FOR THE TRAINING SUBCLASS 407 VISA?",
      content: "Before you can apply for a Training visa, your proposed sponsor will need to lodge a nomination application for you. They will only be able to do this if they are an approved sponsor or have at least lodged an application to become a sponsor. This visa can be applied for both onshore and offshore."
    },
    {
      heading: "WHAT THIS VISA WILL ALLOW YOU TO DO",
      listItems: [
        "Temporarily live in Australia for up to 2 years and complete the training specified in your application",
        "Leave and re-enter Australia frequently till the visa is valid",
        "Bring eligible family members to accompany you in Australia"
      ]
    },
    {
      heading: "CONDITION",
      content: "The visa is subject to condition 8102 which forbids work apart from the training specified in the visa application."
    },
    {
      heading: "WORK CONDITION",
      content: "You can only work for your sponsor. You must work at least 30 hours per week and be paid at least the Award rate."
    },
    {
      heading: "HEALTH INSURANCE",
      content: "You must also maintain your health insurance whilst in Australia."
    },
    {
      heading: "LOCATION",
      content: "The application must be lodged online. You can either be in Australia or overseas when lodging the application."
    },
    {
      heading: "FAMILY MEMBERS",
      content: "Family members (spouses and children) can be included in the application."
    }
  ]
};







export const studyInAustraliaItems = [
  {
    title: "WORLD-CLASS UNIVERSITIES",
    content: `
      <p>According to the 2018-19 world ranking (Times Higher Education’s World University Ranking), there are more than 35 top universities in Australia and 10 of them feature in the prestigious top 100.</p>
    `,
  },
  {
    title: "SCHOLARSHIPS",
    content: `
      <p>Did you know that the Australian Government invests more than $200,000,000 on international scholarships yearly? Other than the Australian Government, many others offer a significant number of scholarships to help you achieve Australian higher degrees easily. Universities offering scholarships:</p>
      <ul class="mt-4 list-disc list-inside">
        <li><strong>Charles Darwin University:</strong> These universities offer a 15% scholarship for all students through ATMC. Students don’t need high IELTS scores to get this scholarship.</li>
        <div class="flex justify-center"><img src="/Charles-Darwin-UniVERSITY.webp" alt="Charles Darwin University" class="w-1/2 mt-4 rounded-lg"></div>
        <li><strong>Federation University Australia:</strong> Offers a 15% scholarship for all students through ATMC. Students don’t need high IELTS scores to get this scholarship.</li>
        <div class="flex justify-center"><img src="/Federation-University-australia.webp" alt="Federation University Australia" class="w-1/2 mt-4 rounded-lg"></div>
        <li><strong>University of the Sunshine Coast:</strong> Offers a 15% scholarship for all students through ATMC. Students don’t need high IELTS scores to get this scholarship.</li>
        <div class="flex justify-center"><img src="/university-of-the-sunshine-coast.webp" alt="University of the Sunshine Coast" class="w-1/2 mt-4 rounded-lg"></div>
        <li><strong>Australian Awards:</strong> The Australia Awards aim to promote knowledge, education links, and enduring ties between Australia and its neighbors through extensive scholarship programs. Scholarships are available for full tuition fees, accommodation, return air travel, establishment allowance, and health cover.</li>
        <li><strong>International Postgraduate Research Scholarships (IPRS):</strong>The IPRS program enables international students to undertake a postgraduate research qualification in Australia and gain experience with leading Australian researchers. The scholarships are available for a period of two years for a Masters by research degree or AUD three years for a Doctorate by Research degree. The scholarship covers tuition fees and health cover costs.</li>
        <li><strong>Macquarie University International Scholarships:</strong>TThe Macquarie University Vice-Chancellor’s International Scholarship provides a partial tuition fee scholarship for outstanding students to study an undergraduate or postgraduate degree at Macquarie University North Ryde campus. The scholarship amount is varied up to AUD $10,000.</li>
        <li><strong>Adelaide Scholarships International:</strong>The University of Adelaide offers the Adelaide Scholarships International (ASI) program to attract high quality international postgraduate students to areas of research strength in the University of Adelaide to support its research effort. The scholarships include course tuition fees, annual living allowance, and health insurance. **Note: Eden International Bangladesh assist students to get these all aforementioned scholarships package.</li>  
        </ul>
    `,
  },
  {
    title: "VERSATILE PROGRAM AND RESEARCH",
    content: `
      <p>Along with a vast number of programs, Australia is top-ranked for Research. Australia is fertile ground for students wishing to pursue higher degrees and conduct research. Australian Universities offer more than 22,000 courses in 1,150 institutions across the country, with an additional $600 million estimated for research in Science and innovation-related programs and activities.</p>
    `,
  },
  {
    title: "EDUCATION COST",
    content: `
      <p>Australia costs less to study compared to the USA and UK. The average first-semester tuition fees are AUD $8,000 to $13,000. Students can work part-time (20 hours per week) and full-time during vacations. Students need to deposit AUD $8,000 to $13,000 for tuition fees and AUD $2500 to $3000 for overseas health cover initially. The air travel and embassy fee cost approximately AUD $900 and AUD $581 respectively.</p>
    `,
  },
  {
    title: "ADMISSION REQUIREMENT",
    content: `
      <p>All students must meet the following criteria to gain admission to any University/College/Institute in Australia:</p>
      <ul class="mt-4 list-disc list-inside">
        <li>Academic Qualifications: Minimum 60% marks in all previous degree programs (secondary, higher secondary, or intermediate level and bachelor or honors).</li>
        <li>ELICOS (English language course for overseas students): Minimum band 5.5 in IELTS (no band less than 5.0) or 46 in PTE or 62 in TOEFL.</li>
        <li>Diploma: Minimum band 5.5 in IELTS (no band less than 5.0) or 46 in PTE or 62 in TOEFL.</li>
        <li>Bachelor Program: Minimum band 6.0 in IELTS (no band less than 5.5) or 54 in PTE or 73 in TOEFL.</li>
        <li>Masters Program: Minimum band 6.5 in IELTS (no band less than 6.0) or 61 in PTE or 85 in TOEFL.</li>
      </ul>
    `,
  },
];
