import {Dispatcher as dispatcher} from 'js/dispatcher';
import constants from 'constants/MapConstants';

let store = {};
let callbacks = [];

/**
* @param {string} key - name of property in the store
* @param {AnyObject} value - value to be stored
*/
const set = (key, value) => { store[key] = value; };
/**
* Update anyone observing this store
*/
const emit = () => { callbacks.forEach(observer => { observer(); }); };

export default {
  /**
  * Get value of a property from the store
  * @param {string} key - name of property in the store
  * @return {any object} - value stored
  */
  get: key => store[key],
  /**
  * Stringify the store for debugging
  * @return {string} Stringified version of the store
  */
  debug: () => JSON.stringify(store),
  /**
  * Register a observer for the store
  * @param {function} callback - callback function to invoke when the store changes
  */
  registerCallback: callback => { callbacks.push(callback); }
};

dispatcher.register(payload => {

  switch (payload.actionType) {
    case constants.basemap:
      set(constants.basemap, payload.data);
      emit();
    break;
    case constants.extent:
      set(constants.extent, {
        x: payload.data.center.getLongitude().toFixed(2),
        y: payload.data.center.getLatitude().toFixed(2),
        z: payload.data.zoom
      });
    break;
  }

});
