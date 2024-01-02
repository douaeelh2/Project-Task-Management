import React from 'react'
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

import{
  ShowDetails,
} from "@/widgets/layout/ShowDetails";
import { Link } from "react-router-dom";
import { usersTableData, } from "@/data";
import fetchShowData from '@/api/fetchShowData';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Loading from '@/layouts/loading';


const UserItem = usersTableData.find(User => User.name === "John Michael");
const userName = UserItem.name;
const userImg = UserItem.img;
const UserProjects = () => {
  return (
    <div className='w-full'>
      <ol className='list-decimal p-1'>
        {UserItem.project.map(project => (
          <li key={project.id} className='flex flex-col my-2'>
            <span>{project.projectName}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
const UserTasks = () => {
  return (
    <div className='w-full'>
      <ul className='list-decimal p-1'>
        {UserItem.task.map(task => (
          <li key={task.id} className='flex flex-col my-2'>
            <span>{task.taskName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const userEmail = UserItem.email;
const userJob = UserItem.job;
const userDate = UserItem.date;

export function ShowUser() {

  const [dataLoaded, setDataLoaded] = useState(false);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShowData( id  ,'user');
        setUserData(data.user); 
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching user data', error);
        setDataLoaded(true);
      }
    };

    fetchData();
  }, [id]);

  if (!dataLoaded) {
    return <Loading />;
  }


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
    <Card className='overflow-x-scroll'>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6 border-b-2 mb-2"
      >
        <div className="flex items-center justify-between gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-1">
          User Informations
          </Typography>      
        </div>      
      </CardHeader>
      <CardBody className="overflow px-0 pt-0 pb-2">
      <div className="flex flex-wrap">
        <div className="w-1/4">
          <div className="w-full pl-10">
            <Avatar
              src={userData.img} 
              alt={userName}
              size="xxl"
              variant="circular"
              className='m-2 justify-center'
            />
          </div>
        </div>
        <div class="w-3/4">
          <div className="flex flex-wrap mx-5 mb-5">
            <ShowDetails title={"User Name"} data={userData.firstname + ' ' +userData.lastname } className="w-1/2 my-2" /> 
            <ShowDetails title={"User Email"} data={userData.email} className="w-1/2 my-2 "/> 
            <ShowDetails title={"User Job"} data={userData.designation} className="w-1/2 my-2 "/> 
            <ShowDetails title={"Phone Number"} data={userData.phone} className="w-1/2 my-2 "/> 
            <ShowDetails title={"User Projects"} data={<UserProjects/>} className="w-1/2 my-2  border-b-2"/> 
            <ShowDetails title={"User Tasks"} data={<UserTasks />} className="w-1/2 my-2  border-b-2"/> 
            <ul className='flex flex-wrap w-full justify-around p-1'>
                <li className='flex flex-col my-2'><ShowDetails title={"Graduated University"} data={userData.graduation_university}/></li>
                <li className='flex flex-col my-2'><ShowDetails title={"Graduated At"} data={userData.graduate_at}/></li>
                <li className='flex flex-col my-2'><ShowDetails title={"Employed At"} data={userData.employed_at}/></li>
            </ul>
          </div>          
        </div>
      </div>        

      </CardBody>
    </Card>
    
  </div>
  )
}

