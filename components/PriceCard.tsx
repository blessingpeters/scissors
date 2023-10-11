import React from 'react'


type PlanData = {
  plan: string;
  price: string;
  para: string;
  benefit: string[];
};

type PlanCardProps = {
  planData: PlanData;
  className?: string;
};

const PlanCard: React.FC<PlanCardProps> = ({ planData, className = "" }) => {

  return (
    <div className={`border border-blue-600 rounded-xl w-full lg:px-20 md:p-5 p-10 ${className}`}>
      <h2 className='font-semibold mt-4'>{planData.plan}</h2>
      <h3 className='text-3xl font-bold my-4'>{planData.price}</h3>
      <p className='font-semibold'>{planData.para}</p>
      <ul>
        {planData.benefit.map((benefitItem, index) => (
          <li className='my-4' key={index}>{benefitItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function PriceCard() {

  const plans: PlanData[] = [
    {
      plan: "Basic",
      price: "Free",
      para: "Free plan for all users",
      benefit: [
        "Unlimited URL Shortening",
        "Basic Link Analytics",
        "Customizable Short Links",
        "Standard Support",
        "Ad-supported",
      ],
    },
    {
      plan: "Professional",
      price: "$10/mo",
      para: "For advanced users",
      benefit: [
        "All Basic features",
        "Premium Link Analytics",
        "Link Expiry Options",
        "Priority Support",
        "Ad-free",
      ],
    },
    {
      plan: "Teams",
      price: "$25/mo",
      para: "For teams and businesses",
      benefit: [
        "All Professional features",
        "Team Collaboration",
        "Bulk Shortening",
        "Dedicated Support",
        "Custom Domain Options",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 lg:px-24 md:px-10 max-md:px-3 flex flex-col justify-center items-center">
      <div className="text-center lg:mb-28">
        <h2 className="text-4xl font-bold pl-4 leading-snug border-l-4 border-slate-800 border-spacing-2">A <span className="text-blue-600">price perfect </span>for your needs.</h2>
        <p className="mx-4">
          From catering for your personal, business, event, socials needs, you can be <br /> rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className='cards grid md:grid-cols-3 text-left py-10 w-full max-md:gap-y-5'>
        {plans.map((planDetail, index) => (
          <PlanCard key={index} planData={planDetail} className={planDetail.plan === "Professional" ? "bg-[#1E3448] flex flex-col justify-center text-white  lg:h-[600px] lg:-translate-y-20" : "lg:h-[455px]"}/>
        ))}
      </div>
      <div className='flex gap-x-3'>
        <button className='text-blue-600 border border-blue-600 font-semibold px-6 py-2 rounded-full cursor-pointer'>Get Custom Pricing</button>
        <button className='text-white bg-blue-600 font-semibold md:px-6 px-3 py-2 rounded-full cursor-pointer'>Select Pricing</button>
      </div>
    </section>
  );
}

