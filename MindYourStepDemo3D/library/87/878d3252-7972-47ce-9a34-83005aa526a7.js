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
          value: function start() {
            // Your initialization goes here.
            systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2NvY29zM2RQcm9qZWN0L2NvY29zRGVtby9NaW5kWW91clN0ZXBEZW1vM0QvYXNzZXRzL3NjcmlwdHMvcGxheWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJWZWMzIiwidjMiLCJBbmltYXRpb25Db21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwbGF5Y29udHJvbGxlciIsInR5cGUiLCJfc3RhcnRKdW1wIiwiX2p1bXBTdGVwIiwiX2N1ckp1bXBUaW1lIiwiX2p1bXBUaW1lIiwiX2N1ckp1bXBTcGVlZCIsIl9jdXJQb3MiLCJfZGVsdGFQb3MiLCJfdGFyZ2V0UG9zIiwiX2lzTW92aW5nIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9VUCIsIm9uTW91c2VVcCIsImV2ZW50IiwiZ2V0QnV0dG9uIiwianVtcEJ5U3RlcCIsInN0ZXAiLCJib2R5QW5pbSIsInBsYXkiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJhZGQiLCJkZWx0YVRpbWUiLCJzZXRQb3NpdGlvbiIsIm9uT25jZUp1bXBFbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVyxPQUFBQSxXO0FBQXdCQyxNQUFBQSxJLE9BQUFBLEk7QUFBS0MsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFBLGtCLE9BQUFBLGtCOzs7Ozs7QUFDNUVDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7O2dDQUdKQyxjLFdBRFpGLE9BQU8sQ0FBQyxnQkFBRCxDLFVBUUhDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNKO0FBQU4sT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHREssVSxHQUFzQixLO2dCQUN0QkMsUyxHQUFvQixDO2dCQUNwQkMsWSxHQUF1QixDO2dCQUN2QkMsUyxHQUFvQixHO2dCQUNwQkMsYSxHQUF3QixDO2dCQUN4QkMsTyxHQUFnQlgsRUFBRSxFO2dCQUNsQlksUyxHQUFrQlosRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDO2dCQUNwQmEsVSxHQUFtQmIsRUFBRSxFO2dCQUNyQmMsUyxHQUFZLEs7Ozs7OztrQ0FDWDtBQUNMO0FBQ0FqQixZQUFBQSxXQUFXLENBQUNrQixFQUFaLENBQWVqQixXQUFXLENBQUNrQixTQUFaLENBQXNCQyxRQUFyQyxFQUE4QyxLQUFLQyxTQUFuRCxFQUE2RCxJQUE3RDtBQUNIOzs7b0NBRVNDLEssRUFDVjtBQUNJLGdCQUFJQSxLQUFLLENBQUNDLFNBQU4sT0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsbUJBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDSCxhQUZELE1BRU8sSUFBSUYsS0FBSyxDQUFDQyxTQUFOLE9BQXNCLENBQTFCLEVBQTZCO0FBQ2hDLG1CQUFLQyxVQUFMLENBQWdCLENBQWhCO0FBQ0g7QUFDSjs7O3FDQUNVQyxJLEVBQWM7QUFDckIsZ0JBQUksS0FBS1IsU0FBVCxFQUFvQjtBQUNoQjtBQUNIOztBQUNELGdCQUFHUSxJQUFJLElBQUUsQ0FBVCxFQUNBO0FBQUMsbUJBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixTQUFuQjtBQUE4QixhQUQvQixNQUVLLElBQUdGLElBQUksSUFBRSxDQUFULEVBQ0w7QUFBQyxtQkFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLFNBQW5CO0FBQThCOztBQUMvQixpQkFBS2xCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxpQkFBS0MsU0FBTCxHQUFpQmUsSUFBakI7QUFDQSxpQkFBS2QsWUFBTCxHQUFvQixDQUFwQjtBQUNBLGlCQUFLRSxhQUFMLEdBQXFCLEtBQUtILFNBQUwsR0FBaUIsS0FBS0UsU0FBM0M7QUFDQSxpQkFBS2dCLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLZixPQUEzQjtBQUNBWixZQUFBQSxJQUFJLENBQUM0QixHQUFMLENBQVMsS0FBS2QsVUFBZCxFQUEwQixLQUFLRixPQUEvQixFQUF3Q1gsRUFBRSxDQUFDLEtBQUtPLFNBQU4sRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBMUM7QUFFQSxpQkFBS08sU0FBTCxHQUFpQixJQUFqQjtBQUNIOzs7MENBR2U7QUFDWixpQkFBS0EsU0FBTCxHQUFpQixLQUFqQjtBQUNIOzs7aUNBQ09jLFMsRUFBbUI7QUFDdkIsZ0JBQUksS0FBS3RCLFVBQVQsRUFBcUI7QUFDakIsbUJBQUtFLFlBQUwsSUFBcUJvQixTQUFyQjs7QUFDQSxrQkFBSSxLQUFLcEIsWUFBTCxHQUFvQixLQUFLQyxTQUE3QixFQUF3QztBQUNwQztBQUNBLHFCQUFLZ0IsSUFBTCxDQUFVSSxXQUFWLENBQXNCLEtBQUtoQixVQUEzQjtBQUNBLHFCQUFLUCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EscUJBQUt3QixhQUFMO0FBQ0gsZUFMRCxNQUtPO0FBQ0g7QUFDQSxxQkFBS0wsSUFBTCxDQUFVQyxXQUFWLENBQXNCLEtBQUtmLE9BQTNCO0FBQ0EscUJBQUtDLFNBQUwsQ0FBZW1CLENBQWYsR0FBbUIsS0FBS3JCLGFBQUwsR0FBcUJrQixTQUF4QztBQUNBN0IsZ0JBQUFBLElBQUksQ0FBQzRCLEdBQUwsQ0FBUyxLQUFLaEIsT0FBZCxFQUF1QixLQUFLQSxPQUE1QixFQUFxQyxLQUFLQyxTQUExQztBQUNBLHFCQUFLYSxJQUFMLENBQVVJLFdBQVYsQ0FBc0IsS0FBS2xCLE9BQTNCO0FBQ0g7QUFDSjtBQUNKOzs7O1FBdEUrQmYsUzs7Ozs7aUJBUUcsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LEV2ZW50TW91c2UgLFZlYzMsdjMsIEFuaW1hdGlvbkNvbXBvbmVudH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInBsYXljb250cm9sbGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBwbGF5Y29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6QW5pbWF0aW9uQ29tcG9uZW50fSlcclxuICAgIHB1YmxpYyBib2R5QW5pbTpBbmltYXRpb25Db21wb25lbnQ9bnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGFydEp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2p1bXBTdGVwOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VySnVtcFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9qdW1wVGltZTogbnVtYmVyID0gMC4xO1xyXG4gICAgcHJpdmF0ZSBfY3VySnVtcFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VyUG9zOiBWZWMzID0gdjMoKTtcclxuICAgIHByaXZhdGUgX2RlbHRhUG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIF90YXJnZXRQb3M6IFZlYzMgPSB2MygpO1xyXG4gICAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsdGhpcy5vbk1vdXNlVXAsdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlVXAoZXZlbnQ6RXZlbnRNb3VzZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wQnlTdGVwKDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wQnlTdGVwKDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGp1bXBCeVN0ZXAoc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RlcD09MSlcclxuICAgICAgICB7dGhpcy5ib2R5QW5pbS5wbGF5KCdvbmVTdGVwJyl9XHJcbiAgICAgICAgZWxzZSBpZihzdGVwPT0yKVxyXG4gICAgICAgIHt0aGlzLmJvZHlBbmltLnBsYXkoJ3R3b1N0ZXAnKX1cclxuICAgICAgICB0aGlzLl9zdGFydEp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2p1bXBTdGVwID0gc3RlcDtcclxuICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VySnVtcFNwZWVkID0gdGhpcy5fanVtcFN0ZXAgLyB0aGlzLl9qdW1wVGltZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICBWZWMzLmFkZCh0aGlzLl90YXJnZXRQb3MsIHRoaXMuX2N1clBvcywgdjModGhpcy5fanVtcFN0ZXAsIDAsIDApKTtcclxuICAgICBcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBvbk9uY2VKdW1wRW5kKCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJKdW1wVGltZSA+IHRoaXMuX2p1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbmRcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT25jZUp1bXBFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhUG9zLnggPSB0aGlzLl9jdXJKdW1wU3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl9jdXJQb3MsIHRoaXMuX2N1clBvcywgdGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19