
'use client'
import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl border border-red-100">
        <div className="card-body items-center text-center py-12 sm:py-16">
          {/* 404 Number */}
          <h1 className="text-8xl sm:text-9xl font-black text-red-600 tracking-tighter">
            404
          </h1>

          {/* Divider */}
          <div className="w-20 h-1 bg-red-600 rounded-full my-2"></div>

          {/* Message */}
          <h2 className="text-2xl sm:text-3xl font-bold text-base-content">
            Page Not Found!
          </h2>

          <p className="text-base-content/60 max-w-sm mt-2 leading-relaxed">
            Sorry, the page you are looking for doesn't exist or may have been
            moved to another location.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
            <Link
              href="/"
              className="btn bg-red-600 hover:bg-red-700 text-white border-none px-8"
            >
              <span className="text-lg">←</span>
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white px-8"
            >
              Go Back
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-base-content/40 mt-8">
            Error Code: 404 | Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
