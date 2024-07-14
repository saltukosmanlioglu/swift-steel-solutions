import React from "react";
import Image from "next/image";

import { FaQuoteLeft } from "react-icons/fa";

const AboutUs = React.forwardRef<HTMLDivElement>(function AboutUs(props, ref) {
  return (
    <section ref={ref} className="bg-white text-black px-40">
      <div className="flex items-center justify-between">
        <div className="w-1/2 pr-12 py-24">
          <h1 className="font-medium text-7xl">
            Discover <br />
            Our <span className="font-thin">Studio</span>
          </h1>
          <p className="font-light text-md text-00006 py-8">
            At our design studio, we are a collective of talented individuals
            ignited by our unwavering passion for transforming ideas into
            reality. With a harmonious blend of diverse backgrounds and a vast
            array of skill sets, we join forces to create compelling solutions
            for our esteemed clients.
          </p>
          <p className="font-light text-md text-00006">
            Collaboration is at the heart of what we do. Our team thrives on the
            synergy that arises when unique perspectives converge, fostering an
            environment of boundless creativity. By harnessing our collective
            expertise, we produce extraordinary results that consistently
            surpass expectations.
          </p>
          <div className="mt-12 flex items-center">
            <div className="relative rounded-full h-24 w-24">
              <Image
                alt=""
                className="object-cover object-top rounded-full"
                fill
                src="/images/avatar-1.jpeg"
              />
              <div className="bg-orange absolute bottom-0 right-0 z-10 p-3 rounded-full">
                <FaQuoteLeft color="#000" size={12} />
              </div>
            </div>
            <div className="ml-12 font-thin text-lg">
              <p>
                <strong>Passionately Creating</strong> Desing Wonders:
              </p>
              <p>
                <strong>Unleashing</strong> Boundless Creativity
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 py-24">
          <div className="absolute left-0 animate-mil-lines">
            <svg
              width="250"
              viewBox="0 0 300 1404"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mil-lines [&_.mil-move]:stroke-black [&_.mil-move]:opacity-5"
            >
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M300 1175H0V1174H300V1175Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
                fillRule="evenodd"
              />
              <path
                className="mil-move"
                clipRule="evenodd"
                d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="relative w-3/4 h-[calc(100vh-144px)]"
            style={{ marginLeft: 125 }}
          >
            <Image
              alt=""
              className="object-cover"
              fill
              src="/images/photo-1.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
