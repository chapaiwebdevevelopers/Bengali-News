
import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center py-12">
          {/* Loading Spinner */}
          <span className="loading loading-spinner loading-lg text-red-600"></span>

          {/* Loading Text */}
          <h2 className="text-2xl font-bold mt-4">
            Please Wait...
          </h2>

          <p className="text-base-content/60 text-sm mt-1">
            We&apos;re preparing everything for you.
          </p>

          {/* Loading Progress */}
          <progress className="progress progress-error w-full mt-5"></progress>

          <span className="text-xs text-red-600 font-medium mt-2">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
