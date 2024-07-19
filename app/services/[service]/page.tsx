import Image from "next/image";
import { PiPlayCircle } from "react-icons/pi";

import Breadcrumb from "@/components/layout/breadcrumb";

export default function ServiceDetail() {
  return (
    <div>
      <Breadcrumb
        description={
          <p className="text-7xl font-thin">
            Metal <strong>Folding</strong>
          </p>
        }
        items={[{ text: "SERVICES" }, { text: "METAL FOLDING" }]}
        theme="smoke"
      />
      <div className="relative w-full h-[calc(450px)]">
        <Image
          alt="Metal Folding"
          className="object-cover !-z-0"
          fill
          src="/images/laser-cutting.jpg"
        />
        <div className="absolute h-[calc(450px)] w-full bg-black bg-opacity-80 z-20 flex items-center justify-center">
          <button>
            <PiPlayCircle size={128} />
          </button>
        </div>
      </div>
      <div className="bg-white px-40 py-24 text-black">
        <p className="text-7xl text-center font-thin">
          <strong>Metal</strong> Folding
        </p>
      </div>
    </div>
  );
}
