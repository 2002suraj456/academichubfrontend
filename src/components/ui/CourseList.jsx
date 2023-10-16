import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

CourseItem.propTypes = {
    course: PropTypes.any.isRequired
};

function CourseItem({course}) {
  return (
    <Button
    variant="contained" 
    sx={{
        justifyContent: "left"
    }}>
      <Typography textAlign="left">
        {course.id} {course.name}
      </Typography>
    </Button>
  );
}

CourseList.propTypes = {
  courseList: PropTypes.array.isRequired,
};

function CourseList({ courseList }) {
  return (
    <Stack
    gap={3}
    >
      {courseList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
        />
      ))}
    </Stack>
  );
}

export default CourseList;