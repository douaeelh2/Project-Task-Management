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
} from "@material-tailwind/react";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">

      <div class="col-span-full xl:col-auto">
        
          <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="flex flex-col justify-center items-center">
                  <a href="modal" class="absolute xl:top-32 lg:top-32 md:top-32 sm:top-48  z-10 left-54 shadow h-10 w-10 rounded-full bg-white ml-40 hover:shadow-lg">
                    <i class="fa fa-pencil ml-3 mt-3 text-gray-600 hover:text-gray-900"></i>
                  </a>
                  <img class="relative mb-4 rounded-full w-48 h-48 sm:mb-0 xl:mb-4 2xl:mb-0" src="../img/home-decor-1.jpeg" alt="Jese picture"/>
                  <div class="text-center mt-6">
                  <Typography variant="h5" color="blue-gray" >
                    EL HASSNAOUI Salma
                </Typography>   
                <Typography variant="paragraph" class="text-gray-700">
                    weeeeeeeeeeeb
                </Typography>                         
                  </div>
              </div>
          </div>
          <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                  <div class="flex space-x-4 gap-6 justify-center">
                      <a href="https://www.facebook.com/" target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-facebook fa-2x"></i>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-instagram fa-2x"></i>
                      </a> 
                      <a href="https://github.com/" target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-github fa-2x"></i>
                      </a>
                      <a href="https://linkedin.com/" target="_blank" class="text-gray-600 hover:text-gray-800">
                          <i class="fab fa-linkedin fa-2x"></i>
                      </a>
                  </div>
          </div>
      </div>





      
      <div class="col-span-2">
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <Typography variant="h4" color="blue-gray" className="mb-4 ">
                General information
            </Typography>
              <form action="#">
                  <div class="grid grid-cols-6 gap-6">

                        <div class="col-span-6 sm:col-span-3">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                First name
                            </Typography>                           
                            <Input
                                    type="email"
                                    placeholder="Email Address"
                                    className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                            />    
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Last name
                            </Typography>    
                            <Input
                                    type="lastname"
                                    placeholder="EL HASSNAOUI"
                                    className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                                />                      
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                                <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                    Phone number
                                </Typography>                              
                                <Input
                                        type="tel"
                                        placeholder="phone number"
                                        className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                        labelProps={{
                                        className: "hidden",
                                        }} 
                                        containerProps={{ className: "min-w-[100px]" }}
                                />                      
                            </div>
                    </div> 
              </form>
        </div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <Typography variant="h4" color="blue-gray" className="mb-4 ">
                Updating social media URLs
            </Typography>
              <form action="#">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Instagram
                            </Typography>                              
                            <Input
                                    type="text"
                                    placeholder="insta"
                                    className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                    labelProps={{
                                    className: "hidden",
                                    }} 
                                    containerProps={{ className: "min-w-[100px]" }}
                            />                      
                        </div>

                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Facebook
                            </Typography>                              
                            <Input
                                type="text"
                                placeholder="face"
                                className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                            />                       
                        </div>

                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                Github
                            </Typography>                              
                            <Input
                                type="text"
                                placeholder="github"
                                className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                            />                       
                        </div>
                      
                        <div class="col-span-6 ">
                            <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                                LinkedIn
                            </Typography>                              
                            <Input
                                    type="text"
                                placeholder="linkedin"
                                className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                            />                       
                        </div>
                    </div>
              </form>
        </div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <Typography variant="h4" color="blue-gray" className="mb-4 ">
              Password information
            </Typography>
            <form action="#">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                            Current password
                        </Typography>                           
                        <Input
                                type="password"
                                placeholder="current"
                                className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                            />                       
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                            New password
                        </Typography>                           
                        <Input
                                type="password"
                                placeholder="new"
                                className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                            />                           
                            {/* messages d'erreur consernant le password */}
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
                          {/* fin messages d'erreur consernant password */}
                    </div>


                    <div class="col-span-6 sm:col-span-3">
                        <Typography variant="h6" color="blue-gray" class="mb-3 text-sm font-medium">
                            Confirm password
                        </Typography>                           
                        <Input
                                type="password"
                                placeholder="confirm the new one"
                                className="!bg-gray-50 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 "
                                labelProps={{
                                className: "hidden",
                                }} 
                                containerProps={{ className: "min-w-[100px]" }}
                            />                       
                    </div>

                </div>
            </form>
        </div>

        <div class="col-span-6 sm:col-full ml-4 ">
            <Button variant="gradient" color="black" >
                Save changes 
            </Button>          
        </div>
      </div>
    
</div>

    </>
  );
}

export default Profile;
