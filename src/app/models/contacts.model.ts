export class ContactsModel {
    private static count: number = 0;
    private _id: number;
    private _name: string;
    private _email: string;
    private _password: string;
    private _phoneNumber: string;

    constructor(email?: string, password?: string, name: string = "", phoneNumber: string = "") {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }
    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }
    public get password(): string {
        return this._password;
    }
    public set password(password: string) {
        this._password = password;
    }
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }
}