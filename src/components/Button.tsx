import React from 'react';

const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#48208A] shadow-[0px_0px_12px_#8C45FF]">
      <div className="absolute inset-0 ">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image: lineear-gradient(to_top,black,transparent)]"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
