export type VideoLectureType =  {
    id : number;
    title: string;
    duration: number; // duration in minutes
    description?: string;
    videoUrl?: string;
    views?: number;
}