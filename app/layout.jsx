import Navbar from "@/components/Navbar";

import "@/assets/styles/global.css";

export const metadata = {
  title: "propertyPulse | Find The perfect  Rental",
  description: "Finder your dream property",
  keywords: "rental, find rentals,find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children} </main>
      </body>
    </html>
  );
};

export default MainLayout;
