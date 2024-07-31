import React from 'react';
import { FaInbox, FaPaperPlane } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { MdPersonSearch, MdViewList, MdBarChart } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Sidebar = ({ setActiveContent }) => {
  return (
    <div className="bg-[#121212] text-white w-16 flex flex-col items-center py-4 gap-3 ">
      <GoHomeFill className="mb-6" size={24} onClick={() => setActiveContent('home')} />
      <MdPersonSearch className="mb-6" size={24} onClick={() => setActiveContent('search')} />
      <IoMail className="mb-6" size={24} onClick={() => setActiveContent('mail')} />
      <FaPaperPlane className="mb-6" size={24} onClick={() => setActiveContent('send')} />
      <MdViewList className="mb-6" size={24} onClick={() => setActiveContent('list')} />
      <FaInbox className="mb-6" size={24} onClick={() => setActiveContent('inbox')} />
      <MdBarChart className="mb-6" size={24} onClick={() => setActiveContent('chart')} />
      <div className="mt-auto mb-4 bg-green-600 rounded-full w-10 h-10 items-center justify-center flex">AS</div>
    </div>
  );
};

export default Sidebar;
