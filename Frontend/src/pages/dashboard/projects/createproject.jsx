import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Option,
  Button,
  Alert,
} from "@material-tailwind/react";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon  } from "@heroicons/react/24/solid";
import axios from "axios";
import AuthorsTableData from "@/data/authors-table-data";
import UsersTableData from "@/data/users-data";
import Loading from "@/layouts/loading";
import CreateData from "@/api/CreateData";
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';
import SuccessPopup from "@/layouts/SuccessPopup";
export function CreateProject() {
  
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState({
    value:false,
    message:null
  });
  const { authorsTableData, dataLoaded } = UsersTableData();
  const list=authorsTableData.map(user => ({
    value: user.id,  // Use a unique identifier as the value
    label: `${user.firstname} ${user.lastname}`
  }))
  const [Projectdata,setProjectdata]=React.useState({
    name:'',
    category:'',
    datestart:'',
    dateend:'',
    id1:'',
    id2:'',
    id3:'',
    id4:'',
    description:''
  })
  const [iddata,setiddata]=React.useState([])

 function handleidchange(selectedOptions){

  if (selectedOptions.length <= 4) {

    setiddata(selectedOptions)
    const selectedIds = selectedOptions.map(option => option.value);
    setProjectdata(prevState => ({
      ...prevState,
      id1: selectedIds[0] || '',
      id2: selectedIds[1] || '',
      id3: selectedIds[2] || '',
      id4: selectedIds[3] || ''
    }))
  } 
  console.log(Projectdata)
 }
  const handlechanges=(e)=>{
    const {name,value}=e.target
    setProjectdata({
      ...Projectdata,
      [name]:value
    })
    console.log(value)
  }

  const handlechangeselect=(value,index)=>{
    const x="id"+index
    setProjectdata({
      ...Projectdata,
      [x]:value
    })
  }

  const handlecreateproject =async()=>{
      try{
        const project=await CreateData(Projectdata,'project')
        setError(null)
        setSuccess({
          value:true,
          message:'Successfully added project.'
        }) 
      }

      catch(error){
        if (error.response && error.response.data && error.response.data.errors) {
          const errorMessages = Object.values(error.response.data.errors);
          setError(errorMessages[0]);
          console.log(errorMessages[0]);
        } else {
          if (!Projectdata.datestart) {
            console.error('Error: Datestart is null');
          }
          console.error('Failed to create project:', error);
        }
      }
  }
  
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#DDDDDE ' : 'white',
      color:'gray',
      outline: 'none',
    }),
  };

  const closepopup=()=>{
      navigate('/admin/projects');
  }

 if(dataLoaded) return <Loading/>
  return (

  <div className="mt-12 mb-8 flex flex-col gap-12">
    <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
              <div class="ml-6 mr-6">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 flex items-center justify-between p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                    Create New Project
                    </Typography>
                  </div>
                </CardHeader>

                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                  <form className="mx-auto max-w-xl ">
                  <div class="grid grid-cols-6 gap-6">
                    {error && (
                    <div className="col-span-6 sm:col-full mt-4 mb-4">
                    <Alert variant="ghost" className="bg-red-500 bg-opacity-20 text-red-700">
                    <span>{error}</span>
                    </Alert>
                    </div>
                    )}
                    {success.value && <SuccessPopup closepopup={closepopup} message={success.message}/>}
                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                        Name
                      </Typography>
                      <Input
                        name="name"
                        value={Projectdata.name}
                        onChange={handlechanges}
                        size="sm"
                        placeholder="Project Name"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                        Category
                      </Typography>
                      <Input
                        name="category"
                        value={Projectdata.category}
                        onChange={handlechanges}
                        size="sm"
                        placeholder="Project Category"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Start Date
                    </Typography>
                    <Input
                      name="datestart"
                      value={Projectdata.datestart}
                      onChange={handlechanges}
                      size="md"
                      type="date"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                        End Date
                      </Typography>
                      <Input
                        name="dateend"
                        value={Projectdata.dateend}
                        onChange={handlechanges}
                        size="md"
                        type="date"
                        placeholder="Date"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      />
                    </div>

                  </div>

                  <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3 mt-6">
                      Choose  Four Members 
                      </Typography>
                     
                      <Select
                        styles={customStyles}
                        value={iddata}
                        onChange={handleidchange}
                        options={list}
                        isSearchable={true}
                        isMulti={true}
                        placeholder="Search for a member..."
                      />
                    </div>
                  <Typography variant="h6" color="blue-gray" className="mb-3 mt-6">
                       Description
                  </Typography>             
                  <Textarea 
                    name="description"
                    label="Project Description" 
                    value={Projectdata.description}
                    onChange={handlechanges}
                    />

                  <div class="col-span-6 sm:col-full ml-4 mt-4 mb-4">
                      <Button 
                        variant="gradient" 
                        color="black"
                        onClick={handlecreateproject} >
                        Create Project
                      </Button>  
                  </div>
                </form>
                </CardBody>
              </div>
          </Card> 
    </div>

  </div>
  );
}

export default CreateProject;