import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Home from "./component/Home";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Home/>
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;