export interface SchemaProps {
	name: string;
    optional: boolean;
	type: string;
    indexed: boolean;
	mapTo: string;
	objectType?: string;
}
//TODO keep two field exclusive

export interface SchemaObject {
	name: string,
	primaryKey?: string,
	embedded: boolean,
	properties: {
		[key: string] : SchemaProps
	}
}

export interface SchemaJson {
	[key: string]: SchemaObject
}