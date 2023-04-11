/** 防抖计时器 */
let debounceTimer: any;
/** 在立即触发后的一个布尔量指示是否进入防抖路径而非立即路径 */
let debounceInterrupt: boolean;

/**
 * 手写防抖函数
 * @param fn 函数
 * @param delay 延迟
 * @param immediate 布尔值，是否立即执行一次
 * @returns 函数
 */
export function debounce(fn: Function | undefined | null, delay: number | undefined, immediate: boolean | undefined) {
    if (typeof immediate !== 'boolean') {
        immediate = false;
    }
    if (typeof delay !== 'number' || !delay) {
        delay = 1500;
    }
    if (typeof fn !== 'function') {
        console.error('No Function detected!!');
        return;
    }
    return (function (this: any, ...args: any[]) {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceInterrupt = true;
            debounceTimer = null;
            immediate = false;
        }
        if (immediate && !debounceTimer && !debounceInterrupt) {
            // 立即路径
            fn.apply(this, args);
            immediate = false;
            debounceInterrupt = true;
        }
        else {
            // 防抖路径
            debounceTimer = setTimeout(() => {
                fn.apply(this, args);
                debounceTimer = null;
                immediate = true;
                debounceInterrupt = false;
            }, delay);
        }
    })()
}

/**
 * 给接口链接加时间戳防止缓存机制导致302等问题
 * @param url 地址
 * @returns 带时间戳的地址
 */
export function timestamp(url: String) {
    const getTimestamp = new Date().getTime();
    url = url + '?timestamp=' + getTimestamp;
    return url;
}