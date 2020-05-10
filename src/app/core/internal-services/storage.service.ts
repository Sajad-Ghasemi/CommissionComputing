import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    public static TOKEN_KEY = "tokenKey";
    constructor() {

    }

    public setItem(key: string, data: any): void {
        localStorage.setItem(key, data);
    }

    public getItem(key: string): any {
        return localStorage.getItem(key);
    }

    public removeItem(key: string) {
        localStorage.removeItem(key);
    }
}