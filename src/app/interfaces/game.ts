export interface Game {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  genre: string;
  platform: string;
  [key: string]: any; // Para manejar otras propiedades
}
