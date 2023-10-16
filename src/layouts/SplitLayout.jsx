import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";

/**
 * BigLargeBox : full screen container to wrap components
 */
const BigLargeBox = styled(Box)({
  display: "flex",
  gap: 2,
  alignItems: "center",
  justifyContent: "space-evenly",
  mt: 2,
  minHeight: `calc(100vh - 100px)`,
  minWidth: {md: "450px"},
  flexGrow: 1,
  flexDirection: "column"
});

SplitLayout.propTypes = {
  firstComponent: PropTypes.any.isRequired,
  secondComponent: PropTypes.any,
};

/**
 * Split layout with flexible sizing
 * @param {firstComponent} firstComponent Left half of the screen : Required
 * @param {secondComponent} secondComponent Right half of the screen
 */
function SplitLayout({ firstComponent, secondComponent }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {<BigLargeBox>{firstComponent}</BigLargeBox>}
        {secondComponent && (
          <BigLargeBox sx={{ flexDirection: "column" }}>
            {secondComponent}
          </BigLargeBox>
        )}
      </Box>
    </>
  );
}

export default SplitLayout;
