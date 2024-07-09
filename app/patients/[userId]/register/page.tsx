import Image from "next/image";
import React from "react";

const register = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <Image
          src="assect/icon/logo.svg"
          height={1000}
          width={1000}
          alt="logo"
          className="mb-12 h-10 w-fit"
        />
        <div className="sub-container max-w-[860px] flex-1 flex-col py-18"></div>
      </section>
    </div>
  );
};

export default register;
