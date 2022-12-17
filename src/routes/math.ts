import { evaluate, simplify } from 'mathjs';

export default function evaluteExpression(expression: string): string {
	let result = simplify(expression).toString();

	try {
		result = evaluate(result);
	} catch {}

	return result;
}
