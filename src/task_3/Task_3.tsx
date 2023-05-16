import {ChangeEvent, ReactNode, useCallback, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from "./Input";


//find the problem and fix it as part of composition optimization, memo, children

// type TaskType = {
//     children: ReactNode
// }
// export const Task_3: React.FC<TaskType> = ({children}) => {
export const Task_3 = () => {

    return (
        <div>
            <div>Lags when change value</div>
            <Input/>
            {/*{children}*/}
            <SlowComponent/>
        </div>
    );
};
