import {useEffect} from "react";
import {api} from "../../app/api";

const Main = () => {
    useEffect(() => {
        api.todo.getAll()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>main</div>
    )
}

export default Main
