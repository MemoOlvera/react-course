import React from "react";

export const Increment = React.memo(({ fatherIncrement }) => {
    console.log('Redibujando');
    return (
        <button onClick={() => fatherIncrement(10)}>+1</button>
    )
})