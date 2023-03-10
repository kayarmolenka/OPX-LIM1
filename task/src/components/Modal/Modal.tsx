import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface ICustomModal {
  isOpen: boolean;
  text: string;
  fullDescription: string;
  lifeMin: number;
  lifeMax: number;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CustomModal = (props: ICustomModal) => {
  const { isOpen, text, fullDescription, lifeMin, lifeMax } = props;
  const [open, setOpen] = React.useState(isOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {fullDescription}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`LifeMin: ${lifeMin} / LifeMax: ${lifeMax}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
