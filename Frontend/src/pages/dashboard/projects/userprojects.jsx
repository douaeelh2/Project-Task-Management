import React from 'react';
import { Tooltip, Avatar, Typography, Button, Checkbox, IconButton } from '@material-tailwind/react';

import ListProjects from '@/widgets/cards/listtasks';
import RecentProjects from '@/widgets/cards/recenttasks';
import EndProjects from '@/widgets/cards/endtasks';
import { Project } from '@/widgets/cards/project';

export default function UserProjects() {
  return (
    <div className=" flex flex-col items-center gap-8 justify-center mt-4">

    <div class=" bg-gray-100 flex items-center justify-center mt-6">
    <div class=" bg-white p-6 rounded-lg shadow-sm">
        <div class=" flex justify-between items-center p-3">
        <h2 class="text-xl font-semibold">My Projects</h2>
        </div>
    
        <div class="w-full flex justify-end p-1 mb-4">
            <div class="relative w-full ">
                <input type="text" class="w-1/3  bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300" placeholder="Search..." />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6" >
              <Project status="in progress" name="E-commerce Platform Development" description="Build and deploy backend for the e-commerce application, including server setup and database integration." />
              <Project status="pending" name="User Feedback Collection System" description="Gather requirements from stakeholders and design a system to collect user feedback for the project." />
              <Project status="completed" name="Mobile App UI Redesign" description="Create visually appealing user interface components for the mobile application, focusing on improving the overall user experience." />
              
              <Project status="in progress" name="E-commerce Platform Enhancement" description="Continue deploying backend for the e-commerce application, optimizing server performance and database efficiency." />
              <Project status="pending" name="Client Meeting Scheduler" description="Schedule and conduct meetings with clients to collect detailed requirements for the upcoming project." />
              <Project status="completed" name="Website Redesign Project" description="Revamp the UI components of the website, ensuring a modern and user-friendly design." />
            </div>

    </div>
    </div>

    </div>
  );
}
