
export default () => {
    if (typeof document !== 'undefined')
        document.cookie = `token= ;expires= Thu, 01 Jan 1970 00:00:00 GMT`
}