import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white p-14 fixed bottom-0">
      <div className="grid justify-items-center grid-cols-5 gap-6 pb-5 bg-black text-white">
        <div>
          <h1 className=" text-white text-2xl font-bold">Job Finder</h1>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src="/src/assets/Icons/Group 9969.png" alt="" />
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Company</h1>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Product</h1>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Support</h1>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Company</h1>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
          </div>
          
          <hr className="h-1" />

          <div className="flex justify-between py-5">
              <p> © 2023 Job Finder. All Rights Reserved</p>
              <p>Powered by Job Finder</p>
          </div>

    </div>
  );
};

export default Footer;
