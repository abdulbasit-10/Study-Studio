// import React from "react";
// import LeftSideBar from "../Documentation/LeftSideBar";
// import Header from "../Documentation/Header";
// import RightSideBar from "../Documentation/RightSideBar";
// import Intro from "../Documentation/Intro";
// import HowItWorks from "./HowItWorks";
// import BuyingGuide from "./BuyingGuide";

// const Documentation = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-white text-gray-800">
//       {/* ======= Header ======= */}
//       <Header />

//       {/* ======= Main Layout ======= */}
//       <div className="flex flex-1">
//         {/* ==== Left Sidebar ==== */}
//         <aside className="hidden lg:block w-64 border-r border-gray-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50">
//           <LeftSideBar />
//         </aside>

//         {/* ==== Main Content ==== */}
//         <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
//           <div className="max-w-4xl mx-auto space-y-16">
//             <Intro />
//             <HowItWorks />
//             <BuyingGuide />
//           </div>
//         </main>

//         {/* ==== Right Sidebar ==== */}
//         <aside className="hidden xl:block w-64 border-l border-gray-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50 p-4">
//           <RightSideBar />
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Documentation;





import React from "react";
import { Routes, Route } from "react-router-dom";
import LeftSideBar from "../Documentation/LeftSideBar";
import Header from "../Documentation/Header";
import RightSideBar from "../Documentation/RightSideBar";
import Intro from "../Documentation/Intro";
import HowItWorks from "./HowItWorks";
import BuyingGuide from "./BuyingGuide";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50">
          <LeftSideBar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="buying-guide" element={<BuyingGuide />} />
            </Routes>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-64 border-l border-gray-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50 p-4">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
};

export default Documentation;
