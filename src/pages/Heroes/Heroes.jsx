import { useEffect, useState } from "react";
import { HeroesList } from "components/HeroesList/HeroesList";
import { Pagination } from "components/Pagination/Pagination";
import { getHeroes } from "services/heroesApi";

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getHeroes(page).then(setHeroes);
  }, [page]);

  return (
    <>
      <HeroesList heroes={heroes} />
      <Pagination page={page} onChange={handleChangePage} totalHits={3} />
    </>
  );
};
