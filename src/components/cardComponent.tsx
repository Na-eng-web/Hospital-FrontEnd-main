import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Hospital } from "../api";

const CardComponent = ({ hospital }: { hospital: Hospital }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {hospital.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hospital.address}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {hospital.city}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {hospital.email}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {hospital.phone}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {hospital.hospitalId}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardComponent;
