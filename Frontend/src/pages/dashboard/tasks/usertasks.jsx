import React from 'react';
import { Tooltip, Avatar, Typography, Button, Checkbox, IconButton } from '@material-tailwind/react';

import ListTasks from '@/widgets/cards/listtasks';
import RecentTasks from '@/widgets/cards/recenttasks';
import EndTasks from '@/widgets/cards/endtasks';
import { Task } from '@/widgets/cards/task';

export default function UserTasks() {
  return (
    <div className="flex flex-col items-start gap-8 justify-center mt-4">

    <div class="bg-gray-100 flex items-center justify-center mt-6">
    <div class=" bg-white p-6 rounded-lg shadow-sm">
        <div class="w-full flex justify-between items-center p-3">
        <h2 class="text-xl font-semibold">My Tasks</h2>
        </div>
    
        <div class="w-full flex justify-end p-1 mb-4">
            <div class="relative w-full ">
                <input type="text" class="w-1/4  bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300" placeholder="Search..." />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
                <Task status="in progress" name="Deploying Backend" description="Set up server and database for the e-commerce application." />
                <Task status="pending" name="Gathering Requirements" description="Meet with stakeholders to collect requirements for the Task." />
                <Task status="completed" name="Designing UI Components" description="Create visually appealing user interface components for the application." />
                    
                <Task status="in progress" name="Deploying Backend" description="Set up server and database for the e-commerce application." />
                <Task status="pending" name="Gathering Requirements" description="Meet with stakeholders to collect requirements for the Task." />
                <Task status="completed" name="Designing UI Components" description="Create visually appealing user interface components for the application." />  
            </div>
    </div>
    </div>
      <Typography variant="h4" className='ml-5'>
        Activities
        </Typography>

      <div class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  items-center gap-4 w-[98%] mx-auto">
        
        <EndTasks />
        <RecentTasks />
        <ListTasks />
        </div>


    </div>
  );
}
