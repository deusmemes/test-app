export const todo = {
    getAll: () => '/todo',
    getById: (id: number) => `/todo/${id}`,
    create: () => '/todo',
    delete: (id: number) =>`/todo/${id}`,
    update: (id: number) => `/todo/${id}`,
}

export const auth = {
    login: () => '/login'
}
