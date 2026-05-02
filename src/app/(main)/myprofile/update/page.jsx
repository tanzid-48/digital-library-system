"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const UpdateProfilePage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name && !image) {
      toast.error("Please fill at least one field");
      return;
    }

    await authClient.updateUser({
      name,
      image,
    });
    toast.success("Profile updated successfully!");
    router.push("/myprofile");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Update Profile</h1>

        <input
          type="text"
          placeholder="Enter name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter image URL"
          className="input input-bordered w-full"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
          className="btn bg-green-500 text-white rounded-2xl w-full"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
