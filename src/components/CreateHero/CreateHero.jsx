import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { Dropzone } from "components/Dropzone/Dropzone";
import { Loader } from "components/Loader/Loader";
import { createHero } from "services/heroesApi";
import { useHeroes } from "hooks/heroesContext";
import { outlinedBtn, containedBtn } from "shared/commonStyles";
import { title, formWrapper, input } from "./createHeroStyles";

const initialValues = {
  nickname: "",
  realName: "",
  originDescription: "",
  superpowers: "",
  catchPhrase: "",
  images: null,
};

export const CreateHero = () => {
  const { setHeroes } = useHeroes();
  const [isOpen, setisOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { breakpoints } = useTheme();
  const fullScreen = useMediaQuery(breakpoints.down("md"));
  const navigate = useNavigate();

  const {
    handleSubmit,
    handleChange,
    resetForm,
    setFieldValue,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues,
    validationSchema: createHeroSchema,

    onSubmit: async (newHero) => {
      const {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        images,
      } = newHero;

      setIsLoading(true);

      const createdHero = await createHero({
        nickname,
        realName,
        originDescription,
        superpowers: superpowers.split(","),
        catchPhrase: catchPhrase.split(","),
        images,
      });

      if (createdHero.error) {
        toast(createdHero.error.message, {
          autoClose: 2000,
          theme: "colored",
        });
        setIsLoading(false);
        return;
      }

      setHeroes((prevHeroes) => [createdHero, ...prevHeroes]);
      setIsLoading(false);
      handleClose();
      navigate("/heroes");
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
        <DialogTitle id="responsive-dialog-title" sx={title}>
          Create new superhero
        </DialogTitle>

        {isLoading && <Loader />}

        <DialogContent>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Box sx={formWrapper}>
              <TextField
                variant="standard"
                id="nickname"
                type="text"
                label="Nickname"
                value={values.nickname}
                onChange={handleChange}
                error={touched.nickname && !!errors.nickname}
                helperText={touched.nickname && errors.nickname}
                sx={input}
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
                sx={input}
              />

              <TextField
                variant="standard"
                id="originDescription"
                type="text"
                label="Description"
                multiline
                rows={3}
                value={values.originDescription}
                onChange={handleChange}
                error={touched.originDescription && !!errors.originDescription}
                helperText={
                  touched.originDescription && errors.originDescription
                }
                sx={{ ...input, width: "100%" }}
              />

              <TextField
                variant="standard"
                id="superpowers"
                type="text"
                label="Super powers"
                value={values.superpowers}
                onChange={handleChange}
                error={touched.superpowers && !!errors.superpowers}
                helperText={touched.superpowers && errors.superpowers}
                sx={input}
              />

              <TextField
                variant="standard"
                id="catchPhrase"
                type="text"
                label="Catch phrase"
                value={values.catchPhrase}
                onChange={handleChange}
                error={touched.catchPhrase && !!errors.catchPhrase}
                helperText={touched.catchPhrase && errors.catchPhrase}
                sx={input}
              />
            </Box>

            <Box sx={{ mb: "24px" }}>
              <Dropzone setFieldValue={setFieldValue} />
            </Box>

            <DialogActions>
              <Button
                autoFocus
                type="button"
                variant="outlined"
                onClick={handleClose}
                sx={{
                  ...outlinedBtn,
                  color: "primary.accent",
                  borderColor: "primary.accent",
                }}
              >
                Cancel
              </Button>

              <Button autoFocus type="submit" sx={containedBtn}>
                Create
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>

        <ToastContainer />
      </Dialog>
    </>
  );
};
