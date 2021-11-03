export class Song {
  name?: string;
  description?: string;
  file_mp3?: string;
  image?: string;
  author?: string;
  album?: string;
  category_id?: number;
  user_id?: number;

  constructor(name: string, description: string, file_mp3: string, image: string, author: string, album: string, user_id: number) {
    this.name = name;
    this.description = description;
    this.file_mp3 = file_mp3;
    this.image = image;
    this.author = author;
    this.album = album;
    this.category_id = 1;
    this.user_id = user_id;
  }
}
