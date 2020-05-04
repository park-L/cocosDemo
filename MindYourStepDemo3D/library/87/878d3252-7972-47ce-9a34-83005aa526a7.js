System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, Vec3, v3, AnimationComponent, SkeletalAnimationComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, playcontroller;

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
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "878d3JSeXJHzpo0gwBapSan", "playcontroller", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("playcontroller", playcontroller = (_dec = ccclass("playcontroller"), _dec2 = property({
        type: AnimationComponent
      }), _dec3 = property({
        type: SkeletalAnimationComponent
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

          _initializerDefineProperty(_this, "cocosAnim", _descriptor2, _assertThisInitialized(_this));

          _this._startJump = false;
          _this._jumpStep = 0;
          _this._curJumpTime = 0;
          _this._jumpTime = 0.1;
          _this._curJumpSpeed = 0;
          _this._curPos = v3();
          _this._deltaPos = v3(0, 0, 0);
          _this._targetPos = v3();
          _this._isMoving = false;
          _this._curMoveIndex = 0;
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
            this._curMoveIndex += step;
            this.cocosAnim.getState('cocos_anim_jump').speed = 3;
            this.cocosAnim.play('cocos_anim_jump');
          }
        }, {
          key: "onOnceJumpEnd",
          value: function onOnceJumpEnd() {
            this._isMoving = false;
            this.cocosAnim.play('cocos_anim_idel');
            this.node.emit('jumpEnd', this._curMoveIndex);
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
        }, {
          key: "reset",
          value: function reset() {
            this._curMoveIndex = 0;
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cocosAnim", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3Byb2plY3QvY29jb3NEZW1vL01pbmRZb3VyU3RlcERlbW8zRC9hc3NldHMvc2NyaXB0cy9wbGF5Y29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsIlZlYzMiLCJ2MyIsIkFuaW1hdGlvbkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwicGxheWNvbnRyb2xsZXIiLCJ0eXBlIiwiX3N0YXJ0SnVtcCIsIl9qdW1wU3RlcCIsIl9jdXJKdW1wVGltZSIsIl9qdW1wVGltZSIsIl9jdXJKdW1wU3BlZWQiLCJfY3VyUG9zIiwiX2RlbHRhUG9zIiwiX3RhcmdldFBvcyIsIl9pc01vdmluZyIsIl9jdXJNb3ZlSW5kZXgiLCJhY3RpdmUiLCJvbiIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25Nb3VzZVVwIiwib2ZmIiwiZXZlbnQiLCJnZXRCdXR0b24iLCJqdW1wQnlTdGVwIiwic3RlcCIsImJvZHlBbmltIiwicGxheSIsIm5vZGUiLCJnZXRQb3NpdGlvbiIsImFkZCIsImNvY29zQW5pbSIsImdldFN0YXRlIiwic3BlZWQiLCJlbWl0IiwiZGVsdGFUaW1lIiwic2V0UG9zaXRpb24iLCJvbk9uY2VKdW1wRW5kIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBRUFDLE1BQUFBLFcsT0FBQUEsVztBQUNBQyxNQUFBQSxXLE9BQUFBLFc7QUFFQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLEUsT0FBQUEsRTtBQUNBQyxNQUFBQSxrQixPQUFBQSxrQjtBQUNBQyxNQUFBQSwwQixPQUFBQSwwQjs7Ozs7O0FBR0FDLE1BQUFBLE8sR0FFQVIsVSxDQUZBUSxPO0FBQ0FD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ckI7O0FBQ0Esa0JBQUksS0FBSzNCLFlBQUwsR0FBb0IsS0FBS0MsU0FBN0IsRUFBd0M7QUFDcEM7QUFDQSxxQkFBS21CLElBQUwsQ0FBVVEsV0FBVixDQUFzQixLQUFLdkIsVUFBM0I7QUFDQSxxQkFBS1AsVUFBTCxHQUFrQixLQUFsQjtBQUNBLHFCQUFLK0IsYUFBTDtBQUNILGVBTEQsTUFLTztBQUNIO0FBQ0EscUJBQUtULElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLbEIsT0FBM0I7QUFDQSxxQkFBS0MsU0FBTCxDQUFlMEIsQ0FBZixHQUFtQixLQUFLNUIsYUFBTCxHQUFxQnlCLFNBQXhDO0FBQ0FyQyxnQkFBQUEsSUFBSSxDQUFDZ0MsR0FBTCxDQUFTLEtBQUtuQixPQUFkLEVBQXVCLEtBQUtBLE9BQTVCLEVBQXFDLEtBQUtDLFNBQTFDO0FBQ0EscUJBQUtnQixJQUFMLENBQVVRLFdBQVYsQ0FBc0IsS0FBS3pCLE9BQTNCO0FBQ0g7QUFDSjtBQUNKOzs7a0NBQ007QUFDSCxpQkFBS0ksYUFBTCxHQUFtQixDQUFuQjtBQUNIOzs7O1FBN0YrQnBCLFM7Ozs7O2lCQVVNLEk7Ozs7Ozs7aUJBR0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZSxcclxuICAgIHN5c3RlbUV2ZW50LFxyXG4gICAgU3lzdGVtRXZlbnQsXHJcbiAgICBFdmVudE1vdXNlLFxyXG4gICAgVmVjMyxcclxuICAgIHYzLFxyXG4gICAgQW5pbWF0aW9uQ29tcG9uZW50LFxyXG4gICAgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnRcclxufSBmcm9tIFwiY2NcIjtcclxuY29uc3Qge1xyXG4gICAgY2NjbGFzcyxcclxuICAgIHByb3BlcnR5XHJcbn0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJwbGF5Y29udHJvbGxlclwiKVxyXG5leHBvcnQgY2xhc3MgcGxheWNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBBbmltYXRpb25Db21wb25lbnRcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgYm9keUFuaW06IEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5AcHJvcGVydHkoe3R5cGU6U2tlbGV0YWxBbmltYXRpb25Db21wb25lbnR9KVxyXG5wdWJsaWMgY29jb3NBbmltOlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50PW51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRKdW1wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9qdW1wU3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1ckp1bXBUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfanVtcFRpbWU6IG51bWJlciA9MC4xO1xyXG4gICAgcHJpdmF0ZSBfY3VySnVtcFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VyUG9zOiBWZWMzID0gdjMoKTtcclxuICAgIHByaXZhdGUgX2RlbHRhUG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIF90YXJnZXRQb3M6IFZlYzMgPSB2MygpO1xyXG4gICAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2N1ck1vdmVJbmRleD0wO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy9zeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsdGhpcy5vbk1vdXNlVXAsdGhpcylcclxuICAgIH1cclxuICAgIHNldElucHV0QWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTW91c2VVcChldmVudDogRXZlbnRNb3VzZSkge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAganVtcEJ5U3RlcChzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keUFuaW0ucGxheSgnb25lU3RlcCcpXHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5QW5pbS5wbGF5KCd0d29TdGVwJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9qdW1wU3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgdGhpcy5fY3VySnVtcFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2N1ckp1bXBTcGVlZCA9IHRoaXMuX2p1bXBTdGVwIC8gdGhpcy5fanVtcFRpbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgVmVjMy5hZGQodGhpcy5fdGFyZ2V0UG9zLCB0aGlzLl9jdXJQb3MsIHYzKHRoaXMuX2p1bXBTdGVwLCAwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jdXJNb3ZlSW5kZXgrPXN0ZXA7XHJcbiAgICAgICB0aGlzLmNvY29zQW5pbS5nZXRTdGF0ZSgnY29jb3NfYW5pbV9qdW1wJykuc3BlZWQ9MztcclxuICAgICAgIHRoaXMuY29jb3NBbmltLnBsYXkoJ2NvY29zX2FuaW1fanVtcCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbk9uY2VKdW1wRW5kKCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb2Nvc0FuaW0ucGxheSgnY29jb3NfYW5pbV9pZGVsJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ2p1bXBFbmQnLHRoaXMuX2N1ck1vdmVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJKdW1wVGltZSA+IHRoaXMuX2p1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbmRcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT25jZUp1bXBFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhUG9zLnggPSB0aGlzLl9jdXJKdW1wU3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl9jdXJQb3MsIHRoaXMuX2N1clBvcywgdGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuX2N1ck1vdmVJbmRleD0wO1xyXG4gICAgfVxyXG59Il19