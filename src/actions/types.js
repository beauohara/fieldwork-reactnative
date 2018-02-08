/**
 * Created By Borys
 *
 */

// type ParseObject = Object;

export type Action =
 { type: 'POSITION_CHANGED', data: Object }
 | { type: 'AUTH_LOGIN', data: Object }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
