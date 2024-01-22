import mongoose from "mongoose";

async function dbConnect() {
	try {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		await mongoose.connect(process.env.MONGODB_URI!);
	} catch (error) {
		throw new Error("Connection failed!");
	}
}

export default dbConnect;
