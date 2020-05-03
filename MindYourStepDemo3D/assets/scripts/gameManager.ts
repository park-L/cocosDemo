import {
  _decorator,
  Component,
  Node,
  Prefab,
  CCInteger,
  instantiate,
  game,
  v3,
  LabelComponent,
} from "cc";
import { playcontroller } from "./playcontroller";
const { ccclass, property } = _decorator;

enum blockType {
  bt_None,
  bt_Stone,
}
enum gameState {
  gs_Init,
  gs_Playing,
  sg_End,
}

@ccclass("gameManager")
export class gameManager extends Component {
  /* class member could be defined like this */
  // dummy = '';

  /* use `property` decorator if your want the member to be serializable */
  // @property
  // serializableDummy = 0;

  @property({
    type: Prefab,
  })
  public cubePrefab: Prefab = null;
  @property({
    type: CCInteger,
  })
  public roadLength: Number = 50;

  @property({
    type: playcontroller,
  })
  public playerCtrl: playcontroller = null;

  @property({
    type: Node,
  })
  public startMenu: Node = null;

@property({
    type:LabelComponent
})
public stepsLabel:LabelComponent=null;

  private _curState: gameState = gameState.gs_Init;
  private _road: number[] = [];

  start() {
    this.curState = gameState.gs_Init;
    this.playerCtrl.node.on("jumpEnd", this.onPlayerJumpEnd,this);
  }

  onPlayerJumpEnd(moveIndex: number) {
      this.stepsLabel.string=moveIndex.toString();
    this.checkResult(moveIndex);
  }

  checkResult(moveIndex: number) {
    if (moveIndex <= this.roadLength) {
      if (this._road[moveIndex] == blockType.bt_None) {
        this.curState = gameState.gs_Init;
      } 
    }
    else {
        this.curState = gameState.gs_Init;
      }
  }
  set curState(value: gameState) {
    switch (value) {
      case gameState.gs_Init:
        this.init();
        break;
      case gameState.gs_Playing:
        this.startMenu.active = false;
        this.stepsLabel.string='0';
        setTimeout(() => {
          this.playerCtrl.setInputActive(true);
        }, 0.1);
        break;
      case gameState.sg_End:
        break;
    }

    this._curState = value;
  }
  init() {
    this.startMenu.active = true;
    this.generateRoad();
    this.playerCtrl.setInputActive(false);
    this.playerCtrl.node.setPosition(v3());
    this.playerCtrl.reset();
  }

  onStartuttonClicked() {
    this.curState = gameState.gs_Playing;
  }

  generateRoad() {
    this.node.removeAllChildren();
    this._road = [];
    this._road.push(blockType.bt_Stone);
    for (let i = 1; i < this.roadLength; i++) {
      if (this._road[i - 1] == blockType.bt_None)
        this._road.push(blockType.bt_Stone);
      else this._road.push(Math.floor(Math.random() * 2));
    }

    for (let j = 0; j < this._road.length; j++) {
      let block: Node = this.spawnBlockByType(this._road[j]);
      if (block) {
        this.node.addChild(block);
        block.setPosition(j, -1.5, 0);
      }
    }
  }
  spawnBlockByType(type: blockType) {
    let block = null;
    switch (type) {
      case blockType.bt_Stone:
        block = instantiate(this.cubePrefab);
        break;
    }
    return block;
  }


  // update (deltaTime: number) { // // Your update function goes here. // }
}
