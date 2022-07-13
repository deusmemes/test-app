import ItemComponent from "../Item/Item";
import Button from "../Button/Button";
import {Item} from "../../types/Item";
import styles from './ItemContainer.module.css'

interface Props {
    item: Item
    onRemove: (item: string) => void
    onComplete: (item: string) => void
}

const ItemContainer = ({ item, onRemove, onComplete }: Props) => {
    return (
        <div className={styles.container}>
            <ItemComponent
                title={item.title}
                isCompleted={item.isCompleted}
            />
            <Button onClick={() => onRemove(item.title)}>Remove</Button>
            <Button onClick={() => onComplete(item.title)}>{ item.isCompleted ? 'Выполнено' : 'Не выполнено' }</Button>
        </div>
    )
}

export default ItemContainer
