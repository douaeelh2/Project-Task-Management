import React from 'react';
import { Tooltip, Avatar, Typography, Button ,Checkbox , IconButton} from '@material-tailwind/react';

export default function ListTasks() {
  return (
    <div class="my-10 bg-white p-8 rounded-3xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center">
                <div class="flex items-center mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-check h-5 w-5 text-green-600" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                    </svg>
                </div>

                    <h4 class="ml-4 text-xl font-bold text-navy-700 dark:text-white">Tasks List</h4>
                    
                </div>
               
        </div>
        <Typography variant="p" className="font-normal text-gray-600 mb-4">
            Hello, here are your latest tasks
        </Typography>  

        <div
        id="tasks"
        style={{
            maxHeight: "270px",
            overflow: "hidden",
        }}
        >
        <div
            style={{
            maxHeight: "263px",
            overflowY: "auto",
            marginRight: "-17px",
            paddingRight: "17px",
            }}
        >          
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                                                
                    </div>
                    <Typography variant="small" className="font-normal text-gray-600" style={{ textDecoration: 'line-through' }}>
                    Creating dynamic website
                    </Typography>              
                    
                    </div>
                
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                                                
                    </div>
                    <Typography variant="small" className="font-normal text-gray-600" style={{ textDecoration: 'line-through' }}>
                    Building applications for iOS
                    </Typography>              
                    
                    </div>
                
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 border-l-4 py-1  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class="inline-flex items-center space-x-2">
                <Checkbox
                color="green"
                ripple={false}
                className="h-4 w-4 rounded-full border-gray-900/20 transition-all hover:scale-105 hover:before:opacity-0"
                />                    
                    <Typography variant="small" className="font-normal text-gray-600">
                    Designing  systems
                    </Typography>
                </div>
                
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 border-l-4 py-1  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class="inline-flex items-center space-x-2">
                <Checkbox
                color="green"
                ripple={false}
                className="h-4 w-4 rounded-full border-gray-900/20 transition-all hover:scale-105 hover:before:opacity-0"
                />                         
                    <Typography variant="small" className="font-normal text-gray-600">
                    Creating static website
                    </Typography>
                </div>
                
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 border-l-4 py-1 border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class="inline-flex items-center space-x-2">
                <Checkbox
                color="green"
                ripple={false}
                className="h-4 w-4 rounded-full border-gray-900/20 transition-all hover:scale-105 hover:before:opacity-0"
                />                         
                    <Typography variant="small" className="font-normal text-gray-600">
                    Add Progress Track
                    </Typography>
                </div>
                
            </div>

            <div id="task" class="flex justify-between items-center border-b border-slate-200 border-l-4 py-1 border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class="inline-flex items-center space-x-2">
                <Checkbox
                color="green"
                ripple={false}
                className="h-4 w-4 rounded-full border-gray-900/20 transition-all hover:scale-105 hover:before:opacity-0"
                />                         
                    <Typography variant="small" className="font-normal text-gray-600">
                    Add Progress Track
                    </Typography>
                </div>
                
            </div>

            <div id="task" class="flex justify-between items-center border-b border-slate-200 border-l-4 py-1 border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class="inline-flex items-center space-x-2">
                <Checkbox
                color="green"
                ripple={false}
                className="h-4 w-4 rounded-full border-gray-900/20 transition-all hover:scale-105 hover:before:opacity-0"
                />                         
                    <Typography variant="small" className="font-normal text-gray-600">
                    Add Progress Track
                    </Typography>
                </div>
                
            </div>
        </div>
        
    </div>
    <div className="flex justify-end mt-4">
        <Button variant="gradient" color="green" size="sm">
            completed
        </Button>   
        </div>
 </div>
  )
}
