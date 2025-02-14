import connectDB from "./db/index.js";

connectDB();

// dotenv.config();
// const app = express();
// console.log(process.env.PORT); // Example usage

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Express App Error:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App listning on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log("ERROR", error);
//         throw error
//     }
// })()

