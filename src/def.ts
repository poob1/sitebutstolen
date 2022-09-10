export type Route = {
    name: string;
    path: string;
}

export type PageRoute = Route & {
    icon?: string;
}

export interface Article {
    title: string;
    description: string;
    date: Date;
    tags: string[];
}