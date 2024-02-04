import React from "react";

export default function (props) {
  return (
    <div>
      <div className="flex flex-wrap  justify-center items-center gap-7 lg:gap-0">
        <div className="pricingTagCard  p-10 bg-white flex flex-col rounded">
          <div className="pricingCard flex flex-col rounded-3xl w-80 my-4  h-125">
            <h6 className="mb-5 font-semibold  text-2xl ">{props.title}</h6>
            <div className="priceRange flex">
              <sup className="text-2xl ">Rs:</sup>
              <span className="text-5xl px-1 font-extrabold">{props.price}</span>
              <p className="align-text-bottom	">One Time</p>
            </div>
            <p className="mt-2 text-pgcolor tracking-normal">
              {props.description}
            </p>
          </div>
          <hr className="my-3 bg-black" />
          <div className="pricingBody flex flex-col justify-end  font-roboto font-thin   text-pgcolor tracking-wide leading-6">
            <ul className="">
              <li>
                <i className="customIconColor rounded-full bg-color9 fa-solid  fa-check"></i>
                {props.f1}
              </li>

              <li className="">
                <i className="customIconColor rounded-full bg-color9 fa-solid  fa-check"></i>
                {props.f2}
              </li>

              <li>
                <i className="customIconColor rounded-full bg-color9 fa-solid  fa-check"></i>
                {props.f3}
              </li>

              <li>
                <i className="customIconColor rounded-full bg-color9 fa-solid  fa-check"></i>
                {props.f4}
              </li>
            </ul>
          </div>
          <div className="my-4 w-40 text-black bg-white hover:bg-red hover:text-white border  font-medium rounded-lg text-sm px-3 py-4 text-center me-2 mb-2">
            <a href="#">Know More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
