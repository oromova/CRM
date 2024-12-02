import { Box } from "@mui/material";
import { Container } from "./style";
import { createPortal } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const Spinner = () => {
  return createPortal(
    <Container>
      <Box>
        <CircularProgress color="success" />
      </Box>
    </Container>,
    document.body
  );
};

export default Spinner;
