import { useEffect, useState } from "react";
import { Container } from "components/Container/Container";
import { Wrapper } from "components/Wrapper/Wrapper";
import { HeroesList } from "components/HeroesList/HeroesList";
import { getHeroes } from "services/heroesApi";

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getHeroes().then(setHeroes);
  }, []);

  return (
    <Container>
      <Wrapper>
        <HeroesList heroes={heroes} />
      </Wrapper>
    </Container>
  );
};
