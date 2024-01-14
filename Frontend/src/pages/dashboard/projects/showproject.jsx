import React from 'react'
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import{ShowDetails} from "@/widgets/layout/ShowDetails";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon,Cog6ToothIcon  } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";
import ProjectData from "@/data/project-data";
import Loading from "@/layouts/loading";
import DeleteData from "@/api/DeleteData";


export function ShowProject() {
  const { id } = useParams();
  const {projectdata,loader}=ProjectData(id);
  const datecreatedat = new Date(projectdata.created_at).toLocaleDateString();
  const dateupdatedat = new Date(projectdata.updated_at).toLocaleDateString();
  const [success,setSuccess] = React.useState(null);

  var infosproject=[
    {
      title:"Project Name",
      value:projectdata.name
    },
    {
      title:"Category",
      value:projectdata.category
    },
    {
      title:"CreatedAt",
      value:datecreatedat
    },
    {
      title:"UpdatedAt",
      value:dateupdatedat
    },
    {
      title:"Description",
      value:projectdata.description
    },
    {
      title:"Status",
      value:projectdata.status
    },
   
    
  ];

  const handleDeleteProject = async (id) => {
    try {
      const response = await DeleteData(id,'project');
      setSuccess(response.success);
      console.log("salma")
    } catch (error) {
      console.error('Error deleting project', error);
    }
  };

  const Members = () => {
    return (
      <div className='w-full mb-5 px-9 md:px-10'>
        <Typography variant="h6" color="blue-gray" className="mb-1 ml-3">
          Members
        </Typography>
        <ul className='flex flex-wrap justify-between p-1 w-3/4  ml-20'>
          {projectdata.users.map(member => 
            <li key={member.id} className='flex flex-col my-2 ' style={{ alignItems: 'center' }}>
              <Avatar
                    src={member.img} 
                    alt={member.lastname} 
                    size="lg"
                    variant="circular"
                    className='m-2 justify-center'
                  />
              <span>{member.firstname} {member.lastname}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }; 

  if (loader===true) return <Loading />
  return (
    <div className="mt-10 mb-8 flex flex-col gap-12">  
    <Card>
        <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex items-center justify-between p-4 border-b-2 mb-2"
        >
        <div className="flex items-center justify-between w-full">
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Project Informations
          </Typography>   
          <div className="flex items-center">
            <div className="ml-auto">
              <Link to="../projects/edit" className="ml-2">
              <Button variant="gradient" color="black">
                Edit
              </Button>
              </Link>
              <Link to="../projects/table" className="ml-2">
                <Button 
                  variant="gradient" 
                  color="red"
                  onClick={() => handleDeleteProject(id)}>
                  Delete
                </Button>
              </Link>
            </div>
          </div>   
        </div>      
      </CardHeader>

      <CardBody className="overflow-x-auto px-0 sm:px-6 py-4">
        <div class="flex flex-wrap  mb-5 px-6 md:px-10">
          {infosproject.map(e=>
            <ShowDetails 
              key={e.title} 
              title={e.title} 
              data={e.value} 
              className="w-1/2 mb-1 px-3 py-3" 
            /> 
          )}
        </div>
        <Members/>
      </CardBody>
    </Card> 
  </div>
  )
}
