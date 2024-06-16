import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="felx flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
