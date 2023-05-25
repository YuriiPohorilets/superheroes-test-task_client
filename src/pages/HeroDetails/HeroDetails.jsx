import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { getHeroeDetails, deleteHero } from "services/heroesApi";
import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { HeroCard } from "components/HeroCard/HeroCard";
import { Loader } from "components/Loader/Loader";
import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { AlertDialog } from "components/AlertDialog/AlertDialog";

export const HeroDetails = () => {
  const [heroDetails, setHeroDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { heroId } = useParams();
  const navigate = useNavigate();

  const handleClickOpenDialog = () => {
    setIsOpenDialog(!isOpenDialog);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async (heroId) => {
    setIsLoading(true);

    await deleteHero(heroId);

    setIsOpenDialog(!isOpenDialog);
    setIsLoading(false);
    navigate("/heroes");
  };

  useEffect(() => {
    const fetchdetails = async () => {
      setIsLoading(true);

      const data = await getHeroeDetails(heroId);

      if (!data) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      setHeroDetails(data);

      setIsLoading(false);
    };

    fetchdetails();
  }, [heroId]);

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "24px" }}
      >
        <GoBackButton />
      </Box>

      <AlertDialog
        onClick={handleDelete}
        isOpen={isOpenDialog}
        heroId={heroId}
        handleClose={handleClickOpenDialog}
      >
        Are you sure you want to delete: {heroDetails?.nickname}?
      </AlertDialog>

      {isError && <ErrorMsg />}
      {isLoading && <Loader />}

      {!isLoading && !isError && heroDetails && (
        <HeroCard
          hero={heroDetails}
          isEditing={isEditing}
          heroId={heroId}
          handleEdit={handleEdit}
          handleClickOpenDialog={handleClickOpenDialog}
        />
      )}
    </>
  );
};
