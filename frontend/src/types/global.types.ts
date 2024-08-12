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

export type customerCommentType = {
    customerId: number;
    userId: number;
    commentText: string;
    commentId: number;
    user: {
        name: string;
    }
}

export type ticketType = {
    
    "id": number,
    "title": string,
    "description": string,
    "authorFullName": string,
    "createdAt": string,
    "phoneNumber": string,
    "cardinalityId": number,
    "cardinalityName": string
}