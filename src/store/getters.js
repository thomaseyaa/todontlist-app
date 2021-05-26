export const user = (state) => {
    return state.user
}

export const data = (state) => {
    return state.user.data
}

export const tasks = (state) => {
    console.log(state.tasks)
    return state.tasks
}

export const task = (state) => {
    return state.task
}

export const msg = (state) => {
    return state.msg
}



