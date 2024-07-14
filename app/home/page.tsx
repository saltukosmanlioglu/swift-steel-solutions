import Menu from "@/components/layout/menu";

import { AboutUs, Contact, Services } from "./sections";

export default function Home() {
  return (
    <div>
      {/* <Menu menuItems={[]} /> */}
      <AboutUs />
      <Services />
      {/* <Contact /> */}
      <div className="h-screen"></div>
    </div>
  );
}
