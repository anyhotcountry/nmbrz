const defs = {
    nmbr0:
        {
            points: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 0, y: 1 },
                { x: 2, y: 1 },
                { x: 0, y: 2 },
                { x: 2, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 }
            ], colour: 'grey'
        },
    nmbr1:
        {
            points: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 2, y: 1 },
                { x: 2, y: 2 },
                { x: 2, y: 3 }
            ], colour: 'brown'
        },
    nmbr2:
        {
            points: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 1, y: 1 },
                { x: 2, y: 1 },
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 }
            ], colour: 'orange'
        },
    nmbr3:
        {
            points: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 2, y: 1 },
                { x: 1, y: 2 },
                { x: 2, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 }
            ], colour: 'yellow'
        },
    nmbr4:
        {
            points: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 1, y: 1 },
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 2, y: 2 },
                { x: 1, y: 3 },
                { x: 2, y: 3 }
            ], colour: 'green'
        },
    nmbr5:
        {
            points: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 0, y: 1 },
                { x: 1, y: 1 },
                { x: 2, y: 1 },
                { x: 2, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 }
            ], colour: 'teal'
        },
    nmbr6:
        {
            points: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 2, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 }
            ], colour: 'blue'
        },
    nmbr7:
        {
            points: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 1, y: 1 },
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 0, y: 3 }
            ], colour: 'purple'
        },
    nmbr8:
        {
            points: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 1, y: 1 },
                { x: 2, y: 1 },
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 }
            ], colour: 'pink'
        },
    nmbr9:
        {
            points: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 0, y: 1 },
                { x: 1, y: 1 },
                { x: 2, y: 1 },
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 0, y: 3 },
                { x: 1, y: 3 }
            ], colour: 'red'
        }
};

const getNumber = (name, angle) => {
    const matrix = [[Math.cos(angle), -Math.sin(angle)], [Math.sin(angle), Math.cos(angle)]];
    const def = defs[name];
    return {
        points: def.points.map(c => ({
            x: matrix[0][0] * (c.x - 1) + matrix[0][1] * (c.y - 2),
            y: matrix[1][0] * (c.x - 1) + matrix[1][1] * (c.y - 2)
        })),
        colour: def.colour
    };
};

export default getNumber;