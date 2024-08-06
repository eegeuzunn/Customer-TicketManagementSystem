export type email = {
    authorFullName: string;
    phoneNumber: string;
    title: string;
    description: string;
}

export type registerType = {
    name: string;
    surname:string
    email:string;
    password: string;
    phoneNumber: string
}

export type customerType = {

    customerId: number,
    customerFullName: string,
    phoneNumber: string,
    address: string,
}