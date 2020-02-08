import { RouterState, RouterAction } from "react-router-redux";
import { Reducer } from "react";
import { IUser } from "../../types";

/* eslint-disable @typescript-eslint/no-namespace */
export namespace RootState  {
    export interface IRootReducer {
        router: Reducer<RouterState, RouterAction>,
        user: IUser,
    }
}