// https://github.com/mohsen1/json-formatter-js to show the structure
import Vue from 'vue'
import JSONFormatter from 'json-formatter-js'

Vue.directive('json-viewer', (el, { value }) => {
  const formatter = new JSONFormatter(value)
  el.append(formatter.render())
})
