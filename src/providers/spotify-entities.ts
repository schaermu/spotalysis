export class Image {
  height: number;
  width: number;
  url: string;
}

export class SpotifyUserProfile {
  id: string;
  display_name: string;
  href: string;
  images: Image[]
}
