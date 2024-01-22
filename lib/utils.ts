export const round2 = (num: number) =>
	Math.round((num + Number.EPSILON) * 100) / 100;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function convertDocToObj(doc: any) {
	doc._id = doc._id.toString();
	return doc;
}
