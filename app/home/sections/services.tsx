import React from "react";

const Services: React.FunctionComponent = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <section ref={ref}>
        <div></div>
      </section>
    );
  }
);

export default Services;
