import {IJoke} from "../domain/IJoke";
import {JokeService} from "../services/joke-service";

export class MoviejokesView {
    private data: IJoke[];

    constructor(private jokeService: JokeService) {
    }

    async attached() {
        this.data = await this.jokeService.getFiveMovie()
    }
}