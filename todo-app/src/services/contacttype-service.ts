import {HttpClient, inject} from "aurelia";
import {IContactType} from "../domain/IContactType";

@inject()
export class ContacttypeService {

    constructor(private httpClient: HttpClient) {
    }


    async getAll(): Promise<IContactType[]> {
        const response = await this.httpClient
            .get("https://localhost:5001/api/contacttypes/", {cache: "no-store"});
        console.log(response)
        if (response.ok) {
            const data = (await response.json()) as IContactType[];
            return data;
        }
        return [];

    }

    getAllPromiseStyle(): Promise<IContactType[]> {
        return this.httpClient
            .get("https://localhost:5001/api/contacttypes/", {cache: "no-store"})
            .then(response => response.json())
            .then(data => {return data;})
            .catch(error => []);
    }
}