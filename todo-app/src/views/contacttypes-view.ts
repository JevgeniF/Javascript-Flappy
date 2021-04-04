import {IContactType} from "../domain/IContactType";
import {ContacttypeService} from "../services/contacttype-service";

export class ContacttypesView {
    private data: IContactType[] = [];

    constructor(private contacttypeService: ContacttypeService) {
    }

    async attached() {
        this.data = await this.contacttypeService.getAll();
    }
}