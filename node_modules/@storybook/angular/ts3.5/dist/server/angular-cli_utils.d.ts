import { Path } from '@angular-devkit/core';
import { RuleSetRule, Configuration } from 'webpack';
export declare function filterOutStylingRules(config: Configuration): RuleSetRule[];
export declare function isBuildAngularInstalled(): boolean;
export declare function getAngularCliParts(cliWebpackConfigOptions: any): {
    cliCommonConfig: Configuration;
    cliStyleConfig: {
        entry: {
            [key: string]: string[];
        };
        module: {
            rules: RuleSetRule[];
        };
        plugins: any[];
    };
};
export declare function normalizeAssetPatterns(assetPatterns: any, dirToSearch: Path, sourceRoot: Path): any;
