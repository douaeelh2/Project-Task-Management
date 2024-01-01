import fetchData from "@/api/fetchData";
import { useEffect } from "react";

const fetchUsersData = async () => {
  try {
    const usersData = await fetchData({ object: 'users' });
    return usersData.users;
  } catch (error) {
    console.error('Error fetching user data', error);
    return []; 
  }
  
};

const authorsTableData = await fetchUsersData();

export default authorsTableData;
  