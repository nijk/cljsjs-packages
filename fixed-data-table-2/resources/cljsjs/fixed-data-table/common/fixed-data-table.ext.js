/**********************************************************************
 * Extern for FixedDataTable
 * Generated by http://jmmk.github.io/javascript-externs-generator
 * Loaded JavaScripts:
     https://unpkg.com/react@15.6.1/dist/react.min.js
     https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js
     https://unpkg.com/fixed-data-table-2@0.8.11/dist/fixed-data-table.min.js
 **********************************************************************/
var FixedDataTable = {
    "Cell": {
        "propTypes": {
            "columnKey": {
                "isRequired": function () {}
            },
            "height": {
                "isRequired": function () {}
            },
            "rowIndex": {
                "isRequired": function () {}
            },
            "width": {
                "isRequired": function () {}
            }
        }
    },
    "Column": {
        "__TableColumn__": {},
        "defaultProps": {
            "allowCellsRecycling": {},
            "fixed": {},
            "fixedRight": {}
        },
        "propTypes": {
            "align": {
                "isRequired": function () {}
            },
            "allowCellsRecycling": {
                "isRequired": function () {}
            },
            "cell": {
                "isRequired": function () {}
            },
            "columnKey": {
                "isRequired": function () {}
            },
            "fixed": {
                "isRequired": function () {}
            },
            "fixedRight": {
                "isRequired": function () {}
            },
            "flexGrow": {
                "isRequired": function () {}
            },
            "footer": {
                "isRequired": function () {}
            },
            "header": {
                "isRequired": function () {}
            },
            "isReorderable": {
                "isRequired": function () {}
            },
            "isResizable": {
                "isRequired": function () {}
            },
            "maxWidth": {
                "isRequired": function () {}
            },
            "minWidth": {
                "isRequired": function () {}
            },
            "pureRendering": {
                "isRequired": function () {}
            },
            "width": function () {}
        }
    },
    "ColumnGroup": {
        "__TableColumnGroup__": {},
        "defaultProps": {
            "fixed": {}
        },
        "propTypes": {
            "align": {
                "isRequired": function () {}
            },
            "fixed": {
                "isRequired": function () {}
            },
            "header": {
                "isRequired": function () {}
            }
        }
    },
    "Table": {
        "defaultProps": {
            "footerHeight": {},
            "groupHeaderHeight": {},
            "headerHeight": {},
            "keyboardPageEnabled": {},
            "keyboardScrollEnabled": {},
            "showScrollbarX": {},
            "showScrollbarY": {},
            "stopScrollPropagation": {},
            "touchScrollEnabled": {}
        },
        "displayName": {},
        "getDefaultProps": {
            "isReactClassApproved": {}
        },
        "propTypes": {
            "bufferRowCount": {
                "isRequired": function () {}
            },
            "cellGroupWrapperHeight": {
                "isRequired": function () {}
            },
            "className": {
                "isRequired": function () {}
            },
            "footerHeight": {
                "isRequired": function () {}
            },
            "groupHeaderHeight": {
                "isRequired": function () {}
            },
            "headerHeight": function () {},
            "height": {
                "isRequired": function () {}
            },
            "isColumnReordering": {
                "isRequired": function () {}
            },
            "isColumnResizing": {
                "isRequired": function () {}
            },
            "keyboardPageEnabled": {
                "isRequired": function () {}
            },
            "keyboardScrollEnabled": {
                "isRequired": function () {}
            },
            "maxHeight": {
                "isRequired": function () {}
            },
            "onColumnReorderEndCallback": {
                "isRequired": function () {}
            },
            "onColumnResizeEndCallback": {
                "isRequired": function () {}
            },
            "onContentHeightChange": {
                "isRequired": function () {}
            },
            "onHorizontalScroll": {
                "isRequired": function () {}
            },
            "onRowClick": {
                "isRequired": function () {}
            },
            "onRowContextMenu": {
                "isRequired": function () {}
            },
            "onRowDoubleClick": {
                "isRequired": function () {}
            },
            "onRowMouseDown": {
                "isRequired": function () {}
            },
            "onRowMouseEnter": {
                "isRequired": function () {}
            },
            "onRowMouseLeave": {
                "isRequired": function () {}
            },
            "onRowMouseUp": {
                "isRequired": function () {}
            },
            "onRowTouchEnd": {
                "isRequired": function () {}
            },
            "onRowTouchMove": {
                "isRequired": function () {}
            },
            "onRowTouchStart": {
                "isRequired": function () {}
            },
            "onScrollEnd": {
                "isRequired": function () {}
            },
            "onScrollStart": {
                "isRequired": function () {}
            },
            "onVerticalScroll": {
                "isRequired": function () {}
            },
            "overflowX": {
                "isRequired": function () {}
            },
            "overflowY": {
                "isRequired": function () {}
            },
            "ownerHeight": {
                "isRequired": function () {}
            },
            "rowClassNameGetter": {
                "isRequired": function () {}
            },
            "rowExpanded": {
                "isRequired": function () {}
            },
            "rowHeight": function () {},
            "rowHeightGetter": {
                "isRequired": function () {}
            },
            "rowKeyGetter": {
                "isRequired": function () {}
            },
            "rowsCount": function () {},
            "scrollLeft": {
                "isRequired": function () {}
            },
            "scrollToColumn": {
                "isRequired": function () {}
            },
            "scrollToRow": {
                "isRequired": function () {}
            },
            "scrollTop": {
                "isRequired": function () {}
            },
            "showScrollbarX": {
                "isRequired": function () {}
            },
            "showScrollbarY": {
                "isRequired": function () {}
            },
            "stopScrollPropagation": {
                "isRequired": function () {}
            },
            "subRowHeight": {
                "isRequired": function () {}
            },
            "subRowHeightGetter": {
                "isRequired": function () {}
            },
            "touchScrollEnabled": {
                "isRequired": function () {}
            },
            "width": function () {}
        }
    },
    "version": {}
};
FixedDataTable.Cell.prototype = {
    "forceUpdate": function () {},
    "isReactComponent": function () {},
    "setState": function () {}
};
FixedDataTable.Column.prototype = {
    "forceUpdate": function () {},
    "isReactComponent": function () {},
    "setState": function () {}
};
FixedDataTable.ColumnGroup.prototype = {
    "forceUpdate": function () {},
    "isReactComponent": function () {},
    "setState": function () {}
};
FixedDataTable.Table.prototype = {
    "__reactAutoBindPairs": function () {},
    "_areColumnSettingsIdentical": function () {},
    "_calculateState": function () {},
    "_didScrollStart": function () {},
    "_didScrollStopSync": function () {},
    "_onColumnReorder": function () {},
    "_onColumnReorderEnd": function () {},
    "_onColumnReorderMove": function () {},
    "_onColumnResize": function () {},
    "_onHorizontalScroll": function () {},
    "_onKeyDown": function () {},
    "_onScroll": function () {},
    "_onVerticalScroll": function () {},
    "_populateColumnsAndColumnData": function () {},
    "_renderRows": function () {},
    "_reportContentHeight": function () {},
    "_selectColumnElement": function () {},
    "_shouldHandleTouchX": function () {},
    "_shouldHandleTouchY": function () {},
    "_shouldHandleWheelX": function () {},
    "_shouldHandleWheelY": function () {},
    "_showScrollbarY": function () {},
    "_splitColumnTypes": function () {},
    "childContextTypes": function () {},
    "componentDidMount": function () {},
    "componentDidUpdate": function () {},
    "componentWillMount": function () {},
    "componentWillReceiveProps": function () {},
    "componentWillUnmount": function () {},
    "componentWillUpdate": function () {},
    "constructor": function () {},
    "contextTypes": function () {},
    "forceUpdate": function () {},
    "getChildContext": function () {},
    "getDefaultProps": function () {},
    "getInitialState": function () {},
    "isMounted": function () {},
    "isReactComponent": function () {},
    "mixins": function () {},
    "propTypes": function () {},
    "render": function () {},
    "replaceState": function () {},
    "setState": function () {},
    "shouldComponentUpdate": function () {},
    "statics": function () {},
    "updateComponent": function () {}
};
/**********************************************************************
 * End Generated Extern for FixedDataTable
/**********************************************************************/
