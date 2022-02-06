import React from 'react';

interface Props {
    todos: string | number;
    settodos: React.Dispatch<React.SetStateAction<string | number>>
}
const Inputfield: React.FC<Props> = ({ todos, settodos }) => {
    console.log(todos)
    return <div>
        <form action="">
            <input type="text" placeholder="Enter you task..." onChange={(e) => { return settodos(e.target.value) }} />
            <button type="submit">Go</button>
        </form>
    </div>;
}

export default Inputfield;
