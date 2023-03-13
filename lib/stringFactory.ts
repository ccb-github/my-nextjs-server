export default function MyString(initString: string) {
	this._self = initString
	console.log(this)
}

MyString.prototype.typeString = function (){
	return (`${this._self[0]?.toUpperCase()}${this._self?.slice(1)}`)
}

export function toSchemaTypestring( str: string ) {
	return `${str[0].toUpperCase()}${str.slice(1)}`
}