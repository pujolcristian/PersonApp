export const API_ENDPOINTS = {
    PERSON: {
        GET_ALL: '/persons',
        GET_BY_ID: (id: number) => `/persons/${id}`,
        CREATE: '/persons',
        UPDATE: (id: number) => `/persons/${id}`,
        DELETE: (id: number) => `/persons/${id}`,
    },
};