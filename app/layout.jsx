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
        <div>{children} </div>
      </body>
    </html>
  );
};

export default MainLayout;
