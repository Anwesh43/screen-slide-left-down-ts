const w : number = window.innerWidth 
const h : number = window.innerHeight 
const scGap : number = 0.02 
const parts : number = 5 
const strokeFactor : number = 90 
const sizeFactor : number = 2.9 
const colors : Array<string> = [
    "#f44336",
    "#9C27B0",
    "#9C27B0",
    "#BF360C",
    "#2962FF"
]
const backColor : string = "#bdbdbd"
const delay : number = 20 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }
    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}