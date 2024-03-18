export const NEXT_QUEUE = "NEXT_QUEUE";
export const PREVIUS_QUEUE = "PREVIUS_QUEUE";
export const RETURN_FIRST_MOVIE = "RETURN FIRST MOVIE";

export const nextQueue = () => ({
  type: NEXT_QUEUE,
});

export const previusQueue = () => ({
  type: PREVIUS_QUEUE,
});

export const returnFirstMovie = () => ({
  type: RETURN_FIRST_MOVIE,
});