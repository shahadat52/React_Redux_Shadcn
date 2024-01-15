import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => {
                const params = new URLSearchParams()
                if (priority) {
                    params.append('priority', priority)
                }
                return {
                    url: "/tasks",
                    method: 'GET',
                    params: params
                }

            },
            providesTags: ['todo']
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: '/task',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['todo']
        }),
        deleteTodo: builder.mutation({
            query: (id) => {
                return {
                    url: `/task/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['todo']
        }),
        statusUpdate: builder.mutation({
            query: (data) => {
                console.log(data.updateData);
                return {
                    url: `/task/${data._id}`,
                    method: 'PUT',
                    body: data.updateData
                }
            },
            invalidatesTags: ['todo']
        }),

        todoUpdate: builder.mutation({
            query: (data) => {
                
                console.log(data._id);
                return {
                    url: `/task/${data._id}`,
                    method: 'PUT',
                    body: data.updateInfo
                }
            },
            invalidatesTags: ['todo']
        }),

    })
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useStatusUpdateMutation, useTodoUpdateMutation } = baseApi
// export const {useGet} = baseApi