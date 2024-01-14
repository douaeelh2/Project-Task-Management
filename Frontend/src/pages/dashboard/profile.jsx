import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  Input,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Alert
} from "@material-tailwind/react";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { FaPhone, FaEnvelope, FaMapMarker,FaGraduationCap,FaBriefcase } from 'react-icons/fa';
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

export function Profile({ isAuthenticated, user, isAdmin }) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [userImage, setUserImage] = useState(user?.img);



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const imageURL = URL.createObjectURL(file);
        console.log(file);
        setUserImage(imageURL);
      };

      const [Data, setData] = useState({
        firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
          designation: user.designation,
          facebook_url: user.facebook_url,
          github_url: user.github_url,
          linkedin_url: user.linkedin_url,
          graduation_university : user.graduation_university,
          graduate_at: user.graduate_at,
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
      });

        const [formData, setFormData] = useState({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
          designation: user.designation,
          facebook_url: user.facebook_url,
          github_url: user.github_url,
          linkedin_url: user.linkedin_url,
          graduation_university : user.graduation_university,
          graduate_at: user.graduate_at,
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });

        const [error, setError] = useState(null);
        const [success, setSuccess] = useState(null);

              

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => {
              console.log(`Updating ${name} to:`, value);
              return { ...prevData, [name]: value };
            });
          };
          
          
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const jwtCookie = Cookies.get('jwt');
            if (jwtCookie) {
                const newFormData = selectedFile
                ? { ...formData, img: selectedFile }
                : formData;
                console.log(newFormData.img);
              const response = await axios.put('http://localhost:8000/api/user/profile/edit', newFormData, {
                headers: {
                  Authorization: `Bearer ${jwtCookie}`,
                },
              });
              if(response.data.success){
                setData(formData);
                setError(null);
                setSuccess(response.data.success);
              }
            } 
          } catch (error) {
            setError(error.response.data.error);
            setSuccess(null);
            console.error('Erreur lors de la mise à jour du profil:', error);
          }
        };

  return (
    <>
      <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">

      <div class="col-span-full xl:col-auto">
        
          <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="flex flex-col justify-center items-center">
          <label class="relative top-12  z-10 left-57 shadow h-10 w-10 rounded-full bg-white ml-40 hover:shadow-lg cursor-pointer">
                <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                />
                <i class="fa fa-pencil ml-3 mt-3 text-gray-600 hover:text-gray-900"></i>
            </label>
                  <img class="relative mb-2 rounded-full w-48 h-48 sm:mb-0 xl:mb-4 2xl:mb-0" src={userImage} alt="user img"/>
                  <div class="text-center mt-4">
                  <Typography variant="h5" color="blue-gray" >
                  {Data.firstname}{' '} {Data.lastname}
                </Typography>   
                <Typography variant="paragraph" class="text-gray-700">
                {Data.designation}
                </Typography>                         
                  </div>
              </div>
          </div>
          <div class="p-3 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className=" items-center gap-2 ">
            <div className="text-center flex items-center gap-6 mb-3">
                <FaPhone className="text-md" style={{ transform: 'scaleX(-1)', color: 'gray' }} />
                <p>{Data.phone}</p>
            </div>

                
                <div className="text-center fl flex gap-6 items-center mb-3">
                    <FaEnvelope className="text-md" style={{ color: 'gray' }} />
                    <p>{Data.email}</p>
                </div>

                <div className="text-center  fl flex gap-6 items-center mb-3 ">
                    <FaBriefcase className="text-md " style={{ color: 'gray' }}/>
                    <p>{Data.graduate_at}</p>
                </div>    
                
                <div className="text-center  fl flex gap-6 items-center mb-3 ">
                    <FaGraduationCap className="text-xl " style={{ color: 'gray' }}/>
                    <p>{Data.graduation_university} </p>                    
                </div>
                
                           
            </div>

          </div>
          <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="flex space-x-4 gap-6 justify-center">
                      <a  href={`${Data.facebook_url}`} target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-facebook fa-2x"></i>
                      </a>
                      <a href={`${Data.github_url}`} target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-github fa-2x"></i>
                      </a>
                      <a  href={`${Data.linkedin_url}`} target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-linkedin fa-2x"></i>
                      </a>
                  </div>
          </div>
      </div>

      <div class="col-span-2">
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <Typography variant="h4" color="blue-gray" className="mb-4 ">
               Settings
            </Typography>
            {error && (
            <div className="mb-4">
            <Alert variant="ghost" className="bg-red-500 bg-opacity-20 text-red-700">
            <span>{error}</span>
            </Alert>
            </div>
            )}
             {success && (
            <div className="mb-4">
            <Alert variant="ghost" className="bg-green-500 bg-opacity-20 text-green-700">
            <span>{success}</span>
            </Alert>
            </div>
            )}
                  <div class="grid grid-cols-6 gap-6">

                        <div class="col-span-6 sm:col-span-3">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                First Name
                            </Typography>                           
                            <Input
                                    type="text"
                                    placeholder="First Name"
                                    className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                    defaultValue={formData.firstname}
                                    onChange={handleChange}
                                    name="firstname"
                            />    
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Last Name
                            </Typography>    
                            <Input
                                    type="text"
                                    placeholder="Last Name"
                                    className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                    defaultValue = {formData.lastname}
                                    onChange={handleChange}
                                    name="lastname"
                                />                      
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                                <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                   Phone Number
                                </Typography>                              
                                <Input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                    defaultValue = {formData.phone}
                                    onChange={handleChange}
                                    name="phone"
                            />   
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                   Designation
                                </Typography>    
                             <Input
                                    type="text"
                                    placeholder="Designation"
                                    className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                    defaultValue = {formData.designation}
                                    onChange={handleChange}
                                    name="designation"
                                />                   
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                   Graduation University
                                </Typography>                              
                                <Input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                    defaultValue = {formData.graduation_university}
                                    onChange={handleChange}
                                    name="graduation_university"
                            />   
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                   Graduate At
                            </Typography>  
                             <Input
                                    type="date"
                                    placeholder="Last Name"
                                    className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                    defaultValue = {formData.graduate_at}
                                    onChange={handleChange}
                                    name="graduate_at"
                                />                   
                            </div>
                    </div> 
        </div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <Typography variant="h4" color="blue-gray" className="mb-4 ">
                Updating social media URLs
            </Typography>
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Facebook
                            </Typography>                              
                            <Input
                                type="text"
                                placeholder="Facebook"
                                className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                                defaultValue = {formData.facebook_url}
                                onChange={handleChange}
                                name="facebook_url"
                            />                       
                        </div>

                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Github
                            </Typography>                              
                            <Input
                                type="text"
                                placeholder="Github"
                                className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                                defaultValue = {formData.github_url}
                                onChange={handleChange}
                                name="github_url"
                            />                       
                        </div>
                      
                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                LinkedIn
                            </Typography>                              
                            <Input
                                    type="text"
                                placeholder="Linkedin"
                                className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                                defaultValue = {formData.linkedin_url}
                                onChange={handleChange}
                                name="linkedin_url"
                            />                       
                        </div>
                    </div>
        </div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <Typography variant="h4" color="blue-gray" className="mb-4 ">
              Password information
            </Typography>
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                            Current password
                        </Typography>                           
                        <Input
                                type="password"
                                placeholder="current"
                                className="!bg-gray-50 !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                                defaultValue={formData.currentPassword}
                                onChange={handleChange}
                                name="currentPassword"
                            />                       
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                            New password
                        </Typography>                           
                        <Input
                                type="password"
                                placeholder="new"
                                className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                                defaultValue={formData.newPassword}
                                onChange={handleChange}
                                name="newPassword"
                            />                           
                            <div data-popover id="popover-password" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                              <div class="p-3 space-y-2">
                                  <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
                                  <div class="grid grid-cols-4 gap-2">
                                      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                  </div>
                                  <p>It’s better to have:</p>
                                  <ul>
                                      <li class="flex items-center mb-1">
                                          <svg class="w-4 h-4 mr-2 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                          Upper & lower case letters
                                      </li>
                                      <li class="flex items-center mb-1">
                                          <svg class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                          A symbol (#$&)
                                      </li>
                                      <li class="flex items-center">
                                          <svg class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                          A longer password (min. 12 chars.)
                                      </li>
                                  </ul>
                          </div>
                          <div data-popper-arrow></div>
                          </div>
                    </div>


                    <div class="col-span-6 sm:col-span-3">
                        <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                            Confirm password
                        </Typography>                           
                        <Input
                                type="password"
                                placeholder="confirm the new one"
                                className="!bg-gray-50 !border !border-gray-300  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                                defaultValue={formData.confirmPassword}
                                onChange={handleChange}
                                name="confirmPassword"
                            />                       
                    </div>

                </div>
           
        </div>

        <div class="col-span-6 sm:col-full ml-4 ">
            <Button variant="gradient" color="black" onClick={handleSubmit}>
                Save changes 
            </Button>          
        </div>
      </div>
</div>

    </>
  );
}

export default Profile;
