import {IJoke} from "../domain/IJoke";
import {JokeService} from "../services/joke-service";

export class PoliticaljokesView {
    private data: IJoke[];

    constructor(private jokeService: JokeService) {
    }

    async attached() {
        this.data = await this.jokeService.getFivePolitical()
    }
}