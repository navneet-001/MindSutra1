import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

// Home Page Sections
import Hero from "../Components/LandingPage/Hero";
import HowItWorks from "../Components/LandingPage/HowItWorks";
import Categories from "../Components/LandingPage/Categories";
import TopFreelancers from "../Components/LandingPage/TopFreelancers";
import WhyChooseUs from "../Components/LandingPage/WhyChooseUs";
import LatestJobs from "../Components/LandingPage/LatestJobs";
import Payments from "../Components/LandingPage/Payments";
import Testimonials from "../Components/LandingPage/Testimonials";
import Stats from "../Components/LandingPage/Stats";
import CTA from "../Components/LandingPage/CTA";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['Poppins'] text-white">
      
      

      {/* 1️⃣ Hero Section */}
      <Hero />

      {/* 2️⃣ How It Works */}
      <HowItWorks />

      {/* 3️⃣ Categories */}
      <Categories />

      {/* 4️⃣ Top Freelancers */}
      <TopFreelancers />

      {/* 5️⃣ Why Choose Us */}
      <WhyChooseUs />

      {/* 6️⃣ Latest Jobs */}
      

      {/* 7️⃣ Secure Payments */}
      

      {/* 8️⃣ Testimonials */}
      <Testimonials />

      {/* 9️⃣ Platform Stats */}
      <Stats />

      {/* 🔟 Call To Action */}
      <CTA />

      
    </div>
  );
};

export default HomePage;
