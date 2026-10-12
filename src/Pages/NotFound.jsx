import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 text-white">
      <p className="text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        404
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mt-4">Page Not Found</h1>
      <p className="text-muted mt-2">The page you're looking for doesn't exist or was moved.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center px-6 py-2 rounded-full text-lg font-semibold text-[#ffffff] btn-accent btn-glow focus-ring"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;