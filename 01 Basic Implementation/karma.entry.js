/* eslint-disable */
var testContext = require.context('./src', true, /\.spec\.tsx?$/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
