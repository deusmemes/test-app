import {useTypedSelectorHook} from "../../hooks/useTypedSelector";
import {useDispatch} from "../../hooks/useAppDispatch";
import {useEffect} from "react";
import {actions} from "../../app/store/todo/slice";

const Main = () => {
    const dispatch = useDispatch()
    const todo = useTypedSelectorHook(state => state.todo)

    useEffect(() => {
        dispatch(actions.add({
            title: 'Some title',
            isCompleted: false,
            date: new Date()
        }))
    }, [])

    return (
        <div>
            { todo.map((t, i) => (
                <div key={i}>{t.title}</div>
            )) }
        </div>
    )
}

export default Main
