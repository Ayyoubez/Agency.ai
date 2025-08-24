import { company_logos } from "../assets/assets";

function TrustedBy() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-600  dark:text-white/80 text-center">
      <h3 className="font-semibold">Trusted by leading companies</h3>
      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map((logo, index) => {
          return (
            <img
              src={logo}
              key={index}
              alt=""
              className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
            />
          );
        })}
      </div>
    </div>
  );
}

export default TrustedBy;
