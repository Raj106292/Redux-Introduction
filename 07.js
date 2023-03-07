// What is Redux-Toolkit?

/* 
    => In old style of redux we have to install and integrate
        -> Redux
        -> React Redux
        -> Redux thunk
        -> Debugger
        -> Logger

    => Redux Toolkit -> new style of Redux
        -> simple: using immer -> we don't need to think about immutability
        -> we just apply core logic and it will return a simple hook -> by calling the hook we will get the data
        -> Opinionated: less customization
        -> Powerful: setup immer, debugger, logger automatically
        -> Effective: we don't need to think for other side. we can think more for core business logics:
            -> how to handle the states
            -> how to execute the states
            -> where my data is fetching 
*/