import { useMemo, useState } from "react";

export const HeavyMath = () => {

    const [numberList, setNumberList] = useState([2,3,4,5,6,7,8,9]);
    const [show, setShow] = useState(true);

    const getCaclulation = (numberList) => useMemo(() => {
        return numberList.reduce((a, b) => a * b);
    }, [numberList]);
    
    const handleAddNumber = () => setNumberList([...numberList, numberList[numberList.length - 1] + 1]);

  return (
    <>
        <h2>Calculos</h2>
        <p>{getCaclulation(numberList)}</p>
        <button onClick={() => setShow(!show)}>{ show ? 'Show' : 'Hide'}</button>
        <button onClick={() => handleAddNumber()}>Agregar numero</button>
    </>
  )
}
