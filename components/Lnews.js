import News from "../components/News";

function Lnews() {
  const lnews = [
    {
      src: "/namunislamic.png",
      date: "5th December 2021",
      name: "Bank of Maldives announces 'Namun Islamic Kamun Kaafiru'",
      description:
        "Bank of Maldives has announced the reduction of its Home Loan interest rates to 9%, the lowest rate available in the country.The reduced rate is available for customers applying for new loans or looking to refinance their existing loans in other financial institutions. Customers can purchase apartments and row houses anywhere in the country with a repayment period of 20 years with BML’s Home Loan. BML CEO Tim Sawyer commented “We are pleased to be in a position to announce rate reductions for a number of products in our loan portfolio. We now offer the country’s lowest interest rate for home loans which will result in substantial savings for home buyers. For a MVR 3 million loan, for example, customers can expect to save about MVR 500,000. Our Kiyavaa Loan rate has also been reduced and we have also eased Lifestyle Loan eligibility from today. The Bank has reduced the interest rate for Kiyavaa Loan to 9% to provide financial support to the students pursuing higher education. Further changes were also made to the secured Lifestyle Loan which now allows customers with all types of verifiable income to be eligible for the loan.",
    },
    {
      src: "/outofservice.jpeg",
      date: "03rd December 2021",
      name: "Vagthuee Gothun Hidhumai medhukendifa",
      description: "Vagthuee Gothun Hidhumai medhukendifa",
    },
    {
      src: "/accountbalancezero.png",
      date: "29th November 2021",
      name: "Abadhu technical error",
      description:
        "Due to a technical issue with our system upgrade, customers are facing intermittent interruptions to services. Please note that we are working to resolve the issue at the earliest. Thank you for your patience.",
    },
  ];
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 
  lg:grid-cols-3 xl:grid-cols-3 sm:space-x-6 cursor-pointer"
    >
      {lnews?.map((news) => (
        <News
          key={news.src}
          src={news.src}
          date={news.date}
          name={news.name}
          description={news.description}
        />
      ))}
    </div>
  );
}

export default Lnews;
