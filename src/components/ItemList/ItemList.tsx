import {useState} from "react";
import ItemContainer from "../ItemContainer/ItemContainer";
import {Item} from "../../types/Item";
import AddItem from "../AddItem/AddItem";

const ItemList = () => {
    const [items, setItems] = useState<Item[]>([
        { title: 'title', date: new Date(), isCompleted: false}
    ])

    const remove = (title: string) => {
        setItems(prev => prev.filter(item => item.title !== title))
    }

    const add = (title: string) => {
        const item: Item = {
            title: title,
            date: new Date(),
            isCompleted: false
        }

        setItems([ ...items, item ])
    }

    const complete = (title: string) => {
        setItems(prev => prev.map(item => {
            if (item.title === title) return { ...item, isCompleted: !item.isCompleted }
            else return item
        }))
    }

    return (
        <div>
            <AddItem onAdd={add} />
            {
                items.map((item, index) => (
                    <ItemContainer
                        item={item}
                        key={index}
                        onRemove={remove}
                        onComplete={complete}
                    />
                ))
            }
        </div>
    )
}

export default ItemList
