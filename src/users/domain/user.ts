export class User {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private password: string,
    private signupVerifyToken: string,
  ) {}
}
