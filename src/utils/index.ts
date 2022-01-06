export function debounce(this:any,delay: number | undefined, callback: { apply: (arg0: any, arg1: IArguments) => void }) {
    let task: number | undefined
    return ()=> {
        clearTimeout(task)
        task = setTimeout(() => {
            callback.apply(this, arguments)
        }, delay)
    }
}