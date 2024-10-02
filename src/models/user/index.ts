export interface Item {
    id: string;
    name: string;
}

export interface User {
    id?: string;
    username: string;
    password: string;
    applications: Item[];
    cvs: Item[];
}
