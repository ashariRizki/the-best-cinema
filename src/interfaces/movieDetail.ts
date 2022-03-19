export interface MovieDetailProps {
  id: number;
  show?: boolean;
  setShow?: any;
  title?: string;
  genres?: genres[];
  overview?: string;
  tagline?: string;
  poster_path?: string | null;
  vote_average?: number;
}

interface genres {
  id: number;
  name?: string;
}
