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
          }
        }, {
          key: "onOnceJumpEnd",
          value: function onOnceJumpEnd() {
            this._isMoving = false;
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
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3Byb2plY3QvY29jb3NEZW1vL01pbmRZb3VyU3RlcERlbW8zRC9hc3NldHMvc2NyaXB0cy9wbGF5Y29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsIlZlYzMiLCJ2MyIsIkFuaW1hdGlvbkNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInBsYXljb250cm9sbGVyIiwidHlwZSIsIl9zdGFydEp1bXAiLCJfanVtcFN0ZXAiLCJfY3VySnVtcFRpbWUiLCJfanVtcFRpbWUiLCJfY3VySnVtcFNwZWVkIiwiX2N1clBvcyIsIl9kZWx0YVBvcyIsIl90YXJnZXRQb3MiLCJfaXNNb3ZpbmciLCJfY3VyTW92ZUluZGV4IiwiYWN0aXZlIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9VUCIsIm9uTW91c2VVcCIsIm9mZiIsImV2ZW50IiwiZ2V0QnV0dG9uIiwianVtcEJ5U3RlcCIsInN0ZXAiLCJib2R5QW5pbSIsInBsYXkiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJhZGQiLCJlbWl0IiwiZGVsdGFUaW1lIiwic2V0UG9zaXRpb24iLCJvbk9uY2VKdW1wRW5kIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDSUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUztBQUVBQyxNQUFBQSxXLE9BQUFBLFc7QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBRUFDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxFLE9BQUFBLEU7QUFDQUMsTUFBQUEsa0IsT0FBQUEsa0I7Ozs7OztBQUdBQyxNQUFBQSxPLEdBRUFQLFUsQ0FGQU8sTztBQUNBQyxNQUFBQSxRLEdBQ0FSLFUsQ0FEQVEsUTs7Z0NBSVNDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMsVUFRSEMsUUFBUSxDQUFDO0FBQ05FLFFBQUFB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QkFBQUEsSUFBSSxDQUFDK0IsR0FBTCxDQUFTLEtBQUtuQixPQUFkLEVBQXVCLEtBQUtBLE9BQTVCLEVBQXFDLEtBQUtDLFNBQTFDO0FBQ0EscUJBQUtnQixJQUFMLENBQVVLLFdBQVYsQ0FBc0IsS0FBS3RCLE9BQTNCO0FBQ0g7QUFDSjtBQUNKOzs7a0NBQ007QUFDSCxpQkFBS0ksYUFBTCxHQUFtQixDQUFuQjtBQUNIOzs7O1FBdkYrQm5CLFM7Ozs7O2lCQVVNLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgX2RlY29yYXRvcixcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5vZGUsXHJcbiAgICBzeXN0ZW1FdmVudCxcclxuICAgIFN5c3RlbUV2ZW50LFxyXG4gICAgRXZlbnRNb3VzZSxcclxuICAgIFZlYzMsXHJcbiAgICB2MyxcclxuICAgIEFuaW1hdGlvbkNvbXBvbmVudFxyXG59IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7XHJcbiAgICBjY2NsYXNzLFxyXG4gICAgcHJvcGVydHlcclxufSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInBsYXljb250cm9sbGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBwbGF5Y29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IEFuaW1hdGlvbkNvbXBvbmVudFxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBib2R5QW5pbTogQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGFydEp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2p1bXBTdGVwOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VySnVtcFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9qdW1wVGltZTogbnVtYmVyID0wLjE7XHJcbiAgICBwcml2YXRlIF9jdXJKdW1wU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jdXJQb3M6IFZlYzMgPSB2MygpO1xyXG4gICAgcHJpdmF0ZSBfZGVsdGFQb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgIHByaXZhdGUgX3RhcmdldFBvczogVmVjMyA9IHYzKCk7XHJcbiAgICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY3VyTW92ZUluZGV4PTA7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvL3N5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCx0aGlzLm9uTW91c2VVcCx0aGlzKVxyXG4gICAgfVxyXG4gICAgc2V0SW5wdXRBY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Nb3VzZVVwKGV2ZW50OiBFdmVudE1vdXNlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEJ5U3RlcCgxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEJ5U3RlcCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBqdW1wQnlTdGVwKHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5QW5pbS5wbGF5KCdvbmVTdGVwJylcclxuICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlBbmltLnBsYXkoJ3R3b1N0ZXAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydEp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2p1bXBTdGVwID0gc3RlcDtcclxuICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VySnVtcFNwZWVkID0gdGhpcy5fanVtcFN0ZXAgLyB0aGlzLl9qdW1wVGltZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICBWZWMzLmFkZCh0aGlzLl90YXJnZXRQb3MsIHRoaXMuX2N1clBvcywgdjModGhpcy5fanVtcFN0ZXAsIDAsIDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2N1ck1vdmVJbmRleCs9c3RlcDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25PbmNlSnVtcEVuZCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KCdqdW1wRW5kJyx0aGlzLl9jdXJNb3ZlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydEp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VySnVtcFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VySnVtcFRpbWUgPiB0aGlzLl9qdW1wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fdGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0SnVtcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk9uY2VKdW1wRW5kKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0d2VlblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWx0YVBvcy54ID0gdGhpcy5fY3VySnVtcFNwZWVkICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgVmVjMy5hZGQodGhpcy5fY3VyUG9zLCB0aGlzLl9jdXJQb3MsIHRoaXMuX2RlbHRhUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9jdXJQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLl9jdXJNb3ZlSW5kZXg9MDtcclxuICAgIH1cclxufSJdfQ==