import Image from "next/image";
import Maint from "../components/Maint";
function pmain() {
  const maintas = [
    {
      src: "/dec.jpeg",
      date: "10/12/2021",
      details:
        "Customers will experience service interruptions to Internet Banking, Card Services, ATMs, POS machines and Payment Gateway between 1 - 5 am tonight (10 December 2021) due to a planned maintenance. Thank you for your patience.",
    },
    {
      src: "/dec.jpeg",
      date: "08/12/2021",
      details:
        "Customers will experience service interruptions to Internet Banking, Card Services, ATMs, POS machines and USD booking portal between 1:30 - 2 am tonight due to a planned maintenance. Thank you for your patience.",
    },
    {
      src: "/dec.jpeg",
      date: "07/12/2021",
      details:
        "Due to a technical issue, customers are facing intermittent interruptions to internet banking. We are working to resolve the issue and will update customers.",
    },
    {
      src: "/dec.jpeg",
      date: "01/12/2021",
      details:
        "Customers will experience a 30 minute service interruption to Internet Banking, MobilePay, ATMs, POS, Payment Gateway and USD Booking Portal between 3-4 am tonight. Thank you for your patience.",
    },
    {
      src: "/dec.jpeg",
      date: "29/11/2021",
      details:
        "Customers will experience service interruptions between 6 to 6:30 pm tonight. Credit Cards and Prepaid Cards can continue to be used on POS terminals and Payment Gateway. Thank you for your patience.",
    },
    {
      src: "/atmpos.jpeg",
      date: "29/11/2021",
      details: "Announcement regarding Service Interruptions:",
    },
    {
      src: "/atmpos.jpeg",
      date: "29/11/2021",
      details:
        "Customers will experience intermittent service interruptions to Internet Banking, ATMs, POS, MobilePay and Payment Gateway between 2-4 am tonight. Thank you for your patience.",
    },
    {
      src: "/atmpos.jpeg",
      date: "21/11/2021",
      details:
        "Customers will experience service interruptions to Internet Banking, ATMs, POS, Payment Gateway and USD Booking Portal between 3-4 am tonight. Thank you for your patience.",
    },
    {
      src: "/atmpos.jpeg",
      date: "12/02/2021",
      details:
        "Due to a technical issue with our system upgrade, customers are facing intermittent interruptions to services. Please note that we are working to resolve the issue at the earliest. Thank you for your patience.",
    },
    {
      src: "/atmpos.jpeg",
      date: "20/11/2021",
      details:
        "Due to a technical issue with our system upgrade, customers are facing intermittent interruptions to services. Please note that we are working to resolve the issue at the earliest. Thank you for your patience.",
    },
    {
      src: "/novmain.jpeg",
      date: "18/11/2021",
      details:
        "Due to a technical issue with our system upgrade, customers are facing intermittent interruptions to services. Please note that we are working to resolve the issue at the earliest. Thank you for your patience.",
    },
    {
      src: "/novmain.jpeg",
      date: "14/11/2021",
      details:
        "Our upgrade work is taking longer than expected. We thank our customers for their patience and we will make an announcement once the work is completed. Credit Cards and Prepaid Cards can continue to be used on POS terminals and Payment Gateway. Thank you.",
    },
    {
      src: "/novmain.jpeg",
      date: "13/11/2021",
      details:
        "Customers will experience service interruptions to Internet Banking, ATMs, POS, mPOS, Merchant Portal, MobilePay and Payment Gateway between 2-3 am tonight. Credit and Prepaid cards can continue to be used on POS and Payment Gateway during this time. Thank you for your patience.",
    },
    {
      src: "/novmain.jpeg",
      date: "12/11/2021",
      details:
        "Customers will experience service interruptions to Internet Banking, ATMs, POS, mPOS, Merchant Portal, MobilePay and Payment Gateway between 2-3 am tonight. Credit and Prepaid cards can continue to be used on POS and Payment Gateway during this time. Thank you for your patience.",
    },
    {
      src: "/novmain.jpeg",
      date: "11/11/2021",
      details:
        "Update: our system maintenance time has changed. Customers may experience service interruptions between  4:30am - 7.30am while we carry out an essential upgrade.",
    },
  ];

  return (
    <>
      <div
        className="relative h-[300px] sm:h-[400px]
     lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
      >
        <Image src="/bankofmaldives.png" layout="fill" objectFit="cover" />
      </div>
      <main className="max-w-8xl sm:px-28">
        <section className="my-12">
          <h2 className="text-2xl py-12">Maintainance Notice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {maintas?.map((maintas) => (
              <Maint
                key={maintas.src}
                src={maintas.src}
                date={maintas.date}
                details={maintas.details}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default pmain;
