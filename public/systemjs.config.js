System.config({
  "meta": {
    "*.json": {
      "loader": "systemjs-json-plugin"
    },
    "*.jsx": {
      "babelOptions": {
        "react": true
      }
    }
  },
  "packages": {
    "pako": {
      "defaultExtension": "js",
      "main": "./index.js"
    },
    "app": {
      "main": "./main.jsx"
    },
    "@progress/kendo-ui": {
      "main": "js/kendo.all.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-barcodes-react-wrapper": {
      "main": "dist/cdn/kendo-barcodes-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-buttons-react-wrapper": {
      "main": "dist/cdn/kendo-buttons-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-charts-react-wrapper": {
      "main": "dist/cdn/kendo-charts-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-dateinputs-react-wrapper": {
      "main": "dist/cdn/kendo-dateinputs-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-dialog-react-wrapper": {
      "main": "dist/cdn/kendo-dialog-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-dropdowns-react-wrapper": {
      "main": "dist/cdn/kendo-dropdowns-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-editor-react-wrapper": {
      "main": "dist/cdn/kendo-editor-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-gantt-react-wrapper": {
      "main": "dist/cdn/kendo-gantt-react-wrapper.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-gauges-react-wrapper": {
      "main": "dist/cdn/kendo-gauges-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-grid-react-wrapper": {
      "main": "dist/cdn/kendo-grid-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-inputs-react-wrapper": {
      "main": "dist/cdn/kendo-inputs-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-layout-react-wrapper": {
      "main": "dist/cdn/kendo-layout-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-popups-react-wrapper": {
      "main": "dist/cdn/kendo-popups-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-scheduler-react-wrapper": {
      "main": "dist/cdn/kendo-scheduler-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-treelist-react-wrapper": {
      "main": "dist/cdn/kendo-treelist-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-treeview-react-wrapper": {
      "main": "dist/cdn/kendo-treeview-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-upload-react-wrapper": {
      "main": "dist/cdn/kendo-upload-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-validator-react-wrapper": {
      "main": "dist/cdn/kendo-validator-react-wrapper.min.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-window-react-wrapper": {
      "main": "dist/cdn/kendo-window-react-wrapper.min.js",
      "defaultExtension": "js"
    }
  },
  "bundles": {
    "https://www.telerik.com/kendo-react-ui-wrappers/npm/node_modules/@progress/kendo-drawing/dist/systemjs/kendo-drawing.js": [
      "@progress/kendo-drawing",
      "@progress/kendo-drawing/*"
    ]
  },
  "map": {
    "app": "app",
    "systemjs-json-plugin": "https://unpkg.com/systemjs-plugin-json@0.3.0",
    "react": "https://unpkg.com/react@16.0.0/umd/react.production.min.js",
    "react-dom": "https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js",
    "react-dom/server": "https://unpkg.com/react-dom@16.0.0/umd/react-dom-server.browser.production.min.js",
    "redux": "https://unpkg.com/redux@3.7.2/dist/redux.min.js",
    "react-redux": "https://unpkg.com/react-redux@5.0.6/dist/react-redux.min.js",
    "react-router": "https://unpkg.com/react-router@4.2.0/umd/react-router.min.js",
    "react-router-dom": "https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.min.js",
    "react-transition-group": "https://unpkg.com/react-transition-group@2.2.1/dist/react-transition-group.min.js",
    "prop-types": "https://unpkg.com/prop-types@15.6.0/prop-types.js",
    "pako": "https://unpkg.com/pako@1.0.5",
    "classnames": "https://unpkg.com/classnames",
    "cldr-data": "https://www.telerik.com/kendo-react-ui-wrappers/npm/node_modules/cldr-data",
    "tslib": "https://unpkg.com/tslib@1.7.1",
    "@telerik": "https://www.telerik.com/kendo-react-ui-wrappers/npm/node_modules/@telerik",
    "@progress": "https://www.telerik.com/kendo-react-ui-wrappers/npm/node_modules/@progress",
    "plugin-babel": "https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js",
    "systemjs-babel-build": "https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
    "jquery": "https://unpkg.com/jquery@3.2.1/dist/jquery.min.js",
    "@progress/kendo-ui": "https://unpkg.com/@progress/kendo-ui/"
  },
  "transpiler": "plugin-babel"
});