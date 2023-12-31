import React, { useState, useEffect } from 'react';
import fetchTableData from '@/api/fetchTableData';
import Loading from '@/layouts/loading';

export default function AuthorsTableData() {
  const [authorsTableData, setAuthorsTableData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const usersData = await fetchTableData({ object: "users" });
        setAuthorsTableData(usersData.users);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching user data", error);
        setAuthorsTableData([]);
        setDataLoaded(true);
      }
    };

    fetchUsersData();
  }, []);

  if (!dataLoaded) {
    return { authorsTableData: [], dataLoaded: false };
  }

  return { authorsTableData, dataLoaded };
}
