export interface RegisterUserCommandRequest {
    email: string;
    password: string;
    name?: string;
    username: string;
}
