import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type MovieState = {
  movies: Movie[];
};

const initialState: MovieState = {
  movies: [],
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query: string) => {
    console.log("check")

    try {
      
      const apiKey =import.meta.env.VITE_OMDB_API_KEY
      ;
      console.log("API Key:", apiKey);
    
      if (!apiKey) {
        throw new Error("API key is missing! Please check your .env file.");
      }
    
      const response = await axios.get("https://www.omdbapi.com/", {
        params: { s: query, apikey: apiKey },
      });
    
      console.log("Response Data:", response.data);
      return response.data.Search || [];
    } catch (error) {
      console.error("Error fetching movies:", error || error);
      return []; 
    }
    
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default movieSlice.reducer;
