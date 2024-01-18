import React from 'react';
import { Tooltip, Avatar, Typography, Button ,Checkbox , IconButton} from '@material-tailwind/react';

  import ListTasks from '@/widgets/cards/listtasks';
  import RecentTasks from '@/widgets/cards/recenttasks';
  import EndTasks from '@/widgets/cards/endtasks';
  

export default function UserTasks() {
  return (
    
<div class="flex flex-col items-start justify-center mt-4">
    
    <div class="flex flex-wrap justify-center sm:justify-start sm:gap-4">
        
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-2 shadow-md">
        <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-md left-4 -top-6" style={{ background: 'linear-gradient(to right, #0282e3, #33a1de)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6v6l4 2"/>
            </svg>

            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">App Development</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                  <p>Task 1</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                  <p>Task 1</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>1 Weeks Left</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Team Member</p>
                        <div className="flex items-center -space-x-3">
                                <Tooltip content="Natali Craig" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                                <Tooltip content="Tania Andrew" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">Progress</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>34%</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-2 shadow-md">
          <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-md left-4 -top-6" style={{ background: 'linear-gradient(to right, #0282e3, #33a1de)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Web Design</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                     <p>Task 1</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>3 Weeks Left</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Team Member</p>
                        <div className="flex items-center -space-x-3">
                                <Tooltip content="Natali Craig" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                                <Tooltip content="Tania Andrew" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">Progress</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>76%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-2 shadow-md">
          <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-md left-4 -top-6" style={{ background: 'linear-gradient(to right, #0282e3, #33a1de)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Leading Page</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                     <p>Task 1</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>2 Days Left</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Team Member</p>
                        <div className="flex items-center -space-x-3">
                                <Tooltip content="Natali Craig" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                                <Tooltip content="Tania Andrew" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">Progress</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>4%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-2 shadow-md">
            <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-md left-4 -top-6" style={{ background: 'linear-gradient(to right, #0282e3, #33a1de)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Business Compare</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                     <p>Task 1</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>1 Month Left</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Team Member</p>
                        <div className="flex items-center -space-x-3">
                                <Tooltip content="Natali Craig" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                                <Tooltip content="Tania Andrew" placement="bottom">
                                    <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">Progress</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>90%</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 items-start md:gap-6 lg:gap-2 gap-0 w-full">
        <EndTasks />

        <RecentTasks />
        <ListTasks />

    
        </div>

    </div>
</div>
  )
}

    
                    