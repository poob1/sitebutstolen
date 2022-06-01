export type Route = {
    name: string;
    path: string;
}

export type PageRoute = Route & {
    icon?: string;
}

export type ArticleRoute = Route & {
    description: string;
    date: Date;
    tags: string[];
}