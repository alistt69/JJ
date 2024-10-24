export interface ItemApp {
    id?: string;
    name: string;
    description: string;
    salary: string;
    location: string;
}

export interface ItemCvs {
    id?: string;
    name: string;
    profession: string;
    description: string;
    location: string;
    wantedSalary: string;
}

export interface User {
    id?: string;
    username: string;
    password: string;
    applications: ItemApp[];
    cvs: ItemCvs[];
}
