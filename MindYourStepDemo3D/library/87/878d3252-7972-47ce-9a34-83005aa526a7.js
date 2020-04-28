System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, Vec3, v3, _dec, _class, _temp, _crd, ccclass, property, playcontroller;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
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
    }],
    execute: function () {
      _cclegacy._RF.push({}, "878d3JSeXJHzpo0gwBapSan", "playcontroller", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("playcontroller", playcontroller = (_dec = ccclass("playcontroller"), _dec(_class = (_temp =
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
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2NvY29zM2RQcm9qZWN0L2NvY29zRGVtby9NaW5kWW91clN0ZXBEZW1vM0QvYXNzZXRzL3NjcmlwdHMvcGxheWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJWZWMzIiwidjMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwbGF5Y29udHJvbGxlciIsIl9zdGFydEp1bXAiLCJfanVtcFN0ZXAiLCJfY3VySnVtcFRpbWUiLCJfanVtcFRpbWUiLCJfY3VySnVtcFNwZWVkIiwiX2N1clBvcyIsIl9kZWx0YVBvcyIsIl90YXJnZXRQb3MiLCJfaXNNb3ZpbmciLCJvbiIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25Nb3VzZVVwIiwiZXZlbnQiLCJnZXRCdXR0b24iLCJqdW1wQnlTdGVwIiwic3RlcCIsIm5vZGUiLCJnZXRQb3NpdGlvbiIsImFkZCIsImRlbHRhVGltZSIsInNldFBvc2l0aW9uIiwib25PbmNlSnVtcEVuZCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBd0JDLE1BQUFBLEksT0FBQUEsSTtBQUFLQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUN4RUMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVFJRyxVLEdBQXNCLEs7Z0JBQ3RCQyxTLEdBQW9CLEM7Z0JBQ3BCQyxZLEdBQXVCLEM7Z0JBQ3ZCQyxTLEdBQW9CLEc7Z0JBQ3BCQyxhLEdBQXdCLEM7Z0JBQ3hCQyxPLEdBQWdCVCxFQUFFLEU7Z0JBQ2xCVSxTLEdBQWtCVixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEM7Z0JBQ3BCVyxVLEdBQW1CWCxFQUFFLEU7Z0JBQ3JCWSxTLEdBQVksSzs7Ozs7O2tDQUNYO0FBQ0w7QUFDQWYsWUFBQUEsV0FBVyxDQUFDZ0IsRUFBWixDQUFlZixXQUFXLENBQUNnQixTQUFaLENBQXNCQyxRQUFyQyxFQUE4QyxLQUFLQyxTQUFuRCxFQUE2RCxJQUE3RDtBQUNIOzs7b0NBRVNDLEssRUFDVjtBQUNJLGdCQUFJQSxLQUFLLENBQUNDLFNBQU4sT0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsbUJBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDSCxhQUZELE1BRU8sSUFBSUYsS0FBSyxDQUFDQyxTQUFOLE9BQXNCLENBQTFCLEVBQTZCO0FBQ2hDLG1CQUFLQyxVQUFMLENBQWdCLENBQWhCO0FBQ0g7QUFDSjs7O3FDQUNVQyxJLEVBQWM7QUFDckIsZ0JBQUksS0FBS1IsU0FBVCxFQUFvQjtBQUNoQjtBQUNIOztBQUNELGlCQUFLUixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsaUJBQUtDLFNBQUwsR0FBaUJlLElBQWpCO0FBQ0EsaUJBQUtkLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxpQkFBS0UsYUFBTCxHQUFxQixLQUFLSCxTQUFMLEdBQWlCLEtBQUtFLFNBQTNDO0FBQ0EsaUJBQUtjLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLYixPQUEzQjtBQUNBVixZQUFBQSxJQUFJLENBQUN3QixHQUFMLENBQVMsS0FBS1osVUFBZCxFQUEwQixLQUFLRixPQUEvQixFQUF3Q1QsRUFBRSxDQUFDLEtBQUtLLFNBQU4sRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBMUM7QUFFQSxpQkFBS08sU0FBTCxHQUFpQixJQUFqQjtBQUNIOzs7MENBR2U7QUFDWixpQkFBS0EsU0FBTCxHQUFpQixLQUFqQjtBQUNIOzs7aUNBQ09ZLFMsRUFBbUI7QUFDdkIsZ0JBQUksS0FBS3BCLFVBQVQsRUFBcUI7QUFDakIsbUJBQUtFLFlBQUwsSUFBcUJrQixTQUFyQjs7QUFDQSxrQkFBSSxLQUFLbEIsWUFBTCxHQUFvQixLQUFLQyxTQUE3QixFQUF3QztBQUNwQztBQUNBLHFCQUFLYyxJQUFMLENBQVVJLFdBQVYsQ0FBc0IsS0FBS2QsVUFBM0I7QUFDQSxxQkFBS1AsVUFBTCxHQUFrQixLQUFsQjtBQUNBLHFCQUFLc0IsYUFBTDtBQUNILGVBTEQsTUFLTztBQUNIO0FBQ0EscUJBQUtMLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLYixPQUEzQjtBQUNBLHFCQUFLQyxTQUFMLENBQWVpQixDQUFmLEdBQW1CLEtBQUtuQixhQUFMLEdBQXFCZ0IsU0FBeEM7QUFDQXpCLGdCQUFBQSxJQUFJLENBQUN3QixHQUFMLENBQVMsS0FBS2QsT0FBZCxFQUF1QixLQUFLQSxPQUE1QixFQUFxQyxLQUFLQyxTQUExQztBQUNBLHFCQUFLVyxJQUFMLENBQVVJLFdBQVYsQ0FBc0IsS0FBS2hCLE9BQTNCO0FBQ0g7QUFDSjtBQUNKOzs7O1FBL0QrQmIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LEV2ZW50TW91c2UgLFZlYzMsdjN9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJwbGF5Y29udHJvbGxlclwiKVxyXG5leHBvcnQgY2xhc3MgcGxheWNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRKdW1wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9qdW1wU3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1ckp1bXBUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfanVtcFRpbWU6IG51bWJlciA9IDAuMTtcclxuICAgIHByaXZhdGUgX2N1ckp1bXBTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1clBvczogVmVjMyA9IHYzKCk7XHJcbiAgICBwcml2YXRlIF9kZWx0YVBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0UG9zOiBWZWMzID0gdjMoKTtcclxuICAgIHByaXZhdGUgX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLHRoaXMub25Nb3VzZVVwLHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZVVwKGV2ZW50OkV2ZW50TW91c2UpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEJ5U3RlcCgxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEJ5U3RlcCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBqdW1wQnlTdGVwKHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXJ0SnVtcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fanVtcFN0ZXAgPSBzdGVwO1xyXG4gICAgICAgIHRoaXMuX2N1ckp1bXBUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJKdW1wU3BlZWQgPSB0aGlzLl9qdW1wU3RlcCAvIHRoaXMuX2p1bXBUaW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLl9jdXJQb3MpO1xyXG4gICAgICAgIFZlYzMuYWRkKHRoaXMuX3RhcmdldFBvcywgdGhpcy5fY3VyUG9zLCB2Myh0aGlzLl9qdW1wU3RlcCwgMCwgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBvbk9uY2VKdW1wRW5kKCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJKdW1wVGltZSA+IHRoaXMuX2p1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbmRcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT25jZUp1bXBFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhUG9zLnggPSB0aGlzLl9jdXJKdW1wU3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl9jdXJQb3MsIHRoaXMuX2N1clBvcywgdGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19