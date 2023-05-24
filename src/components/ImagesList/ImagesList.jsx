import * as React from "react";
import {
  Box,
  ImageList as MuiImageList,
  ImageListItem,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material/";

export const ImageList = ({ images, isEdit, onClick }) => {
  return (
    <Box
      sx={{
        height: "500px",
        overflowY: "scroll",
        maxWidth: "700px",
        borderRadius: "16px",
      }}
    >
      <MuiImageList
        variant="masonry"
        cols={3}
        gap={8}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {images.map((image) => (
          <ImageListItem
            key={image}
            onClick={() => {
              onClick(image);
            }}
            sx={{
              position: "relative",
              flexBasis: "calc((100% - 16px) / 3)",
              borderRadius: "16px",
              overflow: "hidden",
              maxHeight: "300px",
              cursor: "pointer",
            }}
          >
            {isEdit && (
              <IconButton
                aria-label="delete"
                sx={{ position: "absolute", top: "8px", right: "8px" }}
              >
                <Delete
                  sx={{
                    color: "primary.light",
                  }}
                />
              </IconButton>
            )}

            <img src={image} alt={image} loading="lazy" />
          </ImageListItem>
        ))}
      </MuiImageList>
    </Box>
  );
};
