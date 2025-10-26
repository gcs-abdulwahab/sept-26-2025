import type { VideoLectureType } from "../types/VideoLectureType"
import VideoLectureComponent from "./VideoLectureComponent"
import { useState } from "react";
interface PlayListComponentProps{
    data: VideoLectureType[],
    name: string,
    currentlyPlayed?: number | null 
}
const PlayListComponent = ({ data, name, currentlyPlayed }: PlayListComponentProps) => {
    const[lectures, setLectures] = useState<VideoLectureType[]>(data);
  return (
      <div>
          <h1 className="text-4xl">{name}</h1>
          {lectures.map((video , index ) => (
              <div key={video.id}>
                  <h1>index = {index}</h1>
                  <VideoLectureComponent video={video} />
              </div>
          ))}
      </div>
  )
}

export default PlayListComponent