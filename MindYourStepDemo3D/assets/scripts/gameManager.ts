import {
    _decorator,
    Component,
    Node,
    Prefab,
    CCInteger,
    instantiate
} from "cc";
const {
    ccclass,
    property
} = _decorator;

enum blockType {
    bt_None,
    bt_Stone
}

@ccclass("gameManager")
export class gameManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({
        type: Prefab
    })
    public cubePrefab: Prefab = null;
    @property({
        type: CCInteger
    })
    public roadLength: Number = 50;

    private _road: number[] = [];

    start() {
        this.generateRoad();
    }

    generateRoad() {
        this.node.removeAllChildren();
        this._road = [];
        this._road.push(blockType.bt_Stone);
        for (let i = 1; i < this.roadLength; i++) {
            if (this._road[i - 1] == blockType.bt_None)
                this._road.push(blockType.bt_Stone);
            else
                this._road.push(Math.floor(Math.random() * 2));
        }
        for (let j = 0; j < this._road.length; j++) {
            let block: Node = this.spawnBlockByType(this._road[j]);
            if (block)
            {
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

    // update (deltaTime: number) {
    // // Your update function goes here.
    // }
}