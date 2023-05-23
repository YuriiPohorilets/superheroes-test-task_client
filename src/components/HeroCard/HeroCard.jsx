import { Box, Typography } from "@mui/material";
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
      <img
        src={images[0] ? images[0] : NoImg}
        alt={nickname}
        style={{ borderRadius: "16px" }}
        width={365}
        height={500}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography>Nickname: {nickname}</Typography>
        <Typography>Real name: {realName}</Typography>
        <Typography>Description: {originDescription}</Typography>

        {superpowers.map((power) => (
          <p key={power}>{power}</p>
        ))}

        {catchPhrase.map((phrase) => (
          <p key={phrase}>{phrase}</p>
        ))}
      </Box>
    </Box>
  );
};
