import { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ImageList } from "components/ImagesList/ImagesList";
import NoImg from "img/noImg.jpg";

export const HeroCard = ({ hero, isEdit }) => {
  const {
    nickname,
    realName = "Unknown",
    images,
    originDescription,
    superpowers,
    catchPhrase,
  } = hero;

  const [prevImg, setPrevImg] = useState(images[0]);

  const handleClickImg = (imgUrl) => {
    setPrevImg(imgUrl);
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "40px",
          my: "24px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Hero details
      </Typography>

      <Box
        sx={{
          mt: "32px",
          display: "flex",
          gap: "32px",
          mb: "40px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            minWidth: "360px",
            height: "500px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <Box
            component="img"
            src={prevImg ? prevImg : NoImg}
            alt={nickname}
            width={365}
            height={500}
            sx={{ objectFit: "cover" }}
          />
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: "neutral.light" }}
        />

        <ImageList images={images} isEdit={isEdit} onClick={handleClickImg} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Nickname:{" "}
            <Typography
              component="span"
              sx={{ fontSize: "22px", fontWeight: 300, textTransform: "none" }}
            >
              {nickname}
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Real name:{" "}
            <Typography
              component="span"
              sx={{ fontSize: "22px", fontWeight: 300, textTransform: "none" }}
            >
              {realName}
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Description:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "22px",
                fontWeight: 300,
                textTransform: "none",
              }}
            >
              {originDescription}
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Superpowers:{" "}
            {superpowers.map((power) => (
              <Typography
                key={power}
                component="span"
                sx={{
                  fontSize: "22px",
                  fontWeight: 300,
                  textTransform: "none",
                }}
              >
                {power},{" "}
              </Typography>
            ))}
          </Typography>

          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Catch phrases:{" "}
            {catchPhrase.map((phrase) => (
              <Typography
                key={phrase}
                component="span"
                sx={{
                  fontSize: "22px",
                  fontWeight: 300,
                  textTransform: "none",
                  fontStyle: "italic",
                }}
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
