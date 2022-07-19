import Api from "./index";
import {auth} from "./endpoints";

export default class UserApi {
    constructor(private readonly api: Api) {}

    public login(): Promise<string | undefined> {
        // return this.api.get<string | undefined>(auth.login())
        return Promise.resolve('userName')
    }
}
