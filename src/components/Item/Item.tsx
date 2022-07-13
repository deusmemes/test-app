import styles from './Item.module.css'
import clsx from "clsx";

interface Props {
    title: string
    isCompleted: boolean
}

const Item = ({ title, isCompleted }: Props) => {
    const classes = clsx(
        styles.item,
        isCompleted && styles.completed
    )

    return (
        <div className={classes}>{ title }</div>
    )
}

export default Item
