System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, CCInteger, instantiate, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, blockType, gameManager;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0,
    blockType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "77beaDGATBFnb/Q/TPPTmdz", "gameManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (blockType) {
        blockType[blockType["bt_None"] = 0] = "bt_None";
        blockType[blockType["bt_Stone"] = 1] = "bt_Stone";
      })(blockType || (blockType = {}));

      _export("gameManager", gameManager = (_dec = ccclass("gameManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(gameManager, _Component);

        function gameManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, gameManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(gameManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cubePrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "roadLength", _descriptor2, _assertThisInitialized(_this));

          _this._road = [];
          return _this;
        }

        _createClass(gameManager, [{
          key: "start",
          value: function start() {
            this.generateRoad();
          }
        }, {
          key: "generateRoad",
          value: function generateRoad() {
            this.node.removeAllChildren();
            this._road = [];

            this._road.push(blockType.bt_Stone);

            for (var i = 1; i < this.roadLength; i++) {
              if (this._road[i - 1] == blockType.bt_None) this._road.push(blockType.bt_Stone);else this._road.push(Math.floor(Math.random() * 2));
            }

            for (var j = 0; j < this._road.length; j++) {
              var block = this.spawnBlockByType(this._road[j]);

              if (block) {
                this.node.addChild(block);
                block.setPosition(j, -1.5, 0);
              }
            }
          }
        }, {
          key: "spawnBlockByType",
          value: function spawnBlockByType(type) {
            var block = null;

            switch (type) {
              case blockType.bt_Stone:
                block = instantiate(this.cubePrefab);
                break;
            }

            return block;
          } // update (deltaTime: number) {
          // // Your update function goes here.
          // }

        }]);

        return gameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2NvY29zM2RQcm9qZWN0L2NvY29zRGVtby9NaW5kWW91clN0ZXBEZW1vM0QvYXNzZXRzL3NjcmlwdHMvZ2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsIkNDSW50ZWdlciIsImluc3RhbnRpYXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiYmxvY2tUeXBlIiwiZ2FtZU1hbmFnZXIiLCJ0eXBlIiwiX3JvYWQiLCJnZW5lcmF0ZVJvYWQiLCJub2RlIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJwdXNoIiwiYnRfU3RvbmUiLCJpIiwicm9hZExlbmd0aCIsImJ0X05vbmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqIiwibGVuZ3RoIiwiYmxvY2siLCJzcGF3bkJsb2NrQnlUeXBlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImN1YmVQcmVmYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFFQUMsTUFBQUEsTSxPQUFBQSxNO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUztBQUNBQyxNQUFBQSxXLE9BQUFBLFc7Ozs7OztBQUdBQyxNQUFBQSxPLEdBRUFMLFUsQ0FGQUssTztBQUNBQyxNQUFBQSxRLEdBQ0FOLFUsQ0FEQU0sUTs7aUJBR0NDLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO0FBQUFBLFFBQUFBLFMsQ0FBQUEsUztTQUFBQSxTLEtBQUFBLFM7OzZCQU1RQyxXLFdBRFpILE9BQU8sQ0FBQyxhQUFELEMsVUFTSEMsUUFBUSxDQUFDO0FBQ05HLFFBQUFBLElBQUksRUFBRVA7QUFEQSxPQUFELEMsVUFJUkksUUFBUSxDQUFDO0FBQ05HLFFBQUFBLElBQUksRUFBRU47QUFEQSxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBS0RPLEssR0FBa0IsRTs7Ozs7O2tDQUVsQjtBQUNKLGlCQUFLQyxZQUFMO0FBQ0g7Ozt5Q0FFYztBQUNYLGlCQUFLQyxJQUFMLENBQVVDLGlCQUFWO0FBQ0EsaUJBQUtILEtBQUwsR0FBYSxFQUFiOztBQUNBLGlCQUFLQSxLQUFMLENBQVdJLElBQVgsQ0FBZ0JQLFNBQVMsQ0FBQ1EsUUFBMUI7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxVQUF6QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxrQkFBSSxLQUFLTixLQUFMLENBQVdNLENBQUMsR0FBRyxDQUFmLEtBQXFCVCxTQUFTLENBQUNXLE9BQW5DLEVBQ0ksS0FBS1IsS0FBTCxDQUFXSSxJQUFYLENBQWdCUCxTQUFTLENBQUNRLFFBQTFCLEVBREosS0FHSSxLQUFLTCxLQUFMLENBQVdJLElBQVgsQ0FBZ0JLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBaEI7QUFDUDs7QUFDRCxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtaLEtBQUwsQ0FBV2EsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsa0JBQUlFLEtBQVcsR0FBRyxLQUFLQyxnQkFBTCxDQUFzQixLQUFLZixLQUFMLENBQVdZLENBQVgsQ0FBdEIsQ0FBbEI7O0FBQ0Esa0JBQUlFLEtBQUosRUFDQTtBQUNJLHFCQUFLWixJQUFMLENBQVVjLFFBQVYsQ0FBbUJGLEtBQW5CO0FBQ0pBLGdCQUFBQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JMLENBQWxCLEVBQXFCLENBQUMsR0FBdEIsRUFBMkIsQ0FBM0I7QUFDQztBQUVKO0FBQ0o7OzsyQ0FDZ0JiLEksRUFBaUI7QUFDOUIsZ0JBQUllLEtBQUssR0FBRyxJQUFaOztBQUNBLG9CQUFRZixJQUFSO0FBQ0ksbUJBQUtGLFNBQVMsQ0FBQ1EsUUFBZjtBQUNJUyxnQkFBQUEsS0FBSyxHQUFHcEIsV0FBVyxDQUFDLEtBQUt3QixVQUFOLENBQW5CO0FBQ0E7QUFIUjs7QUFLQSxtQkFBT0osS0FBUDtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBdkQ2QnZCLFM7Ozs7O2lCQVdELEk7Ozs7Ozs7aUJBSUEsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZSxcclxuICAgIFByZWZhYixcclxuICAgIENDSW50ZWdlcixcclxuICAgIGluc3RhbnRpYXRlXHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHtcclxuICAgIGNjY2xhc3MsXHJcbiAgICBwcm9wZXJ0eVxyXG59ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gYmxvY2tUeXBlIHtcclxuICAgIGJ0X05vbmUsXHJcbiAgICBidF9TdG9uZVxyXG59XHJcblxyXG5AY2NjbGFzcyhcImdhbWVNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBnYW1lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBQcmVmYWJcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgY3ViZVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogQ0NJbnRlZ2VyXHJcbiAgICB9KVxyXG4gICAgcHVibGljIHJvYWRMZW5ndGg6IE51bWJlciA9IDUwO1xyXG5cclxuICAgIHByaXZhdGUgX3JvYWQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVJvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5fcm9hZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JvYWQucHVzaChibG9ja1R5cGUuYnRfU3RvbmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5yb2FkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvYWRbaSAtIDFdID09IGJsb2NrVHlwZS5idF9Ob25lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9hZC5wdXNoKGJsb2NrVHlwZS5idF9TdG9uZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvYWQucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fcm9hZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2s6IE5vZGUgPSB0aGlzLnNwYXduQmxvY2tCeVR5cGUodGhpcy5fcm9hZFtqXSk7XHJcbiAgICAgICAgICAgIGlmIChibG9jaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKTtcclxuICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaiwgLTEuNSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Bhd25CbG9ja0J5VHlwZSh0eXBlOiBibG9ja1R5cGUpIHtcclxuICAgICAgICBsZXQgYmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGJsb2NrVHlwZS5idF9TdG9uZTpcclxuICAgICAgICAgICAgICAgIGJsb2NrID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59Il19