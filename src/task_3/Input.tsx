import {ChangeEvent, useState} from "react";

export const Input = () => {

    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}