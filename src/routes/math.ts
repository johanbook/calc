import { evaluate, format, simplify } from 'mathjs';

export default function evaluteExpression(expression: string): string {
	let result = simplify(expression).toString();

	try {
		result = evaluate(result);
	} catch (error) {
		console.warn(`Unable to perform arithmetic evaluation: ${error}`);
	}

	result = format(result);

	return result;
}
