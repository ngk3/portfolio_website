import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation fromNotFound={true} />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
