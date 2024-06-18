import Header from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="felx flex-col h-full">
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </div>
  );
};

export default HomeLayout;
