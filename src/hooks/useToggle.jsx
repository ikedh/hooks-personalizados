import { useState,useCallback } from "react";

export const useToggle = () => {

    const [state, setState] = useState(true);


    const toggleState = useCallback(
        () => setState(state => !state),
        [state]
    );

        console.log(state)

    return {
        state,
        toggleState
    }
}

export default useToggle