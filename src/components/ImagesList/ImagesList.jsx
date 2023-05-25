import * as React from "react";
import {
  Box,
  ImageList as MuiImageList,
  ImageListItem,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material/";
import { container, list, item, iconWrapper, icon } from "./imagesListStyles";

export const ImageList = ({ images, isEdit, onClick }) => {
  return (
    <Box sx={container}>
      <MuiImageList variant="masonry" cols={3} gap={8} sx={list}>
        {images.map((image) => (
          <ImageListItem
            key={image}
            onClick={() => {
              onClick(image);
            }}
            sx={item}
          >
            {isEdit && (
              <IconButton aria-label="delete" sx={iconWrapper}>
                <Delete sx={icon} />
              </IconButton>
            )}

            <img src={image} alt={image} loading="lazy" />
          </ImageListItem>
        ))}
      </MuiImageList>
    </Box>
  );
};
