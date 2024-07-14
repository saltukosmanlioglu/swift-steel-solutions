import React from "react";

import Button from "@/components/button";

const Contact: React.FunctionComponent = React.forwardRef<HTMLDivElement>(
  function Contact(props, ref) {
    const Title = ({ text }: { text: string | React.ReactNode }) => {
      return (
        <div className="flex items-end">
          <div className="inline-flex ml-auto after:bg-00006 after:w-80 after:h-0.5 after:ml-8 after:mt-2">
            {text}
          </div>
        </div>
      );
    };

    return (
      <section ref={ref} className="bg-gray py-24">
        <Title
          text={
            <p className="text-00006 text-md font-light text-right">
              Looking to make your mark? We&apos;ll help you turn
              <br />
              your project into a success story.
            </p>
          }
        />
        <div className="px-40 mt-20">
          <div className="text-center text-black font-thin">
            <p className="text-7xl">
              <strong>Ready to bring your</strong> ideas to{" "}
              <strong>life?</strong>
            </p>
            <p className="text-7xl mt-4 mb-24">We are here to help</p>
          </div>
          <div className="flex items-center justify-center">
            <Button text="CONTACT US" />
          </div>
        </div>
      </section>
    );
  }
);

export default Contact;
