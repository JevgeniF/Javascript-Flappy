import {HttpClient, inject} from "aurelia";
import {IJoke} from "../domain/IJoke";

@inject()
export class JokeService {

    constructor(private httpClient: HttpClient) {
    }

    async getFivePolitical(): Promise<IJoke[]> {
        const data = [];
        const ids = [];
        console.log(ids)
        while (data.length < 5) {
            const response = await this.httpClient
                .get("https://api.chucknorris.io/jokes/random?category=political", {cache: "no-store"});
            if (response.ok) {
                const joke = (await response.json()) as IJoke;
                if (!ids.includes(joke.id)) {
                    data.push(joke)
                    ids.push(joke.id)
                }
            }
        }
        console.log(data)
        return data as IJoke[]
    }

    async getFiveMovie(): Promise<IJoke[]> {
        const data = [];
        const ids = [];
        console.log(ids)
        while (data.length < 5) {
            const response = await this.httpClient
                .get("https://api.chucknorris.io/jokes/random?category=movie", {cache: "no-store"});
            if (response.ok) {
                const joke = (await response.json()) as IJoke;
                if (!ids.includes(joke.id)) {
                    data.push(joke)
                    ids.push(joke.id)
                }
            }
        }
        console.log(data)
        return data as IJoke[]
    }

    async getFiveDev(): Promise<IJoke[]> {
        const data = [];
        const ids = [];
        console.log(ids)
        while (data.length < 5) {
            const response = await this.httpClient
                .get("https://api.chucknorris.io/jokes/random?category=dev", {cache: "no-store"});
            if (response.ok) {
                const joke = (await response.json()) as IJoke;
                if (!ids.includes(joke.id)) {
                    data.push(joke)
                    ids.push(joke.id)
                }
            }
        }
        console.log(data)
        return data as IJoke[]
    }
}