import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';
import type { SendMailOptions } from 'nodemailer';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			const phone = formData.get('phone');
			const subject = formData.get('subject');
			const body = formData.get('body');
			const html = `<h2>${name}님의 문의 사항</h2><pre>이메일: ${email}<br>전화번호: ${phone}<br><br>본문: ${body}</pre>`;
			const message: SendMailOptions = {
				from: GOOGLE_EMAIL,
				to: GOOGLE_EMAIL,
				subject: subject?.toString(),
				text: body?.toString(),
				html: html
			};

			const sendEmail = async (message: SendMailOptions) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);

			return {
				success: '전송 완료'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
