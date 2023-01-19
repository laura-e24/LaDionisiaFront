import { getAllCommentsProduct, createCommentProduct, disableComment, updateComment } from "./commentsApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStateGeneric } from "../../utils/general";
interface Comment {
    content: string,
    rating: number,
    userId: number,
    productId: number
}
export const getAllComments = createAsyncThunk(
    'comments/getAllWines',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getAllCommentsProduct(id)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const createComment = createAsyncThunk(
    'comments/createComment',
    async ({ id, comment }: { id: string| string[], comment: Comment }, { rejectWithValue }) => {
        try {
            const response = await createCommentProduct(id, comment)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const disableCommentUser = createAsyncThunk(
    'comments/disableCommentUser',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await disableComment(id)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const updateCommentUser = createAsyncThunk(
    'comments/updateCommentUser',
    async (comment: Comment, { rejectWithValue }) => {
      try {
        const response = await updateComment(comment)
        return response.data
      } catch (error) {
        return rejectWithValue(error.response.data)
      }
    }
  )

const initialState = {
    comments: [],
    allCommentsStatus: EStateGeneric.IDLE,
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.allCommentsStatus = EStateGeneric.SUCCEEDED;
        })
        builder.addCase(getAllComments.pending, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.PENDING;
        })
        builder.addCase(getAllComments.rejected, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.FAILED;
        })



        builder.addCase(createComment.fulfilled, (state, action) => {
            state.comments = state.comments.concat(action.payload);
            state.allCommentsStatus = EStateGeneric.SUCCEEDED;
        })
        builder.addCase(createComment.pending, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.PENDING;
        })
        builder.addCase(createComment.rejected, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.FAILED;
        })



        builder.addCase(disableCommentUser.fulfilled, (state, action) => {
            state.comments = state.comments.map(comment => {
                if (comment.id === action.payload.id)
                  return { ...comment, ...action.payload }
                else return comment
              });
            state.allCommentsStatus = EStateGeneric.SUCCEEDED;
        })
        builder.addCase(disableCommentUser.pending, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.PENDING;
        })
        builder.addCase(disableCommentUser.rejected, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.FAILED;
        })



        builder.addCase(updateCommentUser.fulfilled, (state, action) => {
            state.comments = state.comments.map(comment => {
                if (comment.id === action.payload.id)
                  return { ...comment, ...action.payload }
                else return comment
              });
            state.allCommentsStatus = EStateGeneric.SUCCEEDED;
        })
        builder.addCase(updateCommentUser.pending, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.PENDING;
        })
        builder.addCase(updateCommentUser.rejected, (state, _action) => {
            state.allCommentsStatus = EStateGeneric.FAILED;
        })

    }
})

export default commentsSlice.reducer

export const selectAllComments = (state) => state.comments.comments;
export const selectAllCommentsStatus = (state) => state.comments.allCommentsStatus;
