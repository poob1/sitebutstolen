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
}

export interface Project {
    full_name: string;
    description: string;
    language?: string;
    stargazers_count: number;
    license?: {
        key: string,
        name: string,
        spdx_id: string,
        url: string,
        node_id: string
      },
    html_url: string;
}