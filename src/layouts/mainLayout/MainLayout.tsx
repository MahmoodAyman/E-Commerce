import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <div className="mt-7">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
