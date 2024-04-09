interface Environment {
	region: string;
	project: string;
	environment: string;
	ownerAccount: string;
	cicdRepo: string;
	cicdBranch: string;
}

export const environments: { [key: string]: Environment } = {
	dev: {
		region: '',
		project: '',
		environment: '',
		ownerAccount: '',
		cicdRepo: '',
		cicdBranch: '',
	},

	prod: {
		region: '',
		project: '',
		environment: '',
		ownerAccount: '',
		cicdRepo: '',
		cicdBranch: '',
	},
};
