import React from "react";
import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

import Button from "@/components/button";

const Services: React.FunctionComponent = React.forwardRef<HTMLDivElement>(
  function Services(props, ref) {
    const Title = ({ text }: { text: string | React.ReactNode }) => {
      return (
        <div className="flex items-end">
          <div className="inline-flex ml-auto after:bg-fff06 after:w-80 after:h-0.5 after:ml-8 after:mt-2">
            {text}
          </div>
        </div>
      );
    };

    const ServiceCard = ({
      description,
      onClick,
      title,
    }: {
      description: string;
      onClick?: () => void;
      title: string | React.ReactNode;
    }) => {
      return (
        <button
          onClick={onClick}
          className="w-full border-r-0.5 border-fff01 text-left group"
        >
          <div className="w-0 h-1 group-hover:transition-all group-hover:duration-500 group-hover:w-full group-hover:bg-orange group-hover:h-1" />
          <div className="px-6 py-12">
            <p className="text-lg font-semibold">{title}</p>
            <div className="my-8 pr-4 min-h-20">
              <p className="text-fff06 font-extralight hidden group-hover:flex">
                {description}
              </p>
            </div>
            <div className="p-2 bg-white w-min bg-opacity-20 rounded-full group-hover:bg-orange group-hover:scale-150 group-hover:transition-all group-hover:duration-150">
              <FaArrowRight color="#000" size={8} />
            </div>
          </div>
        </button>
      );
    };

    return (
      <section ref={ref} className="pt-24">
        <Title
          text={
            <p className="text-fff06 text-md font-light text-right">
              Professionals focused on helping your brand
              <br />
              grow and move forward.
            </p>
          }
        />
        <div className="mt-20 flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-20">
                <Image
                  alt=""
                  className="rounded-full object-cover object-top"
                  fill
                  src="/images/photo-2.jpg"
                />
              </div>
              <p className="text-7xl font-thin ml-5">
                <strong className="font-medium">Unique</strong> Ideas
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <p className="text-7xl font-thin mr-5">
                <strong className="font-medium">For Your</strong> Business.
              </p>
              <Button
                icon={<FaArrowDown color="#ff9800" size={16} />}
                text="OUR SERVICES"
              />
            </div>
          </div>
        </div>
        <div className="px-40 mt-20">
          <div className="flex w-full border-0.5 border-fff01">
            <ServiceCard
              description="Our creative agency is a team of professionals focused on helping your brand grow."
              title={
                <React.Fragment>
                  Branding and <br />
                  Identity Design
                </React.Fragment>
              }
            />
            <ServiceCard
              description="Our creative agency is a team of professionals focused on helping your brand grow."
              title={
                <React.Fragment>
                  Website Design <br />
                  and Development
                </React.Fragment>
              }
            />
            <ServiceCard
              description="Our creative agency is a team of professionals focused on helping your brand grow."
              title={
                <React.Fragment>
                  Advertising and <br />
                  Marketing Campaigns
                </React.Fragment>
              }
            />
            <ServiceCard
              description="Our creative agency is a team of professionals focused on helping your brand grow."
              title={
                <React.Fragment>
                  Creative Consulting <br />
                  and Development
                </React.Fragment>
              }
            />
          </div>
        </div>
      </section>
    );
  }
);

export default Services;
