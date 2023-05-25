import { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Typography, Divider, TextField } from '@mui/material';
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
  toolsWrapper,
  imgWrapper,
  previewImg,
  contentContainer,
  subtitle,
  input,
  textFieldWrapper,
  inputEditing,
} from './heroCardStyles';
import 'react-toastify/dist/ReactToastify.css';

export const HeroCard = ({ hero, isEditing, heroId, handleEdit, handleClickOpenDialog }) => {
  const [heroImages, setHeroImages] = useState(hero.images);
  const [prevImg, setPrevImg] = useState(heroImages[0]);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    nickname: hero.nickname,
    realName: hero.realName,
    originDescription: hero.originDescription,
    superpowers: hero.superpowers,
    catchPhrase: hero.catchPhrase,
    images: hero.images,
  };

  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: createHeroSchema,

    onSubmit: async newHero => {
      setIsLoading(true);
      console.log(values);
      const updatedHero = await updateHero(heroId, values);
      console.log(newHero);
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

  const handleClickImg = imgUrl => setPrevImg(imgUrl);

  const handleDeleteImg = imgUrl => {
    setHeroImages(prevImg => prevImg.filter(image => image !== imgUrl));
  };

  return (
    <>
      <Box component="form" sx={container} onSubmit={handleSubmit}>
        <Box sx={toolsWrapper}>
          <Typography sx={title}>Hero details</Typography>

          <HeroTools
            handleClickOpenDialog={handleClickOpenDialog}
            handleEdit={handleEdit}
            isEditing={isEditing}
          />
        </Box>

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

        {isEditing && <Dropzone setFieldValue={setFieldValue} />}

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
              sx={isEditing ? inputEditing : input}
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
              sx={isEditing ? inputEditing : input}
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
              sx={isEditing ? inputEditing : input}
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
              sx={isEditing ? inputEditing : input}
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
              sx={isEditing ? inputEditing : input}
            />
          </Box>
        </Box>
      </Box>

      <ToastContainer />
    </>
  );
};
