import axios from 'axios'
import router from "../router";

export const login = ({ commit, state }, form) => {
    axios.post(
        'https://todontlist-api-thomas.herokuapp.com/api/auth/login',
        {
            email: form.email,
            password: form.password,
            device_name: "Mac"
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)
        const user = {
            name: response.data.name,
            email: response.data.email,
        }
        commit('data', user)
        state.msg.success = 'Successful connexion'
        router.push('/me');
    }).catch((error) => {
        console.log(error);
        state.msg.error = error
    });
}

export const register = ({ commit, state }, form) => {
    axios.post(
        'https://todontlist-api-thomas.herokuapp.com/api/auth/register',
        {
            name: form.name,
            email: form.email,
            password: form.password,
            device_name: "Mac"
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)
        const user = {
            name: response.data.name,
            email: response.data.email,
        }
        commit('data', user)
        state.msg.success = 'Successful registration'
        window.location.href="/login"
    }).catch((error) => {
        state.msg.error = error
        console.log(error);
    });
}

export const logout = ({ commit, state }) => {
    const token = state.user.token;
    if (!token) {
        return;
    }
    axios.post(
        'https://todontlist-api-thomas.herokuapp.com/api/auth/logout', {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response);
        state.msg.success = 'Successful logout'
    }).catch((error) => {
        console.log(error);
    });
    commit('token', null);
    commit('data', {});
    window.location.href = "/login"
}

export const userTasks = ({ commit, state }) => {
    console.log(state.user.token)
    axios.get(
        'https://todontlist-api-thomas.herokuapp.com/api/tasks', {
        headers: {
            'Authorization': `Bearer ${state.user.token}`
        }
    }).then((response) => {
        console.log(response.data);
        const tasks = response.data
        commit('tasks', tasks)
    }).catch((error) => {
        console.log(error);
    });
}

export const userTask = ({ commit, state }, id) => {
    console.log(state.user.token)
    axios.get(
        `https://todontlist-api-thomas.herokuapp.com/api/tasks/${id}`, {
        headers: {
            'Authorization': `Bearer ${state.user.token}`
        }
    }).then((response) => {
        console.log(response.data)
        const task = {
            id: response.data['id'],
            body: response.data['body']
        }
        commit('task', task)
    }).catch((error) => {
        console.log(error);
    });
}

export const createTask = ({ state }, form) => {
    axios.post(
        'https://todontlist-api-thomas.herokuapp.com/api/tasks/create', {
            body: form.body,
        },
        {
            headers: {
                'Authorization': `Bearer ${state.user.token}`
            }
        }
    ).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

export const updateTask = ({ commit, state }, task) => {
    axios.post(
        `https://todontlist-api-thomas.herokuapp.com/api/tasks/update/${task.id}`, {
            body: task.body,
        },
        {
            headers: {
                'Authorization': `Bearer ${state.user.token}`
            }
        }
    ).then((response) => {
        console.log(response);
        commit('task', task)
    }).catch((error) => {
        console.log(error);
    });
}

export const deleteTask = ({ state, commit }, task) => {
    axios.get(
        `https://todontlist-api-thomas.herokuapp.com/api/tasks/delete/${task.id}`, {
        headers: {
            'Authorization': `Bearer ${state.user.token}`
        }
    }).then((response) => {
        console.log(response);
        const task = {
            body: ''
        }
        commit('task', task)
    }).catch((error) => {
        console.log(error);
    });
}
