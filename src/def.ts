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

export interface Account {
    platform: string;
    username: string;
    url?: string;
    rel?: string;
}

export interface Project {
    name: string;
    description: string;
    language?: string;
    stargazers_count: number;
    updated_at: string;
    license?: {
        key: string,
        name: string,
        spdx_id: string,
        url: string,
        node_id: string
    },
    html_url: string;
}