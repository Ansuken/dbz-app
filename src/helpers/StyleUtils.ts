export const mergeClasses = (...args: (string | false | undefined | null)[]) =>
	args.filter((arg) => !!arg).join(' ')
