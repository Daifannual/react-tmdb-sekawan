import React from "react";
import { Tabs, Tab, Card, CardBody, Avatar } from "@nextui-org/react";
import { useSelector } from "react-redux";

const DetailTabs = () => {
  // Mengambil movieDetail dan movieVideos dari Redux store
  const { movieDetail, movieVideos } = useSelector((state) => state.movie);
  const { credits } = useSelector((state) => state.other);
  const { images } = useSelector((state) => state.other);
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" variant="solid">
        <Tab key="Overview" title="Overview">
          <Card>
            <CardBody className="p-5">
              <p className="text-sm font-semibold">Release Date</p>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
                {new Date(movieDetail.release_date).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>
              <p className="text-sm font-semibold">Genre</p>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
                {movieDetail.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="text-sm mt-10 font-medium text-zinc-600 dark:text-zinc-300">
                {movieDetail.overview}
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Other" title="Other">
          <Card>
            <CardBody className="p-5">
              <div className="mb-4">
                <p className="text-lg font-bold mb-4">Starring</p>
                <div className="flex flex-wrap gap-4">
                  {credits.cast && credits.cast.length > 0 ? (
                    credits.cast.slice(0, 9).map((actor) => (
                      <div
                        className="flex items-center w-1/6 mb-2"
                        key={actor.id}
                      >
                        <Avatar
                          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                          size="md"
                        />
                        <p className="text-sm font-semibold ml-4">
                          {actor.name}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No actors available</p>
                  )}
                  {
                    credits.cast.length > 9 ? (
                      <>
                        <button
                          className="flex items-center w-max mb-2 bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-800/50 rounded-xl"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          <p className="text-sm font-semibold mx-4">Show All</p>
                        </button>
                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box bg-zinc-200 dark:bg-zinc-900">
                            <div className="bg-zinc-300 dark:bg-zinc-900 mb-3">
                              <h3 className="font-bold text-lg">All Actor</h3>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-around">
                              {credits.cast && credits.cast.length > 0 ? (
                                credits.cast.map((actor) => (
                                  <div
                                    className="flex w-1/3 items-center mb-2"
                                    key={actor.id}
                                  >
                                    <Avatar
                                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                      size="md"
                                    />
                                    <p className="text-sm font-semibold ml-4">
                                      {actor.name}
                                    </p>
                                  </div>
                                ))
                              ) : (
                                <p className="text-sm">No actors available</p>
                              )}
                            </div>
                          </div>
                          <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                          </form>
                        </dialog>
                      </>
                    ) : null // Fallback if there are 9 or fewer actors, or you can replace with a different JSX.
                  }
                </div>
              </div>

              <div className="mb-4">
                <p className="text-lg font-bold mb-4">Production Companies</p>
                <div className="flex flex-wrap gap-4">
                  {movieDetail.production_companies &&
                  movieDetail.production_companies.length > 0 ? (
                    movieDetail.production_companies
                      .slice(0, 9)
                      .map((company) => (
                        <div
                          className="flex items-center w-max mb-2 rounded-xl border-1 border-zinc-200 bg-zinc-100 dark:bg-zinc-900/40 dark:border-1 dark:border-zinc-700 p-1"
                          key={company.id}
                        >
                          <p className="text-sm font-semibold mx-2">
                            {company.name}
                          </p>
                        </div>
                      ))
                  ) : (
                    <p>No production companies available</p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-lg font-bold">Official Website</p>
                {movieDetail.homepage.length > 0 ? (
                  <a
                    href={movieDetail.homepage}
                    className="text-sm hover:underline"
                  >
                    {movieDetail.homepage}
                  </a>
                ) : (
                  <p className="text-sm text-zinc-500">Unavailable</p>
                )}
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default DetailTabs;
