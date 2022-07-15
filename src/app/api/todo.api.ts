import Api from "./index";
import {CreateItemDto, Item} from "../types/Item";
import {todo} from "./endpoints";

export default class TodoApi {
    constructor(private readonly api: Api) {}

    public getAll(): Promise<Item[]> {
        // return Promise.resolve([])
        return this.api.get<Item[]>(todo.getAll())
    }

    public getById(id: number): Promise<Item> {
        return this.api.get<Item>(todo.getById(id))
    }

    public create(dto: CreateItemDto): Promise<Item> {
        return this.api.post<CreateItemDto, Item>(todo.create(), dto)
    }
}
