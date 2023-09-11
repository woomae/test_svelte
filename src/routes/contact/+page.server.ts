import { object, string } from 'yup';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		const contactFormSchema = object({
			name: string().required(),
			email: string().required().email(),
			message: string().required()
		});

		try {
			const result = await contactFormSchema.validate(
				{ name, email, message },
				{ abortEarly: false }
			);
			console.log(result);
			return { success: true, status: 'Form is submitted' };
		} catch (error) {
			return error;
		}
	}
};
