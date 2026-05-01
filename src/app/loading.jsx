import React from "react";

const Loading = () => {
  return (
    <div className="space-y-3 p-4 animate-pulse">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="h-10 bg-purple-100 rounded-xl"
        ></div>
      ))}
    </div>
  );
};

export default Loading;