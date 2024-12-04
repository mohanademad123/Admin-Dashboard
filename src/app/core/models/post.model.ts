export interface IPost {
  id: number;
  imgUrl: string;
  name: string;
  time: string;
  content: string;
  contentImgUrl?: string;
  contentVideoUrl?: string;
  likes: number;
  loves: number;
  comments?: IPostComment[];
}

export interface IPostComment {
  id: number;
  name: string;
  imgUrl: string;
  time: string;
  content: string;
}
