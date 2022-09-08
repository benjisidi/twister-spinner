const COLORS = ["red", "green", "yellow", "blue"];
const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
    }
    return array
}

const randint = (max) => Math.floor(Math.random() * max);
class Player {
    constructor(name) {
        this.limbs = {
            leftFoot: null,
            rightFoot: null,
            leftHand: null,
            rightHand: null,
        };
        this.active = true;
        this.name = name;
    }

    twist() {
        const limbs = shuffle(Object.entries(this.limbs))

        for (let i = 0; i < limbs.length; i++) {
            const [limb, loc] = limbs[i];
            if (loc === null) {
                const newColor = COLORS[randint(COLORS.length)];
                this.limbs[limb] = newColor;
                return [limb, newColor];
            }
            if (i == limbs.length - 1) {
                const newColor = COLORS.filter((x) => x !== loc)[
                    randint(COLORS.length - 1)
                ];
                this.limbs[limb] = newColor;
                return [limb, newColor];
            }
        }
    }
}
export default Player