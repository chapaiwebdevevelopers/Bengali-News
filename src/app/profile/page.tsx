
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">You are not logged in</h2>
            <p className="text-base-content/60">
              Please log in to view your profile.
            </p>
            <button
              onClick={() => router.push("/login")}
              className="btn btn-primary mt-3 w-full"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const initials =
    user.name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "U";

  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Not available";

  return (
    <main className="min-h-screen bg-base-200/60 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Account Settings
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-base-content/60">
            Manage your personal information and account details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Profile Card */}
          <section className="card h-fit overflow-hidden border border-base-300 bg-base-100 shadow-sm">
            <div className="h-28 bg-gradient-to-r from-primary to-secondary" />

            <div className="card-body items-center pt-0 text-center">
              <div className="-mt-16 rounded-full border-4 border-base-100">
                <div className="avatar placeholder">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary text-primary-content">
                    <span className="text-3xl font-bold">
                      {initials}
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-bold">
                {user.name || "Unknown User"}
              </h2>

              <p className="break-all text-sm text-base-content/60">
                {user.email}
              </p>

              <div className="mt-3">
                {user.emailVerified ? (
                  <span className="badge badge-success gap-1">
                    ✓ Verified Account
                  </span>
                ) : (
                  <span className="badge badge-warning gap-1">
                    ! Email Not Verified
                  </span>
                )}
              </div>

              <div className="divider my-2" />

              <div className="w-full text-left">
                <p className="text-xs uppercase tracking-wider text-base-content/50">
                  Member Since
                </p>
                <p className="mt-2 font-medium">
                  {joinedDate}
                </p>
              </div>

              <Link
                href="/profile/edit"
                className="btn btn-primary mt-5 w-full"
              >
                ✎ Edit Profile
              </Link>
            </div>
          </section>

          {/* Details */}
          <div className="space-y-6 lg:col-span-2">

            <section className="card border border-base-300 bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-xl">
                  Personal Information
                </h2>

                <p className="text-sm text-base-content/60">
                  Your registered account details.
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="mb-3 text-sm text-primary">
                      👤 Full Name
                    </p>
                    <p className="break-words font-semibold">
                      {user.name || "Not provided"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="mb-3 text-sm text-primary">
                      ✉ Email Address
                    </p>
                    <p className="break-all font-semibold">
                      {user.email || "Not provided"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="mb-3 text-sm text-primary">
                      🛡 Email Status
                    </p>
                    <p className="font-semibold">
                      {user.emailVerified ? "Verified" : "Not Verified"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-base-300 p-4">
                    <p className="mb-3 text-sm text-primary">
                      📅 Account Created
                    </p>
                    <p className="font-semibold">
                      {joinedDate}
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Account ID */}
            <section className="card border border-base-300 bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-lg">
                  Account Information
                </h2>

                <p className="text-sm text-base-content/60">
                  Your unique account identifier.
                </p>

                <div className="mt-2 flex flex-col gap-3 rounded-xl bg-base-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="mb-1 text-xs text-base-content/60">
                      User ID
                    </p>
                    <code className="break-all text-sm">
                      {user.id}
                    </code>
                  </div>

                  <button
                    className="btn btn-outline btn-sm shrink-0"
                    onClick={() =>
                      navigator.clipboard.writeText(user.id)
                    }
                  >
                    Copy ID
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
