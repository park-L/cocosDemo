System.register(["cc", "code-quality:cr", "./playcontroller.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, playcontroller, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, blockType, gameState, gameManager;

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

  function _reportPossibleCrUseOfplaycontroller(extras) {
    _reporterNs.report("playcontroller", "./playcontroller", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0,
    blockType: void 0,
    gameState: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_playcontrollerJs) {
      playcontroller = _playcontrollerJs.playcontroller;
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

      (function (gameState) {
        gameState[gameState["gs_Init"] = 0] = "gs_Init";
        gameState[gameState["gs_Playing"] = 1] = "gs_Playing";
        gameState[gameState["sg_End"] = 2] = "sg_End";
      })(gameState || (gameState = {}));

      _export("gameManager", gameManager = (_dec = ccclass("gameManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: _crd && playcontroller === void 0 ? (_reportPossibleCrUseOfplaycontroller({
          error: Error()
        }), playcontroller) : playcontroller
      }), _dec5 = property({
        type: Node
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

          _initializerDefineProperty(_this, "playerCtrl", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startMenu", _descriptor4, _assertThisInitialized(_this));

          _this._curState = gameState.gs_Init;
          _this._road = [];
          return _this;
        }

        _createClass(gameManager, [{
          key: "start",
          value: function start() {
            this.curState = gameState.gs_Init;
          }
        }, {
          key: "init",
          value: function init() {
            this.startMenu.active = true;
            this.generateRoad();
            this.playerCtrl.setInputActive(false);
            this.playerCtrl.node.setPosition(v3());
          }
        }, {
          key: "onStartuttonClicked",
          value: function onStartuttonClicked() {
            this.curState = gameState.gs_Playing;
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

        }, {
          key: "curState",
          set: function set(value) {
            var _this2 = this;

            switch (value) {
              case gameState.gs_Init:
                this.init();
                break;

              case gameState.gs_Playing:
                this.startMenu.active = false;
                setTimeout(function () {
                  _this2.playerCtrl.setInputActive(true);
                }, 0.1);
                break;

              case gameState.sg_End:
                break;
            }

            this._curState = value;
          }
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMenu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2NvY29zM2RQcm9qZWN0L2NvY29zRGVtby9NaW5kWW91clN0ZXBEZW1vM0QvYXNzZXRzL3NjcmlwdHMvZ2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJDQ0ludGVnZXIiLCJpbnN0YW50aWF0ZSIsInYzIiwicGxheWNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJibG9ja1R5cGUiLCJnYW1lU3RhdGUiLCJnYW1lTWFuYWdlciIsInR5cGUiLCJfY3VyU3RhdGUiLCJnc19Jbml0IiwiX3JvYWQiLCJjdXJTdGF0ZSIsInN0YXJ0TWVudSIsImFjdGl2ZSIsImdlbmVyYXRlUm9hZCIsInBsYXllckN0cmwiLCJzZXRJbnB1dEFjdGl2ZSIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsImdzX1BsYXlpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsInB1c2giLCJidF9TdG9uZSIsImkiLCJyb2FkTGVuZ3RoIiwiYnRfTm9uZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImoiLCJsZW5ndGgiLCJibG9jayIsInNwYXduQmxvY2tCeVR5cGUiLCJhZGRDaGlsZCIsImN1YmVQcmVmYWIiLCJ2YWx1ZSIsImluaXQiLCJzZXRUaW1lb3V0Iiwic2dfRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxNLE9BQUFBLE07QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLFcsT0FBQUEsVztBQUVBQyxNQUFBQSxFLE9BQUFBLEU7Ozs7QUFHQUMsTUFBQUEsYyxxQkFBQUEsYzs7Ozs7O0FBR0FDLE1BQUFBLE8sR0FFQVIsVSxDQUZBUSxPO0FBQ0FDLE1BQUFBLFEsR0FDQVQs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QUFDSSxxQkFBSzJCLElBQUw7QUFDQTs7QUFDSixtQkFBSy9CLFNBQVMsQ0FBQ2MsVUFBZjtBQUNJLHFCQUFLUCxTQUFMLENBQWVDLE1BQWYsR0FBd0IsS0FBeEI7QUFDQXdCLGdCQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLGtCQUFBLE1BQUksQ0FBQ3RCLFVBQUwsQ0FBZ0JDLGNBQWhCLENBQStCLElBQS9CO0FBQ0gsaUJBRlMsRUFFUCxHQUZPLENBQVY7QUFHQTs7QUFDSixtQkFBS1gsU0FBUyxDQUFDaUMsTUFBZjtBQUNJO0FBWFI7O0FBZUEsaUJBQUs5QixTQUFMLEdBQWlCMkIsS0FBakI7QUFDSDs7OztRQXJENEJ4QyxTOzs7OztpQkFXRCxJOzs7Ozs7O2lCQUlBLEU7Ozs7Ozs7aUJBTVEsSTs7Ozs7OztpQkFLWCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIF9kZWNvcmF0b3IsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOb2RlLFxyXG4gICAgUHJlZmFiLFxyXG4gICAgQ0NJbnRlZ2VyLFxyXG4gICAgaW5zdGFudGlhdGUsXHJcbiAgICBnYW1lLFxyXG4gICAgdjNcclxufSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHtcclxuICAgIHBsYXljb250cm9sbGVyXHJcbn0gZnJvbSBcIi4vcGxheWNvbnRyb2xsZXJcIjtcclxuY29uc3Qge1xyXG4gICAgY2NjbGFzcyxcclxuICAgIHByb3BlcnR5XHJcbn0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBibG9ja1R5cGUge1xyXG4gICAgYnRfTm9uZSxcclxuICAgIGJ0X1N0b25lXHJcbn1cclxuZW51bSBnYW1lU3RhdGUge1xyXG4gICAgZ3NfSW5pdCxcclxuICAgIGdzX1BsYXlpbmcsXHJcbiAgICBzZ19FbmRcclxufVxyXG5cclxuQGNjY2xhc3MoXCJnYW1lTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgZ2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogUHJlZmFiXHJcbiAgICB9KVxyXG4gICAgcHVibGljIGN1YmVQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IENDSW50ZWdlclxyXG4gICAgfSlcclxuICAgIHB1YmxpYyByb2FkTGVuZ3RoOiBOdW1iZXIgPSA1MDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBwbGF5Y29udHJvbGxlclxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBwbGF5ZXJDdHJsOiBwbGF5Y29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBOb2RlXHJcbiAgICB9KVxyXG4gICAgcHVibGljIHN0YXJ0TWVudTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VyU3RhdGU6IGdhbWVTdGF0ZSA9IGdhbWVTdGF0ZS5nc19Jbml0O1xyXG4gICAgcHJpdmF0ZSBfcm9hZDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmN1clN0YXRlID0gZ2FtZVN0YXRlLmdzX0luaXQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldCBjdXJTdGF0ZSh2YWx1ZTogZ2FtZVN0YXRlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVTdGF0ZS5nc19Jbml0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBnYW1lU3RhdGUuZ3NfUGxheWluZzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRNZW51LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLnNldElucHV0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVTdGF0ZS5zZ19FbmQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jdXJTdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TWVudS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSb2FkKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLnNldElucHV0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBsYXllckN0cmwubm9kZS5zZXRQb3NpdGlvbih2MygpKTtcclxuICAgIH1cclxuICAgIG9uU3RhcnR1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJTdGF0ZSA9IGdhbWVTdGF0ZS5nc19QbGF5aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUm9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLl9yb2FkID0gW107XHJcbiAgICAgICAgdGhpcy5fcm9hZC5wdXNoKGJsb2NrVHlwZS5idF9TdG9uZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnJvYWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9hZFtpIC0gMV0gPT0gYmxvY2tUeXBlLmJ0X05vbmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb2FkLnB1c2goYmxvY2tUeXBlLmJ0X1N0b25lKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9hZC5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9yb2FkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9jazogTm9kZSA9IHRoaXMuc3Bhd25CbG9ja0J5VHlwZSh0aGlzLl9yb2FkW2pdKTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaiwgLTEuNSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Bhd25CbG9ja0J5VHlwZSh0eXBlOiBibG9ja1R5cGUpIHtcclxuICAgICAgICBsZXQgYmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGJsb2NrVHlwZS5idF9TdG9uZTpcclxuICAgICAgICAgICAgICAgIGJsb2NrID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59Il19