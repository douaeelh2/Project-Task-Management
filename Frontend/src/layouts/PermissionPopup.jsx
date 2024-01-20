import { Button } from "@material-tailwind/react";
const PermissionPopup=({id,closepopup,handleactionDeleteProject,object})=>{
    return(
      <div id="modelConfirm" className="fixed  z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

              <div className="flex justify-end p-2">
                <button
                  onClick={closepopup}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-6 pt-0 text-center">
                  <svg className="w-20 h-20 text-red-400 mx-auto " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this {object}?</h3>
                  <div className="flex justify-center gap-3">
                  <Button  onClick={e=>handleactionDeleteProject(id)} variant="gradient" color="red">
                      Yes, I'm sure
                  </Button>
                  <Button onClick={closepopup}
                      data-modal-toggle="delete-user-modal" variant="gradient" color="white">
                      No, cancel
                  </Button>
                  </div>
                  
              </div>
          </div>
      </div>
    )
    }

export default PermissionPopup;