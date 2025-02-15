import connectDB from "./db/index.js";

connectDB()
.then(()=>{process.env.PORT || 8000 , () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
    
}})
.catch((err)=> {
    console.log("MongoDB connection Failed !", err);
    
})

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

