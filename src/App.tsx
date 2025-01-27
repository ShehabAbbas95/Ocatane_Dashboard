import { RouterProvider } from "react-router-dom";

import router from "./router";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundryFallback from "./components/generic/ErrorBoundaryFallback";

function App() {
  return (
    <ErrorBoundary
      fallback={
        <div>
          <ErrorBoundryFallback />
        </div>
      }
    >
      <RouterProvider router={router} />
      <ToastContainer position={"top-right"} autoClose={2000} theme="colored" />
    </ErrorBoundary>
  );
}

export default App;
