import clsx from "clsx"
import css from './FriendListItem.module.css'
import { TbPointFilled } from "react-icons/tb";

function FriendListItem({ name, avatar, isOnline }) {
    return (
        <div className={css.item}>
            <img src={avatar} alt={name} className={css.img}  />
            <p className={css.name}>{name}</p>
            <TbPointFilled className={clsx(isOnline ? css.blink : css.hidden)} size="28"/>
            <p className={clsx(isOnline? css.green  : css.red)}>{isOnline? `Online` : `Offline`}</p>
        </div>
    )
}

export default FriendListItem