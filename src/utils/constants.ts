import {DATA} from 'Interfaces';

export const BASE_SELECTOR = '#application';

export const PLAYER_ID = 1;
export const BOMB_ID = 2;
export const WALL_ID = 3;
export const BRICK_ID = 4;
export const FIRE_ID = 5;
export const BOMB_ON_PLAYER_ID = 6;
export const FIRE_ON_PLAYER_ID = 7;
export const LAVA_ID = 8;
export const SECOND_PLAYER_ID = 9;
export const BOMB_ON_SECOND_PLAYER_ID = 10;
export const FIRE_ON_SECOND_PLAYER_ID = 11;
export const BOMB_ID_2 = 12;
export const ADD_BOMB = 13;
export const ADD_POWER = 14;
export const MAKE_NUCLEAR = 15;
export const FIRE_ON_BRICK_ID = 16;
export const FIRE_ON_WALL_ID = 17;

export const PLAYER_IDS = [PLAYER_ID, SECOND_PLAYER_ID];
export const PLAYERS_ON_MAP = [...PLAYER_IDS, BOMB_ON_PLAYER_ID, BOMB_ON_SECOND_PLAYER_ID];

export const STATIC_MAP: DATA = [
    [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 4, 3, 4, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 3, 4, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 3, 4, 3, 0, 3, 4, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 0, 4, 0, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 0],
    [0, 3, 0, 3, 0, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0, 3, 4, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 3, 0, 3, 0, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0],
];

export const WIDTH = STATIC_MAP[0].length;
export const HEIGHT = STATIC_MAP.length;

const SECRET_MAP: DATA = [
    [0,0,0,0,0,0,0,0,0,0,0, 0,0, 0,0,0,0,0, 0 ,0,0,0,0, 0, 0,0,0,0, 0,0, 0,0,0,0,0,0,0,0,0,0,0],
    [0,0,8,8,0,0,0,8,8,0,0, 0,0, 0,0,4,4,4, 0 ,4,0,0,4, 0, 0,4,4,4, 0,0, 0,0,8,8,0,0,0,8,8,0,0],
    [0,8,8,8,8,0,8,8,8,8,0, 0,0, 0,0,4,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,8,8,8,8,0,8,8,8,8,0],
    [8,8,8,8,8,8,8,8,8,8,8, 0,0, 0,0,4,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 8,8,8,8,8,8,8,8,8,8,8],
    [8,8,8,8,8,8,8,8,8,8,8, 0,0, 0,4,0,0,4, 0 ,4,4,4,4, 0, 4,0,0,4, 0,0, 8,8,8,8,8,8,8,8,8,8,8],
    [0,8,8,8,8,8,8,8,8,8,0, 0,0, 0,4,0,0,4, 0 ,4,4,4,4, 0, 0,4,4,4, 0,0, 0,8,8,8,8,8,8,8,8,8,0],
    [0,0,8,8,8,8,8,8,8,0,0, 0,0, 0,4,4,4,4, 0 ,4,0,0,4, 0, 0,4,0,4, 0,0, 0,0,8,8,8,8,8,8,8,0,0],
    [0,0,0,8,8,8,8,8,0,0,0, 0,0, 4,0,0,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,0,0,8,8,8,8,8,0,0,0],
    [0,0,0,0,8,8,8,0,0,0,0, 0,0, 4,0,0,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,0,0,0,8,8,8,0,0,0,0],
    [0,0,0,0,0,8,0,0,0,0,0, 0,0, 4,0,0,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,0,0,0,0,8,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0, 0,0, 0,0,0,0,0, 0 ,0,0,0,0, 0, 0,0,0,0, 0,0, 0,0,0,0,0,0,0,0,0,0,0],
];

export const TEXT = {
    BEGIN: 'Начать',
    END: 'Завершить',
    YOU_LOST: 'Вы проиграли',
    YOU_WIN: 'Вы выиграли',
};
