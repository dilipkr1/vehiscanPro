import React from "react";

export default function (props) {
  // const { packageData } = useContext(PackageContext);


  return (
       <div className="rounded-lg w-full grid grid-cols-2    justify-center items-center gap-7 lg:gap-0">
           <div className="pricingCard flex  flex-col rounded-3xl w-80 my-4  h-125">
            <h4>hello</h4>
          </div>
          <div className="pricingBody flex flex-col justify-end  font-roboto font-thin   text-pgcolor tracking-wide leading-6">
            <h2>Hello from right Side</h2>
          </div>
       </div>
   );
}
