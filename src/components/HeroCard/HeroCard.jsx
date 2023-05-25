import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { ImageList } from 'components/ImagesList/ImagesList';
import { HeroTools } from 'components/HeroTools/HeroTools';
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
  text,
} from './heroCardStyles';
import { outlinedBtn } from 'shared/commonStyles';
import 'react-toastify/dist/ReactToastify.css';

export const HeroCard = ({ hero, isEditing, heroId, handleEdit, handleClickOpenDialog }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [prevImg, setPrevImg] = useState(hero.images[0]);
  const navigate = useNavigate();

  const { handleSubmit, handleChange, resetForm, setFieldValue, values, touched, errors } =
    useFormik({
      initialValues: hero,
      validationSchema: createHeroSchema,

      onSubmit: async newHero => {
        const { nickname, realName, originDescription, superpowers, catchPhrase, images } = newHero;

        setIsLoading(true);

        const updatedHero = await updateHero(heroId, {
          nickname,
          realName,
          originDescription,
          superpowers,
          catchPhrase,
          images,
        });
        console.log(updatedHero);
        if (updatedHero.error) {
          toast(updatedHero.error.message, {
            autoClose: 2000,
            theme: 'colored',
          });
          setIsLoading(false);
          return;
        }

        // setHeroes((prevHeroes) => [updatedHero, ...prevHeroes]);
        setIsLoading(false);
        // navigate("/heroes");
        // resetForm();
      },
    });

  const handleClickImg = imgUrl => setPrevImg(imgUrl);

  const handleDeleteImg = () => {};

  return (
    <>
      <Box component="form" sx={container} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography sx={title}>Hero details</Typography>

          <HeroTools
            handleClickOpenDialog={handleClickOpenDialog}
            handleEdit={handleEdit}
            isEditing={isEditing}
          />
        </Box>

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

          <ImageList images={hero.images} isEditing={isEditing} onClick={handleClickImg} />
        </Box>

        <Box sx={contentContainer}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '54px',
              justifyContent: 'space-between',
            }}
          >
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
              sx={{ width: '100%' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '54px',
              justifyContent: 'space-between',
            }}
          >
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
              sx={{ width: '100%' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '54px',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={subtitle}>Description: </Typography>
            <TextField
              variant="standard"
              multiline
              disabled={!isEditing}
              autoComplete="false"
              id="originDescription"
              type="text"
              value={values.originDescription}
              color="secondary"
              onChange={handleChange}
              error={touched.originDescription && !!errors.originDescription}
              helperText={touched.originDescription && errors.originDescription}
              sx={{ width: '100%' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '54px',
              justifyContent: 'space-between',
            }}
          >
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
              sx={{ width: '100%' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '54px',
              justifyContent: 'space-between',
            }}
          >
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
              sx={{ width: '100%' }}
            />
          </Box>
        </Box>
      </Box>

      <ToastContainer />
    </>
  );
};
