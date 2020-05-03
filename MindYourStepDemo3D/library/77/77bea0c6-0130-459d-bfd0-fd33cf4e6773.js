System.register(["cc", "code-quality:cr", "./playcontroller.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Prefab, CCInteger, instantiate, v3, LabelComponent, playcontroller, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, blockType, gameState, gameManager;

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
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
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
      LabelComponent = _cc.LabelComponent;
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
      }), _dec6 = property({
        type: LabelComponent
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

          _initializerDefineProperty(_this, "stepsLabel", _descriptor5, _assertThisInitialized(_this));

          _this._curState = gameState.gs_Init;
          _this._road = [];
          return _this;
        }

        _createClass(gameManager, [{
          key: "start",
          value: function start() {
            this.curState = gameState.gs_Init;
            this.playerCtrl.node.on("jumpEnd", this.onPlayerJumpEnd, this);
          }
        }, {
          key: "onPlayerJumpEnd",
          value: function onPlayerJumpEnd(moveIndex) {
            this.stepsLabel.string = moveIndex.toString();
            this.checkResult(moveIndex);
          }
        }, {
          key: "checkResult",
          value: function checkResult(moveIndex) {
            if (moveIndex <= this.roadLength) {
              if (this._road[moveIndex] == blockType.bt_None) {
                this.curState = gameState.gs_Init;
              }
            } else {
              this.curState = gameState.gs_Init;
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.startMenu.active = true;
            this.generateRoad();
            this.playerCtrl.setInputActive(false);
            this.playerCtrl.node.setPosition(v3());
            this.playerCtrl.reset();
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
          } // update (deltaTime: number) { // // Your update function goes here. // }

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
                this.stepsLabel.string = '0';
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stepsLabel", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3Byb2plY3QvY29jb3NEZW1vL01pbmRZb3VyU3RlcERlbW8zRC9hc3NldHMvc2NyaXB0cy9nYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsIkNDSW50ZWdlciIsImluc3RhbnRpYXRlIiwidjMiLCJMYWJlbENvbXBvbmVudCIsInBsYXljb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiYmxvY2tUeXBlIiwiZ2FtZVN0YXRlIiwiZ2FtZU1hbmFnZXIiLCJ0eXBlIiwiX2N1clN0YXRlIiwiZ3NfSW5pdCIsIl9yb2FkIiwiY3VyU3RhdGUiLCJwbGF5ZXJDdHJsIiwibm9kZSIsIm9uIiwib25QbGF5ZXJKdW1wRW5kIiwibW92ZUluZGV4Iiwic3RlcHNMYWJlbCIsInN0cmluZyIsInRvU3RyaW5nIiwiY2hlY2tSZXN1bHQiLCJyb2FkTGVuZ3RoIiwiYnRfTm9uZSIsInN0YXJ0TWVudSIsImFjdGl2ZSIsImdlbmVyYXRlUm9hZCIsInNldElucHV0QWN0aXZlIiwic2V0UG9zaXRpb24iLCJyZXNldCIsImdzX1BsYXlpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsInB1c2giLCJidF9TdG9uZSIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqIiwibGVuZ3RoIiwiYmxvY2siLCJzcGF3bkJsb2NrQnlUeXBlIiwiYWRkQ2hpbGQiLCJjdWJlUHJlZmFiIiwidmFsdWUiLCJpbml0Iiwic2V0VGltZW91dCIsInNnX0VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxNLE9BQUFBLE07QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLFcsT0FBQUEsVztB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bUJBQUtyQixTQUFTLENBQUN5QyxNQUFmO0FBQ0U7QUFaSjs7QUFlQSxpQkFBS3RDLFNBQUwsR0FBaUJtQyxLQUFqQjtBQUNEOzs7O1FBeEU4QmpELFM7Ozs7O2lCQVdILEk7Ozs7Ozs7aUJBSUEsRTs7Ozs7OztpQkFLUSxJOzs7Ozs7O2lCQUtYLEk7Ozs7Ozs7aUJBS00sSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgX2RlY29yYXRvcixcclxuICBDb21wb25lbnQsXHJcbiAgTm9kZSxcclxuICBQcmVmYWIsXHJcbiAgQ0NJbnRlZ2VyLFxyXG4gIGluc3RhbnRpYXRlLFxyXG4gIGdhbWUsXHJcbiAgdjMsXHJcbiAgTGFiZWxDb21wb25lbnQsXHJcbn0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IHBsYXljb250cm9sbGVyIH0gZnJvbSBcIi4vcGxheWNvbnRyb2xsZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gYmxvY2tUeXBlIHtcclxuICBidF9Ob25lLFxyXG4gIGJ0X1N0b25lLFxyXG59XHJcbmVudW0gZ2FtZVN0YXRlIHtcclxuICBnc19Jbml0LFxyXG4gIGdzX1BsYXlpbmcsXHJcbiAgc2dfRW5kLFxyXG59XHJcblxyXG5AY2NjbGFzcyhcImdhbWVNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBnYW1lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gIC8vIEBwcm9wZXJ0eVxyXG4gIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IFByZWZhYixcclxuICB9KVxyXG4gIHB1YmxpYyBjdWJlUHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBDQ0ludGVnZXIsXHJcbiAgfSlcclxuICBwdWJsaWMgcm9hZExlbmd0aDogTnVtYmVyID0gNTA7XHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBwbGF5Y29udHJvbGxlcixcclxuICB9KVxyXG4gIHB1YmxpYyBwbGF5ZXJDdHJsOiBwbGF5Y29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBOb2RlLFxyXG4gIH0pXHJcbiAgcHVibGljIHN0YXJ0TWVudTogTm9kZSA9IG51bGw7XHJcblxyXG5AcHJvcGVydHkoe1xyXG4gICAgdHlwZTpMYWJlbENvbXBvbmVudFxyXG59KVxyXG5wdWJsaWMgc3RlcHNMYWJlbDpMYWJlbENvbXBvbmVudD1udWxsO1xyXG5cclxuICBwcml2YXRlIF9jdXJTdGF0ZTogZ2FtZVN0YXRlID0gZ2FtZVN0YXRlLmdzX0luaXQ7XHJcbiAgcHJpdmF0ZSBfcm9hZDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmN1clN0YXRlID0gZ2FtZVN0YXRlLmdzX0luaXQ7XHJcbiAgICB0aGlzLnBsYXllckN0cmwubm9kZS5vbihcImp1bXBFbmRcIiwgdGhpcy5vblBsYXllckp1bXBFbmQsdGhpcyk7XHJcbiAgfVxyXG5cclxuICBvblBsYXllckp1bXBFbmQobW92ZUluZGV4OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zdGVwc0xhYmVsLnN0cmluZz1tb3ZlSW5kZXgudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuY2hlY2tSZXN1bHQobW92ZUluZGV4KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUmVzdWx0KG1vdmVJbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAobW92ZUluZGV4IDw9IHRoaXMucm9hZExlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5fcm9hZFttb3ZlSW5kZXhdID09IGJsb2NrVHlwZS5idF9Ob25lKSB7XHJcbiAgICAgICAgdGhpcy5jdXJTdGF0ZSA9IGdhbWVTdGF0ZS5nc19Jbml0O1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJTdGF0ZSA9IGdhbWVTdGF0ZS5nc19Jbml0O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHNldCBjdXJTdGF0ZSh2YWx1ZTogZ2FtZVN0YXRlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgZ2FtZVN0YXRlLmdzX0luaXQ6XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2FtZVN0YXRlLmdzX1BsYXlpbmc6XHJcbiAgICAgICAgdGhpcy5zdGFydE1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGVwc0xhYmVsLnN0cmluZz0nMCc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllckN0cmwuc2V0SW5wdXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnYW1lU3RhdGUuc2dfRW5kOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1clN0YXRlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0TWVudS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5nZW5lcmF0ZVJvYWQoKTtcclxuICAgIHRoaXMucGxheWVyQ3RybC5zZXRJbnB1dEFjdGl2ZShmYWxzZSk7XHJcbiAgICB0aGlzLnBsYXllckN0cmwubm9kZS5zZXRQb3NpdGlvbih2MygpKTtcclxuICAgIHRoaXMucGxheWVyQ3RybC5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgb25TdGFydHV0dG9uQ2xpY2tlZCgpIHtcclxuICAgIHRoaXMuY3VyU3RhdGUgPSBnYW1lU3RhdGUuZ3NfUGxheWluZztcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUm9hZCgpIHtcclxuICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5fcm9hZCA9IFtdO1xyXG4gICAgdGhpcy5fcm9hZC5wdXNoKGJsb2NrVHlwZS5idF9TdG9uZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucm9hZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9yb2FkW2kgLSAxXSA9PSBibG9ja1R5cGUuYnRfTm9uZSlcclxuICAgICAgICB0aGlzLl9yb2FkLnB1c2goYmxvY2tUeXBlLmJ0X1N0b25lKTtcclxuICAgICAgZWxzZSB0aGlzLl9yb2FkLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fcm9hZC5sZW5ndGg7IGorKykge1xyXG4gICAgICBsZXQgYmxvY2s6IE5vZGUgPSB0aGlzLnNwYXduQmxvY2tCeVR5cGUodGhpcy5fcm9hZFtqXSk7XHJcbiAgICAgIGlmIChibG9jaykge1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaiwgLTEuNSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc3Bhd25CbG9ja0J5VHlwZSh0eXBlOiBibG9ja1R5cGUpIHtcclxuICAgIGxldCBibG9jayA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBibG9ja1R5cGUuYnRfU3RvbmU6XHJcbiAgICAgICAgYmxvY2sgPSBpbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHsgLy8gLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLiAvLyB9XHJcbn1cclxuIl19