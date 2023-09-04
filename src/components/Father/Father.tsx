import { useContext, useRef } from "react";
import Child from "../Child/Child";
import { TextContext } from "../../Context/TextContext";

const Father = () => {
  const context = useContext(TextContext);

  const refInputState = useRef<HTMLInputElement>(null);
  
  if (!context) return;
  console.log('Father');
  const { state, setState } = context;


  return (
    <div>
        <input type="text" name="input-value-state" id="input-value-state-id" placeholder="Enter a value: " ref={refInputState} />
        <button type="button" onClick={() => setState(refInputState.current!.value)}>Change State!</button>
        <Child></Child>
    </div>
    
  )
};

export default Father;

