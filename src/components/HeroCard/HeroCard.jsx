import { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ImageList } from "components/ImagesList/ImagesList";
import NoImg from "img/noImg.jpg";
import {
  title,
  container,
  mediaWrapper,
  imgWrapper,
  previewImg,
  contentContainer,
  subtitle,
  text,
} from "./heroCardStyles";

export const HeroCard = ({ hero, isEdit }) => {
  const {
    nickname,
    realName,
    images,
    originDescription,
    superpowers,
    catchPhrase,
  } = hero;

  const [prevImg, setPrevImg] = useState(images[0]);

  const handleClickImg = (imgUrl) => setPrevImg(imgUrl);

  return (
    <>
      <Typography sx={title}>Hero details</Typography>

      <Box sx={container}>
        <Box sx={mediaWrapper}>
          <Box sx={imgWrapper}>
            <Box
              component="img"
              src={prevImg ? prevImg : NoImg}
              alt={nickname}
              width={365}
              height={500}
              loading="lazy"
              sx={previewImg}
            />
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "neutral.light" }}
          />

          <ImageList images={images} isEdit={isEdit} onClick={handleClickImg} />
        </Box>

        <Box sx={contentContainer}>
          <Typography sx={subtitle}>
            Nickname:{" "}
            <Typography component="span" sx={text}>
              {nickname}
            </Typography>
          </Typography>

          <Typography sx={subtitle}>
            Real name:{" "}
            <Typography component="span" sx={text}>
              {realName}
            </Typography>
          </Typography>

          <Typography sx={subtitle}>
            Description:{" "}
            <Typography component="span" sx={text}>
              {originDescription}
            </Typography>
          </Typography>

          <Typography sx={subtitle}>
            Superpowers:{" "}
            {superpowers.map((power) => (
              <Typography key={power} component="span" sx={text}>
                {power},{" "}
              </Typography>
            ))}
          </Typography>

          <Typography sx={subtitle}>
            Catch phrases:{" "}
            {catchPhrase.map((phrase) => (
              <Typography
                key={phrase}
                component="span"
                sx={{ ...text, fontStyle: "italic" }}
              >
                "{phrase}",{" "}
              </Typography>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
