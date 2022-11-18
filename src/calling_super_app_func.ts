import { MXLifecycleDartClass, MXMirrorObjMethodCall } from "mxflutter";

export class MXMirrorExample extends MXLifecycleDartClass {

    constructor() {
        var newDartMirrorObjArgs = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            args: {
                "key": 123
            }
        });
        super(newDartMirrorObjArgs);

    }

    navigateToMiniApp(packageId, {
        bizPath = ''
    }) {

        let argument = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            funcName: "navigateToMiniApp",
            args: {
                packageId: packageId,
                bizPath: bizPath,
            }
        });

        return this.invokeMirrorObjMethodAsyc(argument);
    }

    release() {
        super.release();
    }

}
