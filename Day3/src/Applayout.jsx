import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default AppLayout;