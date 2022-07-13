import Input from "../Input/Input";
import Button from "../Button/Button";
import {useMemo, useState} from "react";

interface Props {
    onAdd: (title: string) => void
}

const AddItem = ({ onAdd }: Props) => {
    const [newItem, setNewItem] = useState<string>('')

    const isDisabled = useMemo(() => {
        return newItem.length === 0;
    }, [newItem])

    const add = () => {
        if (newItem.length === 0) return
        onAdd(newItem)
        setNewItem('')
    }

    return (
        <div>
            <Input value={newItem} onChange={setNewItem} />
            <Button onClick={add} disabled={isDisabled}>Add</Button>
        </div>
    )
}

export default AddItem
