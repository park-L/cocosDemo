// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class playController extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private _startJump: boolean = false;
    private _jumpStep: number = 0;
    private _curJumpTime: number = 0;
    private _jumpTime: number = 0.1;
    private _curJumpSpeed: number = 0;
    private _curPos: cc.Vec3 = cc.v3();
    private _deltaPos: cc.Vec3 = cc.v3(0, 0, 0);
    private _targetPos: cc.Vec3 = cc.v3();
    private _isMoving = false;

    start () {
     this.node.on(cc.Node.EventType.MOUSE_UP, function(event){
        if (event.getButton() === 0) {
            this.jumpByStep(1);
        } else if (event.getButton() === 2) {
            this.jumpByStep(2);
        }
        }
     ,this);
    }

    onMouseUp(event: cc.Event.EventMouse) {
        if (event.getButton() === 0) {
            this.jumpByStep(1);
        } else if (event.getButton() === 2) {
            this.jumpByStep(2);
        }

    }
    jumpByStep(step:number)
    {
        if(!this._isMoving)
        return;
        this._startJump=true;
        this._curJumpTime=0;
        this._jumpStep = step;
        this._curJumpSpeed=this._jumpStep/this._jumpTime;
        this.node.getPosition(this._curPos);
        cc.Vec3.add(this._targetPos,this._curPos,cc.v3(this._jumpStep,0,0));
        this._isMoving = true;
    }
    onOnceJumpEnd() {
        this._isMoving = false;
    }
    update (deltaTime: number) {
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
                cc.Vec3.add(this._curPos, this._curPos, this._deltaPos);
                this.node.setPosition(this._curPos);
            }
        }
    }
}
