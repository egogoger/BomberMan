import {DATA, POINT} from 'Interfaces';

const EMPTY_MAP : DATA = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

const EMPTY_MAP_POSITIONS: Array<POINT> = [
    {x:0,                       y:0},
    {x:EMPTY_MAP[0].length-1,     y:0},
    {x:0,                       y:EMPTY_MAP.length-1},
    {x:EMPTY_MAP[0].length-1,     y:EMPTY_MAP.length-1},
];

const BASIC_MAP: DATA = [
    [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0],
    [0, 3, 4, 3, 4, 3, 0, 3, 4, 3, 4, 3, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 4, 4, 4, 4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 3, 4, 3, 4, 3, 4, 3, 4, 3, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 3, 4, 3, 4, 3, 4, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 0],
    [0, 3, 0, 3, 0, 3, 0, 3, 4, 3, 0, 3, 0, 3, 4, 3, 4, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 4, 4, 4, 0, 0],
    [0, 3, 0, 3, 0, 3, 0, 3, 4, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0],
];
const BASIC_MAP_POSITIONS: Array<POINT> = [
    {x:0,                       y:0},
    {x:BASIC_MAP[0].length-1,     y:0},
    {x:0,                       y:BASIC_MAP.length-1},
    {x:BASIC_MAP[0].length-1,     y:BASIC_MAP.length-1},
];

const CIRCLE_MAP: DATA = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 4, 4, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 9, 9, 9, 9],
    [9, 9, 9, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 9, 9, 9],
    [9, 9, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 9, 9],
    [9, 9, 0, 4, 4, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 4, 0, 9, 9],
    [9, 0, 0, 4, 0, 0, 3, 4, 4, 0, 0, 0, 0, 4, 4, 3, 0, 0, 4, 0, 0, 9],
    [9, 0, 4, 0, 0, 3, 4, 4, 4, 3, 0, 0, 3, 4, 4, 4, 3, 0, 4, 4, 0, 9],
    [9, 0, 4, 0, 0, 0, 4, 4, 3, 0, 0, 0, 0, 3, 4, 4, 0, 0, 0, 4, 0, 9],
    [0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 8, 8, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 4, 4],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 4, 4],
    [0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 8, 8, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0],
    [9, 0, 4, 0, 0, 0, 4, 4, 3, 0, 0, 0, 0, 3, 4, 4, 0, 0, 0, 4, 0, 9],
    [9, 0, 4, 0, 0, 3, 4, 4, 4, 3, 0, 0, 3, 4, 4, 4, 3, 0, 0, 4, 0, 9],
    [9, 0, 0, 4, 0, 0, 3, 4, 4, 0, 0, 0, 0, 4, 4, 3, 0, 0, 4, 0, 0, 9],
    [9, 9, 0, 4, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 9, 9],
    [9, 9, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 9, 9],
    [9, 9, 9, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 9, 9, 9],
    [9, 9, 9, 9, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 4, 4, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9],
];

const CIRCLE_MAP_POSITIONS: Array<POINT> = [
    {x:3,                           y:3},
    {x:CIRCLE_MAP[0].length-1-3,    y:3},
    {x:3,                           y:CIRCLE_MAP.length-1-3},
    {x:CIRCLE_MAP[0].length-1-3,    y:CIRCLE_MAP.length-1-3},
    {x:(CIRCLE_MAP[0].length-1)/2,  y:(CIRCLE_MAP.length-1)/2},
    {x:(CIRCLE_MAP[0].length-1)/2+1,  y:(CIRCLE_MAP.length-1)/2},
    {x:(CIRCLE_MAP[0].length-1)/2,  y:(CIRCLE_MAP.length-1)/2+1},
    {x:(CIRCLE_MAP[0].length-1)/2+1,  y:(CIRCLE_MAP.length-1)/2+1},
];

export const EMPTY_MAP_NAME = 'empty_map';
export const BASIC_MAP_NAME = 'basic_map';
export const CIRCLE_MAP_NAME = 'circle_map';
// export const SECRET_MAP_NAME = 'secret';
export const LEVEL_NAMES = [EMPTY_MAP_NAME, BASIC_MAP_NAME, CIRCLE_MAP_NAME/*, SECRET_MAP_NAME*/];

export const LEVELS: Map<string, {scheme: DATA, positions: Array<POINT>}> = new Map([
    [EMPTY_MAP_NAME, {scheme: EMPTY_MAP, positions: EMPTY_MAP_POSITIONS}],
    [BASIC_MAP_NAME, {scheme: BASIC_MAP, positions: BASIC_MAP_POSITIONS}],
    [CIRCLE_MAP_NAME, {scheme: CIRCLE_MAP, positions: CIRCLE_MAP_POSITIONS}],
    // [SECRET_MAP_NAME, {scheme: SECRET_MAP, positions: SECRET_MAP_POSITIONS}],
]);


// const SECRET_MAP: DATA = [
//     [0,0,0,0,0,0,0,0,0,0,0, 0,0, 0,0,0,0,0, 0 ,0,0,0,0, 0, 0,0,0,0, 0,0, 0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,8,8,0,0,0,8,8,0,0, 0,0, 0,0,4,4,4, 0 ,4,0,0,4, 0, 0,4,4,4, 0,0, 0,0,8,8,0,0,0,8,8,0,0],
//     [0,8,8,8,8,0,8,8,8,8,0, 0,0, 0,0,4,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,8,8,8,8,0,8,8,8,8,0],
//     [8,8,8,8,8,8,8,8,8,8,8, 0,0, 0,0,4,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 8,8,8,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,8,8,8,8,8, 0,0, 0,4,0,0,4, 0 ,4,4,4,4, 0, 4,0,0,4, 0,0, 8,8,8,8,8,8,8,8,8,8,8],
//     [0,8,8,8,8,8,8,8,8,8,0, 0,0, 0,4,0,0,4, 0 ,4,4,4,4, 0, 0,4,4,4, 0,0, 0,8,8,8,8,8,8,8,8,8,0],
//     [0,0,8,8,8,8,8,8,8,0,0, 0,0, 0,4,4,4,4, 0 ,4,0,0,4, 0, 0,4,0,4, 0,0, 0,0,8,8,8,8,8,8,8,0,0],
//     [0,0,0,8,8,8,8,8,0,0,0, 0,0, 4,0,0,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,0,0,8,8,8,8,8,0,0,0],
//     [0,0,0,0,8,8,8,0,0,0,0, 0,0, 4,0,0,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,0,0,0,8,8,8,0,0,0,0],
//     [0,0,0,0,0,8,0,0,0,0,0, 0,0, 4,0,0,0,4, 0 ,4,0,0,4, 0, 4,0,0,4, 0,0, 0,0,0,0,0,8,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0, 0,0, 0,0,0,0,0, 0 ,0,0,0,0, 0, 0,0,0,0, 0,0, 0,0,0,0,0,0,0,0,0,0,0],
// ];