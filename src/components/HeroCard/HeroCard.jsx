import { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Typography, Divider, TextField, Modal, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { ImageList } from 'components/ImagesList/ImagesList';
import { HeroTools } from 'components/HeroTools/HeroTools';
import { Dropzone } from 'components/Dropzone/Dropzone';
import { Loader } from 'components/Loader/Loader';
import { updateHero } from 'services/heroesApi';
import { createHeroSchema } from 'schemas/createHeroSchema';
import NoImg from 'img/noImg.jpg';
import {
  title,
  container,
  mediaWrapper,
  imgWrapper,
  previewImg,
  contentContainer,
  subtitle,
  input,
  textFieldWrapper,
} from './heroCardStyles';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: 'red',
};

export const HeroCard = ({ hero, isEditing, heroId, handleEdit, handleClickOpenDialog }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [heroImages, setHeroImages] = useState(hero.images);
  const [prevImg, setPrevImg] = useState(heroImages[0]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } = useFormik({
    initialValues: hero,
    validationSchema: createHeroSchema,

    onSubmit: async newHero => {
      const { nickname, realName, originDescription, superpowers, catchPhrase } = newHero;

      setIsLoading(true);

      const updatedHero = await updateHero(heroId, {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        images: heroImages,
      });

      if (updatedHero.error) {
        toast(updatedHero.error.message, {
          autoClose: 2000,
          theme: 'colored',
        });
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      handleEdit(false);
    },
  });
  const handleOpen = () => {
    setIsOpenModal(true);
  };
  const handleClose = () => setIsOpenModal(false);

  const handleClickImg = imgUrl => setPrevImg(imgUrl);

  const handleDeleteImg = imgUrl => {
    setHeroImages(prevImg => prevImg.filter(image => image !== imgUrl));
  };

  return (
    <>
      <Box component="form" sx={container} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography sx={title}>Hero details</Typography>

          <HeroTools
            handleClickOpenDialog={handleClickOpenDialog}
            handleEdit={handleEdit}
            isEditing={isEditing}
            openModal={handleOpen}
          />
        </Box>

        <Modal
          open={isOpenModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Dropzone setFieldValue={setFieldValue} />
            <Button type="submit">Add</Button>
          </Box>
        </Modal>

        {isLoading && <Loader />}

        <Box sx={mediaWrapper}>
          <Box sx={imgWrapper}>
            <Box
              component="img"
              src={prevImg ? prevImg : NoImg}
              alt={hero.nickname}
              width={365}
              height={500}
              loading="lazy"
              sx={previewImg}
            />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'neutral.light' }} />

          <ImageList
            images={heroImages}
            isEditing={isEditing}
            onClick={handleClickImg}
            deleteImg={handleDeleteImg}
          />
        </Box>

        <Box sx={contentContainer}>
          <Box sx={textFieldWrapper}>
            <Typography sx={subtitle}>Nickname: </Typography>

            <TextField
              variant="standard"
              disabled={!isEditing}
              autoComplete="false"
              id="nickname"
              type="text"
              value={values.nickname}
              color="secondary"
              onChange={handleChange}
              error={touched.nickname && !!errors.nickname}
              helperText={touched.nickname && errors.nickname}
              sx={input}
            />
          </Box>

          <Box sx={textFieldWrapper}>
            <Typography sx={subtitle}>Real name: </Typography>
            <TextField
              variant="standard"
              disabled={!isEditing}
              autoComplete="false"
              id="realName"
              type="text"
              value={values.realName}
              color="secondary"
              onChange={handleChange}
              error={touched.realName && !!errors.realName}
              helperText={touched.realName && errors.realName}
              sx={input}
            />
          </Box>

          <Box sx={textFieldWrapper}>
            <Typography sx={subtitle}>Description: </Typography>
            <TextField
              variant="standard"
              multiline
              style={{ color: 'red' }}
              disabled={!isEditing}
              autoComplete="false"
              id="originDescription"
              type="text"
              value={values.originDescription}
              color="secondary"
              onChange={handleChange}
              error={touched.originDescription && !!errors.originDescription}
              helperText={touched.originDescription && errors.originDescription}
              sx={input}
            />
          </Box>

          <Box sx={textFieldWrapper}>
            <Typography sx={subtitle}>Superpowers: </Typography>
            <TextField
              variant="standard"
              multiline
              disabled={!isEditing}
              autoComplete="false"
              id="superpowers"
              type="text"
              value={values.superpowers}
              color="secondary"
              onChange={handleChange}
              error={touched.superpowers && !!errors.superpowers}
              helperText={touched.superpowers && errors.superpowers}
              sx={input}
            />
          </Box>

          <Box sx={textFieldWrapper}>
            <Typography sx={subtitle}>Catch phrase: </Typography>
            <TextField
              variant="standard"
              multiline
              disabled={!isEditing}
              autoComplete="false"
              id="catchPhrase"
              type="text"
              value={values.catchPhrase}
              color="secondary"
              onChange={handleChange}
              error={touched.catchPhrase && !!errors.catchPhrase}
              helperText={touched.catchPhrase && errors.catchPhrase}
              sx={input}
            />
          </Box>
        </Box>
      </Box>

      <ToastContainer />
    </>
  );
};
