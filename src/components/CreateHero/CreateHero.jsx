import { Button } from "@mui/material";
import { outlinedBtn } from "shared/commonStyles";

export const CreateHero = () => {
  return (
    <Button type="button" variant="outlined" sx={outlinedBtn}>
      Create hero
    </Button>
  );
};
