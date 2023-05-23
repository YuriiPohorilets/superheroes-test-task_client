import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroeDetails } from "services/heroesApi";
import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { HeroCard } from "components/HeroCard/HeroCard";

export const HeroDetails = () => {
  const [heroDetails, setHeroDetails] = useState(null);
  const { heroId } = useParams();

  useEffect(() => {
    getHeroeDetails(heroId).then(setHeroDetails);
  }, [heroId]);

  return (
    <>
      <GoBackButton />

      {heroDetails && <HeroCard hero={heroDetails} />}
    </>
  );
};
