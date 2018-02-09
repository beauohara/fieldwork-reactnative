// @flow

import { Metrics, Colors, Fonts } from '../../themes';

export default {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: Metrics.screenWidth / 2,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: 16,
  }

};
