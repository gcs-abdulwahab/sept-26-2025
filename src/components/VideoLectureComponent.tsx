import type { VideoLectureType } from "../types/VideoLectureType";
import { useState } from "react";

interface VideoLectureProps {
	video: VideoLectureType;
}
const VideoLectureComponent = ({ video }: VideoLectureProps) => {
	const [vid, setVideo] = useState<VideoLectureType>(video);
	return (
		<>
			<div>
				<h1 className="text-2xl">Currently Playing</h1>
				<h2>{vid.title}</h2>
				<p>{vid.description}</p>
				<p>Duration: {vid.duration} minutes</p>
				<p>Views: {vid.views ? vid.views : 0}</p>
				<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2">
					Watch--
				</button>
			</div>
			<hr />
		</>
	);
};

export default VideoLectureComponent;
