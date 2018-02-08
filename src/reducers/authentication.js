import type { Action } from '../actions/types';

export type State = {
  latitude: number,
  fb_id: string,
  platform: string,
  os_version: string,
  timezone: string,
  app: string,
  device_token: string,
  push_token: string,
  client_version: string,
  provider: string,
  access_token: string,
  longitude: number,
};

const initialState = {
  facebook_app_name: '',
  facebook_id: '',
  facebook_access_token: '',
  device_token: '',
  platform: '',
  push_token: '',
  latitude: 0,
  longitude: 0,
  client: '',
  client_version: '',
  timezone: '',
  os_version: '',
  mixpanel_id: '',
};

function authentication(state: State = initialState, action: Action): State {
  if (action.type === 'CHANGE_DATA') {
    const result = {
      ...state,
      ...action.data,
    };
    return result;
  }
  return state;
}

module.exports = authentication;
