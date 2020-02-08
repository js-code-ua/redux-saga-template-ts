/* eslint-disable @typescript-eslint/no-namespace */
import { createAction } from 'redux-actions';
import { IUser } from '../../types';

export namespace UserActions {
    export enum Type {
        SET_USER = 'SET_USER'
    }

    export const setUser = createAction<IUser>(Type.SET_USER);
}

export type UserActions = Omit<typeof UserActions, 'Type'>;