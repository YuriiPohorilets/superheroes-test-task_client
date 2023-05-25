import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';
import { inputWrapper, thumbsContainer, thumb, thumbInner, img, text } from './dropzoneStyles';

export const Dropzone = ({ setFieldValue }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.png'],
    },

    onDrop: acceptedFiles => {
      setFieldValue('images', acceptedFiles);

      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },

    multiple: true,
    maxFiles: 12,
  });

  useEffect(() => {
    return () => files.forEach(({ preview }) => URL.revokeObjectURL(preview));
  }, [files]);

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })} sx={inputWrapper}>
        <input {...getInputProps()} />

        <Typography sx={text}>Drag 'n' drop some images here, or click to select images</Typography>
      </Box>

      <Box sx={thumbsContainer}>
        {files.map(({ name, preview }) => (
          <Box sx={thumb} key={name}>
            <Box sx={thumbInner}>
              <Box
                component="img"
                src={preview}
                sx={img}
                alt={name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(preview);
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
