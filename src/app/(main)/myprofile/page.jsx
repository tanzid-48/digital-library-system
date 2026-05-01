import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const MyProfilePage = async () => {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  const defaultAvatar =
    "https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=580&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Your Profile
          </h1>
          <p className="text-center text-gray-500 -mt-6 mb-8">
            Welcome, {user.name}
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <Image
              src={user.image || defaultAvatar}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-purple-400"
            />
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <span className="text-gray-400 font-medium w-24">Name</span>
              <span className="text-gray-700 font-semibold">{user.name}</span>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <span className="text-gray-400 font-medium w-24">Email</span>
              <span className="text-gray-700 font-semibold">{user.email}</span>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <span className="text-gray-400 font-medium w-24">Photo</span>
              <span className="text-gray-700 text-xs break-all  ">
                {user.image}
              </span>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <span className="text-gray-400 font-medium w-24">Joined</span>
              <span className="text-gray-700 font-semibold">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <Link
              href="/myprofile/update"
              className="btn bg-green-500 text-white rounded-xl w-full mt-4"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
