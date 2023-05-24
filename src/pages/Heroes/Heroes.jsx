import { useEffect, useState } from "react";
import { HeroesList } from "components/HeroesList/HeroesList";
import { Pagination } from "components/Pagination/Pagination";
import { Loader } from "components/Loader/Loader";
import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { scrollToTop } from "helpers/scrollToTop";
import { getHeroes } from "services/heroesApi";

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const count = Math.ceil(totalHits / 5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    scrollToTop();
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);

      const data = await getHeroes(page);

      if (!data) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const { heroes, totalHits } = data;

      setHeroes(heroes);
      setTotalHits(totalHits);
      setIsLoading(false);
    };

    fetchHeroes();
  }, [page]);

  return (
    <>
      {isError && <ErrorMsg />}
      {isLoading && <Loader />}

      <HeroesList heroes={heroes} />

      {count > 1 && (
        <Pagination page={page} count={count} onChange={handleChangePage} />
      )}
    </>
  );
};
