/**
 * @param {Object} switchA
 * @param {Function} switchA.isUp
 * @param {string} switchA.status
 *
 * @param {Object} light
 * @param {Function} light.on
 * @param {Function} light.off
 */
function handleLightOneSwitch(switchA, light) {
  if (switchA.isUp()) {
    light.on();
  } else {
    light.off();
  }
}

/**
 * @param {Object} switchA
 * @param {Function} switchA.isUp
 * @param {string} switchA.status
 *
 * @param {Object} switchB
 * @param {Function} switchB.isUp
 * @param {string} switchB.status
 *
 * @param {Object} light
 * @param {Function} light.on
 * @param {Function} light.off
 */
function handleLightTwoSwitches(switchA, switchB, light) {
  if (switchA.status === switchB.status) {
    light.on();
  } else {
    light.off();
  }
}

export { handleLightOneSwitch, handleLightTwoSwitches };
