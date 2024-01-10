import React, { useState, useEffect } from 'react';
import fetchTableData from '@/api/fetchTableData';

export default function AuthorsTableData() {
  const [authorsTableData, setAuthorsTableData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetchTableData("users", currentPage);
        setAuthorsTableData(response.data);
        setTotalPages(response.last_page);
        setTotalUsers(response.total);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching user data", error);
        setAuthorsTableData({});
        setDataLoaded(true);
      }
    };

    fetchUsersData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (!dataLoaded) {
    return { authorsTableData: {}, dataLoaded: false, handlePageChange };
  }

  return { authorsTableData, dataLoaded, handlePageChange, currentPage, totalPages,totalUsers };
}
