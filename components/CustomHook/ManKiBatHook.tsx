import { useState, useEffect } from "react";

export interface ManKiBaatVideo {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}

export function useManKiBaat() {
  const [videos, setVideos] = useState<ManKiBaatVideo[]>([]);

  useEffect(() => {
    // Mock data for videos
    const videoList: ManKiBaatVideo[] = [
      {
        id: 1,
        title: "Mohan Yadav Live | Mann ki Baat",
        thumbnail: "https://via.placeholder.com/300x150",
        url: "https://www.youtube.com/watch?v=example", // Replace with actual video URL
      },
    ];

    setVideos(videoList);
  }, []);

  return videos;
}
