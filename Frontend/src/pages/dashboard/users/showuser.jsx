import React from 'react'
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { usersTableData, } from "@/data";
import fetchShowData from '@/api/fetchShowData';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Loading from '@/layouts/loading';


// const UserItem = usersTableData.find(User => User.name === "John Michael");
// const userName = UserItem.name;
// const userImg = UserItem.img;
// const UserProjects = () => {
//   return (
//     <div className='w-full'>
//       <ol className='list-decimal '>
//         {UserItem.project.map(project => (
//           <li key={project.id} className='flex flex-col mb-2'>
//             <span>{project.projectName}</span>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };
// const UserTasks = () => {
//   return (
//     <div className='w-full'>
//       <ul className='list-decimal '>
//         {UserItem.task.map(task => (
//           <li key={task.id} className='flex flex-col mb-2'>
//             <span>{task.taskName}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const userEmail = UserItem.email;
// const userJob = UserItem.job;
// const userDate = UserItem.date;
export function ShowUser() {

//   const [dataLoaded, setDataLoaded] = useState(false);
//   const { id } = useParams();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchShowData( id  ,'user');
//         setUserData(data.user); 
//         setDataLoaded(true);
//       } catch (error) {
//         console.error('Error fetching user data', error);
//         setDataLoaded(true);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!dataLoaded) {
//     return <Loading />;
//   }

//   console.log(userData);

  return (
    <>
    {/* <div className='mt-6'>
        <div class="2xl:col-span-2 dark:border-gray-700 sm:p-3 dark:bg-gray-800 ml-4 mr-4">
        <Typography variant="h5" color="blue-gray" >
                User Informations
        </Typography>
      </div>
    </div>
      <div class="grid grid-cols-1 px-4 pt-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
      <div class="col-span-full xl:col-auto"> 
          <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="flex flex-col justify-center items-center">
                  <img class="relative mb-4 rounded-full w-48 h-48 sm:mb-0 xl:mb-4 2xl:mb-0" src={userData.img} alt="Jese picture"/>
                  <div class="text-center mt-6">
                  <Typography variant="h5" color="blue-gray" >
                  {userData.firstname+' '+userData.lastname}
                </Typography>   
                <Typography variant="paragraph" class="text-gray-700">
                  { userJob}
                </Typography>                         
                  </div>
              </div>
              
          </div>
          <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                  <div class="flex space-x-4 gap-6 justify-center">
                      <a  href={`${userData.facebook_url}`} target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-facebook fa-2x"></i>
                      </a>
                      <a href={`${userData.github_url}`} target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-github fa-2x"></i>
                      </a>
                      <a  href={`${userData.linkedin_url}`} target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-linkedin fa-2x"></i>
                      </a>
                  </div>
          </div>
      </div>

      <div class="col-span-2">
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            
            <div className='grid grid-cols-2  grid-rows-7' style={{ gridTemplateColumns: "200px 400px", width: "600px" }}>
                  <Typography variant="h6" color="blue-gray" className="mb-4" > 
                    User Email
                  </Typography>
                  <Typography variant="p"  className="mb-4 mr-30" >
                  <a href={`mailto:${userData?.email}`}>{userData?.email}</a>
                  </Typography>

                  <Typography variant="h6" color="blue-gray" className="mb-4 " >
                    User Phone
                  </Typography>
                  <Typography variant="p"  className="mb-4 ">
                  <a href={`tel:${userData?.phone}`}>{userData?.phone}</a>
                  </Typography>

                  <Typography variant="h6" color="blue-gray" className="mb-4 " >
                    User Projects
                  </Typography>
                  <Typography variant="p"  className="mb-4 ">
                    <UserProjects/>
                  </Typography>

                  <Typography variant="h6" color="blue-gray" className="mb-4 " >
                    User Tasks
                  </Typography>
                  <Typography variant="p"  className="mb-4 ">
                    <UserTasks />
                  </Typography>

                  <Typography variant="h6" color="blue-gray" className="mb-4 " >
                    Graduated University
                  </Typography>
                  <Typography variant="p"  className="mb-4 ">
                    {userData.graduation_university}
                  </Typography>
                  
                  <Typography variant="h6" color="blue-gray" className="mb-4 " >
                    Graduated At
                  </Typography>
                  <Typography variant="p"  className="mb-4 ">
                    {userData.graduate_at}
                  </Typography>
            </div>
            
        </div>
        
      </div>
    </div> */}
</>
  )}