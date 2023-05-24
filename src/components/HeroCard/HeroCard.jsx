import { Box, Typography, Divider } from "@mui/material";
import NoImg from "img/noImg.jpg";

export const HeroCard = ({ hero }) => {
  const {
    nickname,
    realName,
    images,
    originDescription,
    superpowers,
    catchPhrase,
  } = hero;

  return (
    <Box sx={{ mt: "32px", display: "flex", gap: "32px" }}>
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
          src={images[0] ? images[0] : NoImg}
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, textTransform: "uppercase" }}
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
          sx={{ fontSize: "22px", fontWeight: 700, textTransform: "uppercase" }}
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
          sx={{ fontSize: "22px", fontWeight: 700, textTransform: "uppercase" }}
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
          sx={{ fontSize: "22px", fontWeight: 700, textTransform: "uppercase" }}
        >
          Superpowers:{" "}
          {superpowers.map((power) => (
            <Typography
              key={power}
              component="span"
              sx={{ fontSize: "22px", fontWeight: 300, textTransform: "none" }}
            >
              {power},{" "}
            </Typography>
          ))}
        </Typography>

        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, textTransform: "uppercase" }}
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
  );
};
