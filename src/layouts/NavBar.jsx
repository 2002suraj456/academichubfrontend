import {
  AppBar,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import CustomMenu from "../components/ui/CustomMenu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function NavBar() {
  return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography>LAMA DEV</Typography>
          <CustomMenu userName="suraj soren"/>
        </StyledToolbar>
      </AppBar>
  );
}

export default NavBar;
