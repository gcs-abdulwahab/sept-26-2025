export type UserType = {
    id: number;
    name: string;
    email: string;
    image: string;
    title: string;
    isActive: boolean;
    links: {
        linkedin: string;
        gmail: string;
    }
};