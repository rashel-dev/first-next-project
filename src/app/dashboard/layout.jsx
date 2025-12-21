import React from 'react';
import Dashboard from './page';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-4 min-h-screen'>
            {/* sidebar */}
            <div className='col-span-3 bg-gray-100 border-r-2 border-gray-200'>
                <h2>Navigation</h2>
                <div className='flex flex-col gap-2 mt-4 px-4'>
                    <Link className='text-center font-bold text-xl bg-gray-500 rounded py-2 hover:bg-gray-700 scale-105' href={"/dashboard/add-story"}>Add Story</Link>
                    <Link className='text-center font-bold text-xl bg-gray-500 rounded py-2 hover:bg-gray-700 scale-105' href={"/dashboard/my-profile"}>My Profile</Link>
                    <Link className='text-center font-bold text-xl bg-gray-500 rounded py-2 hover:bg-gray-700 scale-105' href={"/dashboard/settings"}>Settings</Link>
                </div>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;