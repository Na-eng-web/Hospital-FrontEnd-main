import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Hospital } from "../api";
import { request_addHospital } from "../api/request/hospital-api";

export const AddHospitalPopup = ({ onClose }: { onClose: () => void }) => {
  const initialState: Hospital = {
    name: "",
    address: "",
    city: "",
    email: "",
    phone: undefined,
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = ({
    field,
    value,
  }: {
    field: string;
    value: string | number;
  }) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    //if not all fields are filled
    if (
      formData.name === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.email === "" ||
      formData.phone === undefined
    ) {
      return;
    }

    request_addHospital({ hospital: formData })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        e.message;
      })
      .finally(() => {
        onClose();
      });
  };
  return (
    <Dialog fullWidth maxWidth="sm" open onClose={onClose}>
      <DialogTitle>Add Hospital</DialogTitle>
      <DialogContent>
        <Box py={1}>
          <TextField
            onChange={(e) =>
              handleChange({ field: "name", value: e.target.value })
            }
            fullWidth
            variant="outlined"
            label="Name"
          />

          <TextField
            onChange={(e) =>
              handleChange({ field: "address", value: e.target.value })
            }
            rows={4}
            fullWidth
            multiline
            variant="outlined"
            label="Address"
          />
          <TextField
            onChange={(e) =>
              handleChange({ field: "city", value: e.target.value })
            }
            fullWidth
            variant="outlined"
            label="City"
          />
          <TextField
            onChange={(e) =>
              handleChange({ field: "email", value: e.target.value })
            }
            fullWidth
            variant="outlined"
            label="Email"
          />
          <TextField
            onChange={(e) =>
              handleChange({ field: "phone", value: e.target.value })
            }
            fullWidth
            variant="outlined"
            type="number"
            label="Phone"
            inputProps={{ pattern: "\\d{10}" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
