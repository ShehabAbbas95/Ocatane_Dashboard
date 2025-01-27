import { Link } from "react-router-dom";
import ErrorBoundryFallbackContainer from "./ErrorBoundaryFallback.style";

const ErrorBoundryFallback = () => {
  return (
    <ErrorBoundryFallbackContainer className="fallback_wrapper">
      <h1>
        {!navigator?.onLine
          ? "Network Error: Check your internet connection!"
          : "Something went wrong!"}
      </h1>

      <Link to="/login">Go to Home</Link>
    </ErrorBoundryFallbackContainer>
  );
};

export default ErrorBoundryFallback;
