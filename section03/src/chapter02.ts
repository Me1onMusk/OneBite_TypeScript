
/* Unknown 타입 */ 
function unKnownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
}

/* Never 타입 */ 
function neverExam() {
    function neverFunc() : never {
        while(true) {}
    };

    let num : number = neverFunc();
    let str : string = neverFunc();
};

/* Void 타입 */ 
function voidExam () {
    function voidFunc () : void {
        console.log("Hello");
    };

    let voidVar : void = undefined;
}

/* Any 타입 */ 
function anyEXam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
}