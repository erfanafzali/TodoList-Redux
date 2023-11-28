import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// http://localhost:5000/todos

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAsyncTodo = createAsyncThunk(
  "todo/addAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/todos", {
        title: payload.title,
        id: Date.now(),
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await api.delete(`/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleAsyncTodo = createAsyncThunk(
  "todo/toggleAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/todos/${payload.id}`, {
        completed: payload.completed,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
  },
  extraReducers: {
    [getAsyncTodos.pending]: (state) => {
      state.loading = true;
      state.todos = [];
      state.error = "";
    },
    [getAsyncTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    },
    [getAsyncTodos.rejected]: (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.payload;
    },
    [addAsyncTodo.pending]: (state) => {
      state.loading = true;
    },
    [addAsyncTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    [deleteAsyncTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
    [toggleAsyncTodo.fulfilled]: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodo.completed = action.payload.completed;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
