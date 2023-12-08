/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { TurboModule, TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
    readonly add: (x: number, y: number) => number;
    readonly sub: (x: number, y: number) => number;
    readonly mul: (x: number, y: number) => number;
    readonly div: (x: number, y: number) => number;
    readonly the_answer: () => number;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeCalculatorApp'
)
