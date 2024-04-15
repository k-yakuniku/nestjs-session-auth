export interface IUserUpdateInput {
    email?: string;
    password?: string;
    name?: string;
    introduction?: string;
}
export interface IUserExposed {
    _id: string;
    name?: string;
    introduction?: string;
    email: string;
    createdAd: Date;
    updatedAt: Date;
}
