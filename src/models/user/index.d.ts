export interface User {
    id: string;
    username: string;
    password: string;
    applications: string[];
    cvs: string[];
}

export interface ItemApp {
    id: string;
    author_id: string;
    profession: string;
    description: string;
    salary: string;
    location: string;
}

export interface ItemCvs {
    id: string;
    author_id: string;
    name: string;
    profession: string;
    description: string;
    location: string;
    salary: string;
}
