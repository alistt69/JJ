export const generateId = () => {
    const id: string = `ID${Date.now().toString().slice(-2)}${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    return id;
}