import { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { createHeroSchema } from "schemas/createHeroSchema";
import { outlinedBtn } from "shared/commonStyles";
import { createHero } from "services/heroesApi";

const initialValues = {
  nickname: "",
  realName: "",
  originDescription: "",
  superpowers: [""],
  catchPhrase: [""],
};

export const CreateHero = () => {
  const [isOpen, setisOpen] = useState(false);
  const { breakpoints } = useTheme();
  const fullScreen = useMediaQuery(breakpoints.down("md"));

  const { handleSubmit, handleChange, resetForm, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: createHeroSchema,
      onSubmit: async ({
        nickname,
        realName,
        originDescription,
        // superpowers,
        // catchPhrase,
      }) => {
        try {
          const newHero = await createHero({
            nickname,
            realName,
            originDescription,
            // superpowers,
            // catchPhrase,
          });
        } catch (error) {
          console.log(error.message);
        }

        resetForm();
      },
    });

  const handleClickOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        onClick={handleClickOpen}
        sx={outlinedBtn}
      >
        Create hero
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
      >
        <DialogTitle id="responsive-dialog-title">
          Create new superhero
        </DialogTitle>

        <DialogContent>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <TextField
              variant="standard"
              id="nickname"
              type="text"
              label="Nickname"
              value={values.nickname}
              onChange={handleChange}
              error={touched.nickname && !!errors.nickname}
              helperText={touched.nickname && errors.nickname}
              sx={{
                width: "300px",
                flex: "1 0 auto",
              }}
            />

            <TextField
              variant="standard"
              id="realName"
              type="text"
              label="Real name"
              value={values.realName}
              onChange={handleChange}
              error={touched.realName && !!errors.realName}
              helperText={touched.realName && errors.realName}
              sx={{ width: "300px", flex: "1 0 auto" }}
            />

            <TextField
              variant="standard"
              id="originDescription"
              type="text"
              label="Description"
              value={values.originDescription}
              onChange={handleChange}
              error={touched.originDescription && !!errors.originDescription}
              helperText={touched.originDescription && errors.originDescription}
              sx={{ width: "300px", flex: "1 0 auto" }}
            />

            <DialogActions>
              <Button autoFocus type="button" onClick={handleClose}>
                Cancel
              </Button>

              <Button autoFocus type="submit">
                Create
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
