System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, Vec3, v3, AnimationComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, playcontroller;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "878d3JSeXJHzpo0gwBapSan", "playcontroller", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("playcontroller", playcontroller = (_dec = ccclass("playcontroller"), _dec2 = property({
        type: AnimationComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(playcontroller, _Component);

        function playcontroller() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, playcontroller);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(playcontroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "bodyAnim", _descriptor, _assertThisInitialized(_this));

          _this._startJump = false;
          _this._jumpStep = 0;
          _this._curJumpTime = 0;
          _this._jumpTime = 0.1;
          _this._curJumpSpeed = 0;
          _this._curPos = v3();
          _this._deltaPos = v3(0, 0, 0);
          _this._targetPos = v3();
          _this._isMoving = false;
          return _this;
        }

        _createClass(playcontroller, [{
          key: "start",
          value: function start() {// Your initialization goes here.
            //systemEvent.on(SystemEvent.EventType.MOUSE_UP,this.onMouseUp,this)
          }
        }, {
          key: "setInputActive",
          value: function setInputActive(active) {
            if (active) {
              systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
            } else {
              systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
            }
          }
        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
            if (event.getButton() === 0) {
              this.jumpByStep(1);
            } else if (event.getButton() === 2) {
              this.jumpByStep(2);
            }
          }
        }, {
          key: "jumpByStep",
          value: function jumpByStep(step) {
            if (this._isMoving) {
              return;
            }

            if (step == 1) {
              this.bodyAnim.play('oneStep');
            } else if (step == 2) {
              this.bodyAnim.play('twoStep');
            }

            this._startJump = true;
            this._jumpStep = step;
            this._curJumpTime = 0;
            this._curJumpSpeed = this._jumpStep / this._jumpTime;
            this.node.getPosition(this._curPos);
            Vec3.add(this._targetPos, this._curPos, v3(this._jumpStep, 0, 0));
            this._isMoving = true;
          }
        }, {
          key: "onOnceJumpEnd",
          value: function onOnceJumpEnd() {
            this._isMoving = false;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this._startJump) {
              this._curJumpTime += deltaTime;

              if (this._curJumpTime > this._jumpTime) {
                // end
                this.node.setPosition(this._targetPos);
                this._startJump = false;
                this.onOnceJumpEnd();
              } else {
                // tween
                this.node.getPosition(this._curPos);
                this._deltaPos.x = this._curJumpSpeed * deltaTime;
                Vec3.add(this._curPos, this._curPos, this._deltaPos);
                this.node.setPosition(this._curPos);
              }
            }
          }
        }]);

        return playcontroller;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bodyAnim", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2NvY29zM2RQcm9qZWN0L2NvY29zRGVtby9NaW5kWW91clN0ZXBEZW1vM0QvYXNzZXRzL3NjcmlwdHMvcGxheWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJWZWMzIiwidjMiLCJBbmltYXRpb25Db21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwbGF5Y29udHJvbGxlciIsInR5cGUiLCJfc3RhcnRKdW1wIiwiX2p1bXBTdGVwIiwiX2N1ckp1bXBUaW1lIiwiX2p1bXBUaW1lIiwiX2N1ckp1bXBTcGVlZCIsIl9jdXJQb3MiLCJfZGVsdGFQb3MiLCJfdGFyZ2V0UG9zIiwiX2lzTW92aW5nIiwiYWN0aXZlIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9VUCIsIm9uTW91c2VVcCIsIm9mZiIsImV2ZW50IiwiZ2V0QnV0dG9uIiwianVtcEJ5U3RlcCIsInN0ZXAiLCJib2R5QW5pbSIsInBsYXkiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJhZGQiLCJkZWx0YVRpbWUiLCJzZXRQb3NpdGlvbiIsIm9uT25jZUp1bXBFbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBRUFDLE1BQUFBLFcsT0FBQUEsVztBQUNBQyxNQUFBQSxXLE9BQUFBLFc7QUFFQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLEUsT0FBQUEsRTtBQUNBQyxNQUFBQSxrQixPQUFBQSxrQjs7Ozs7O0FBR0FDLE1BQUFBLE8sR0FFQVAsVSxDQUZBTyxPO0FBQ0FDLE1BQUFBLFEsR0FDQVIsVSxDQURBUSxROztnQ0FJU0MsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQyxVQVFIQyxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSSxFQUFFSjtBQURB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QTNCO0FBQ0g7QUFDSjtBQUNKOzs7O1FBaEYrQmYsUzs7Ozs7aUJBVU0sSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZSxcclxuICAgIHN5c3RlbUV2ZW50LFxyXG4gICAgU3lzdGVtRXZlbnQsXHJcbiAgICBFdmVudE1vdXNlLFxyXG4gICAgVmVjMyxcclxuICAgIHYzLFxyXG4gICAgQW5pbWF0aW9uQ29tcG9uZW50XHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHtcclxuICAgIGNjY2xhc3MsXHJcbiAgICBwcm9wZXJ0eVxyXG59ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwicGxheWNvbnRyb2xsZXJcIilcclxuZXhwb3J0IGNsYXNzIHBsYXljb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogQW5pbWF0aW9uQ29tcG9uZW50XHJcbiAgICB9KVxyXG4gICAgcHVibGljIGJvZHlBbmltOiBBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0SnVtcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfanVtcFN0ZXA6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jdXJKdW1wVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2p1bXBUaW1lOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIF9jdXJKdW1wU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jdXJQb3M6IFZlYzMgPSB2MygpO1xyXG4gICAgcHJpdmF0ZSBfZGVsdGFQb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgIHByaXZhdGUgX3RhcmdldFBvczogVmVjMyA9IHYzKCk7XHJcbiAgICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy9zeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsdGhpcy5vbk1vdXNlVXAsdGhpcylcclxuICAgIH1cclxuICAgIHNldElucHV0QWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTW91c2VVcChldmVudDogRXZlbnRNb3VzZSkge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAganVtcEJ5U3RlcChzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keUFuaW0ucGxheSgnb25lU3RlcCcpXHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5QW5pbS5wbGF5KCd0d29TdGVwJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9qdW1wU3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgdGhpcy5fY3VySnVtcFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2N1ckp1bXBTcGVlZCA9IHRoaXMuX2p1bXBTdGVwIC8gdGhpcy5fanVtcFRpbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgVmVjMy5hZGQodGhpcy5fdGFyZ2V0UG9zLCB0aGlzLl9jdXJQb3MsIHYzKHRoaXMuX2p1bXBTdGVwLCAwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25PbmNlSnVtcEVuZCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJKdW1wVGltZSA+IHRoaXMuX2p1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbmRcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT25jZUp1bXBFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhUG9zLnggPSB0aGlzLl9jdXJKdW1wU3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl9jdXJQb3MsIHRoaXMuX2N1clBvcywgdGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=