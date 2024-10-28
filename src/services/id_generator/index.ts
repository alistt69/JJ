const generatedIds = new Set();

export const generateId = () => {

    let id;
    do {id = `ID${Date.now().toString().slice(-2)}${Math.random().toString(36).substring(2, 9).toUpperCase()}`} while (generatedIds.has(id));

    generatedIds.add(id);

    return id;
};
