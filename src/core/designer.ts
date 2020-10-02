import {BASE_SELECTOR, ENEMIES_IDS, ENEMY_ID, TEXT} from 'Constants';
import Data from 'Core/data';
import {removeAllChildrenFrom} from 'Utils/htmlHelpers';

type IProps = {
    onBtnClick: () => void,
    onKeyPress: (ev: KeyboardEvent) => void,
    onPlayersBtnClick: () => void,
    onMapsBtnClick: () => void,
    onEnemiesBtnClick: () => void,
};

class Designer {
    private table: HTMLTableElement;
    private props: IProps;
    private button: HTMLButtonElement;
    private playersButtons: HTMLButtonElement;
    private mapsButton: HTMLButtonElement;
    private enemiesButton: HTMLButtonElement;

    constructor(props: IProps) {
        this.table = null;
        this.props = props;

        this.init();
    }

    public init(): void {
        const app = document.querySelector(BASE_SELECTOR);
        this.button = app.querySelector('.button_start');
        this.button.addEventListener('click', this.handleStartButtonClick.bind(this));

        this.mapsButton = app.querySelector('.button_map');
        this.mapsButton.addEventListener('click', this.handleMapsButtonClick.bind(this));

        this.playersButtons = app.querySelector('.button_players');
        this.playersButtons.addEventListener('click', this.handlePlayersButtonClick.bind(this));

        this.enemiesButton = app.querySelector('.button_enemies');
        this.enemiesButton.addEventListener('click', this.handleEnemiesButtonClick.bind(this))
    }

    public initTable(): void {
        this.table = document.querySelector('.base') as HTMLTableElement;
        removeAllChildrenFrom(this.table);
        this.createTableIn(this.table);
        this.table.style.width = (Data.width*40).toString() + 'px';
        document.body.addEventListener('keydown', this.props.onKeyPress);
        // document.addEventListener('keydown', (ev) => ev.code === 'Enter' && this.handleStartButtonClick.call(this));
    }

    private createTableIn(elem: HTMLTableElement): void {
        elem.className = 'base';
        for (let iii = 0; iii < Data.height; iii++) {
            const newRow = document.createElement('tr');
            for (let jjj = 0; jjj < Data.width; jjj++) {
                newRow.appendChild(document.createElement('td'));
            }
            elem.appendChild(newRow);
        }
    }

    private static createButton(): HTMLElement {
        const elem = document.createElement('button');
        elem.className = 'button';
        return elem;
    }

    private handleEnemiesButtonClick(): void {
        this.mapsButton.blur();
        this.props.onEnemiesBtnClick();
    }

    private handleMapsButtonClick(): void {
        this.mapsButton.blur();
        this.props.onMapsBtnClick();
    }

    public toggleMapsButtonStyle(id: number) : void {
        this.mapsButton.innerText = id.toString();
    }

    private handleStartButtonClick(): void {
        this.button.blur();
        this.props.onBtnClick();
    }

    private handlePlayersButtonClick(): void {
        this.playersButtons.blur();
        this.props.onPlayersBtnClick();
    }

    public toggleEnemiesButtonStyle(withEnemies: boolean) : void {
        this.enemiesButton.innerText = withEnemies ? 'Да' : 'Нет';
    }

    public togglePlayersButtonStyle() : void {
        this.playersButtons.innerText = this.playersButtons.innerText === '1' ? '2' : '1';
    }

    public toggleStartButtonStyle(gameOver: boolean): void {
        this.button.innerText = gameOver ? TEXT.BEGIN : TEXT.END;
        this.button.classList.toggle('button_start', gameOver);
    }

    public updateCanvas(): void {
        const d = Data.data;
        const rows = this.table.rows;
        let value = 0;
        for (let iii = 0; iii < Data.height; iii++) {
            const row = rows.item(iii);
            for (let jjj = 0; jjj < Data.width; jjj++) {
                value = d[iii][jjj];
                if (ENEMIES_IDS.includes(value)) value = ENEMY_ID;
                row.cells.item(jjj).className = `cell cell_${value}`;
            }
        }
    }
}

export default Designer;
