const fs = require('fs');
const dir = `${__dirname}/images`;

console.log(dir)

const rarity = [
    {key: '', val: 'original'},
    {key: '_r', val: 'rare'},
    {key: '_sr', val: 'super rare'}
];


const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if (_str.includes(r.key)) {
            itemRarity = r.val;
        };
    });
    return itemRarity;
};


const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
        name = name.replace(r.key, "");
    });
    return name;
};


const getElements = (path) => {
    return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
        return {
            id: index + 1,
            name: cleanName(i),
            fileName: i,
            rarity: addRarity(i)
        };
    });
};



const layers = [
    {
        id: 1,
        name: 'face',
        location: `${dir}/face/`,
        elements: getElements(`${dir}/face/`),
        position: {x: 0, y: 0},
        size: {width: 1024, height: 1024},
    },
    {
        id: 2,
        name: 'leftEye',
        location: `${dir}/leftEye/`,
        elements: getElements(`${dir}/leftEye/`),
        position: {x: 260, y: 388},
        size: {width: 218, height: 164},
    },
    {
        id: 3,
        name: 'rightEye',
        location: `${dir}/rightEye/`,
        elements: getElements(`${dir}/rightEye/`),
        position: {x: 550, y: 388},
        size: {width: 218, height: 164},
    },
    {
        id: 4,
        name: 'mouth',
        location: `${dir}/mouth/`,
        elements: getElements(`${dir}/mouth/`),
        position: {x: 360, y: 690},
        size: {width: 312, height: 134},
    },
    {
        id: 5,
        name: 'nose',
        location: `${dir}/nose/`,
        elements: getElements(`${dir}/nose/`),
        position: {x: 414, y: 556},
        size: {width: 196, height: 126},
    }
]

module.exports = { layers };