/* auto-generated by NAPI-RS */
/* eslint-disable */

/* -- banner.d.ts -- */
export type JsFilename =
	| string
	| ((pathData: JsPathData, assetInfo?: AssetInfo) => string);

export type RawLazyCompilationTest = RegExp | ((module: Module) => boolean);

export type AssetInfo = KnownAssetInfo & Record<string, any>;

export interface Module {
	readonly type: string;
	get context(): string | undefined;
	get layer(): string | undefined;
	get factoryMeta(): JsFactoryMeta | undefined
	get useSourceMap(): boolean;
	get useSimpleSourceMap(): boolean;
	buildInfo: Record<string, any>;
	buildMeta: Record<string, any>;
}

interface NormalModuleConstructor {
	new(): NormalModule;
	readonly prototype: NormalModule;
}

export var NormalModule: NormalModuleConstructor;

export interface NormalModule extends Module {
	get resource(): string;
	get request(): string
	get userRequest(): string
	set userRequest(val: string)
	get rawRequest(): string
	get loaders(): Array<JsLoaderItem>
	get resourceResolveData(): JsResourceData | undefined
	get matchResource(): string | undefined
	set matchResource(val: string | undefined)
}

export interface ConcatenatedModule extends Module {
}

export interface ContextModule extends Module {
}

export interface ExternalModule extends Module {
}
/* -- banner.d.ts end -- */

/* -- napi-rs generated below -- */
