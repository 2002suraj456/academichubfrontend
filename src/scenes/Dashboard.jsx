import SplitLayout from "../layouts/SplitLayout";
import Calender from "../components/ui/Calender";
import CourseList from "../components/ui/CourseList";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import getAuthStatus from "../auth";

const url = 'http://127.0.0.1:3000/';
const courselist = [
  { id: 1000, name: "software enginerring" },
  { id: 2000, name: "Accounts" },
];

function CourseSection() {
  return (
    <>
      <Typography variant="h3">Courses</Typography>
      <CourseList courseList={courselist} />
    </>
  );
}



function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      let data = await getAuthStatus();
      if(data === null){
        navigate('/login')
      }else if(data.isAuthenticated === 'false'){
        navigate('/login')
      }
    }
    fetchData();
  }, [navigate]);
  return (
    <SplitLayout
      firstComponent={<Calender />}
      secondComponent={<CourseSection />}
    />
  );
}

export default Dashboard;
