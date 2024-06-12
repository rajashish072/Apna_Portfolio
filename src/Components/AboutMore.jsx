import React from 'react';

const AboutMore = () => {
  return (
    <section className="bg-gray-100 py-12" id="about">
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          {/* <span className="text-4xl md:text-8xl font-extrabold opacity-5 absolute inset-0 flex items-center justify-center">
            RESUME
          </span> */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 mb-4 relative">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg ">
              <tbody>
                {[
                  { label: "Name", value: "Ashish Raj" },
                  { label: "Mobile #", value: "+91 6261213153" },
                  { label: "Email Id", value: "rajashish072@gmail.com" },
                  { label: "Age", value: "24 Years" },
                  { label: "Nationality", value: "Indian" },
                  { label: "Language", value: "Hindi, English" },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}
                  >
                    <td className="px-4 py-2 text-lg md:text-1xl font-semibold text-slate-500">
                      {item.label}
                    </td>
                    <td className="px-4 py-2 text-lg md:text-1xl font-extrabold text-rose-950">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
