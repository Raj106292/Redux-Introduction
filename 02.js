// How Redux Works?

/* 
    => when we use Redux there has a global storage -> Provider
    => all states stored in the global storage (centralized)
    => components -> consumer of Provider (global storage)
    => components are connected with the storage -> subscription
    => components create new states
    => new states value enter into the global storage
    => modifier compare the new and the old state and update the state data
    => when state data is updated it will trigger an event
    => then the subscriber (components) got the updated state data

    => Basic work of Redux:
        => component state ->  global state
*/