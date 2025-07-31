import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Sidebar from '../Components/Sidebar';
import { SignIn, useUser } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top Navbar */}
      <nav className="w-full px-6 py-3 flex items-center justify-between border-b border-gray-200 bg-white z-30 relative">
        <img
          src={assets.holo}
          alt="logo"
          className="w-[250px] h-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 relative overflow-hidden">
        {/* Overlay for Mobile */}
        {sidebar && (
          <div
            className="fixed inset-0 bg-black/30 z-40 sm:hidden"
            onClick={() => setSidebar(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`absolute z-50 top-0 left-0 h-full w-60 bg-white border-r border-gray-200 transform transition-transform duration-300
          sm:relative sm:translate-x-0 sm:z-0
          ${sidebar ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#F4F7FB] z-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
