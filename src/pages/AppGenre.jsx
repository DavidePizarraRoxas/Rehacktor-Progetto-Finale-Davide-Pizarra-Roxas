import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAsyncList } from 'react-stately'
import { useInView } from "react-intersection-observer";
import { Spinner } from "@nextui-org/react";
import GameUI from "../components/NavbarUI/GameUI/GameUI";
import ProgressBar from "../components/NavbarUI/Progress/ProgressBar";
import SessionContext from "../context/SessionContext";

export default function AppGenre() {
      const { genre_slug } = useParams();
      const [loading, setLoading] = useState(false);
      const session = useContext(SessionContext);

      let games = useAsyncList({
            async load({ signal, cursor }) {
                  setLoading(true)
                  let res = await fetch(cursor || `${import.meta.env.VITE_API_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&genres=${genre_slug}&dates=2010-09-01,2023-09-30&page=1`,
                        { signal });
                  setLoading(false)
                  let json = await res.json();
                  return {
                        items: json.results,
                        cursor: json.next,
                  };
            }
      });

      const { ref, inView } = useInView({
            threshold: 0,
      });

      useEffect(() => {
            if (games.items.length && inView && !games.isLoading) {
                  games.loadMore();
            }
      }, [games])


      return (
            <div className="flex justify-evenly">
                  <div className="w-[85%] p-5">
                        <h1 className="text-5xl font-bold text-center mt-5 mb-10">Genres {genre_slug}</h1>
                        <div className="flex justify-center mt-5 mb-5">
                              { loading && <ProgressBar />}
                        </div>
                        <div className="grid grid-cols-4 gap-4 ms-10">
                              {games.items.map((game) => (
                                    <GameUI key={game.id} game={game} />
                              ))}
                        </div>
                        {session && (
                              <div className="flex justify-center pt-2">
                                    <Spinner color="primary" ref={ref} />
                              </div>
                        )}
                  </div>
            </div>
      );
}
