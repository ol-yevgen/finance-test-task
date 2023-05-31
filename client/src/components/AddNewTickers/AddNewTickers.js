import { memo, useState } from "react"
import { socket } from "../../lib/socket"

import  {InputCustom}  from "../UI/InputCustom/InputCustom"
import { Button } from "../UI/Button/Button"

import addIcon from '../../App/assets/add.svg'

const addNewIcon = <img src={addIcon} width="25px" height="25px" alt="add"></img>

const AddNewTickers = () => {
    const [newTicker, setNewTicker] = useState('')

    const handleAddNewTickers = () => {
        if (newTicker === '') { 
            return
        } else {
            socket.emit('addTicker', newTicker)
            setNewTicker('')
        }
    }

    const onHandlerAddNewTickers = (e) => {
        e.preventDefault();
        setNewTicker((e.target.value).toUpperCase())
    }

    return (
        <section className="add">
            <InputCustom
                type="text"
                value={newTicker}
                placeholder={'Add Ticker Name'}
                func={onHandlerAddNewTickers}
                className={'add__ticker'}
            />
            <Button
                text={addNewIcon}
                func={handleAddNewTickers}
                className={'add__btn'}
            />

        </section>
    )
}

export default memo(AddNewTickers)