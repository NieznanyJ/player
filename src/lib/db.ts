
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


async function connectToDB() {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    watchList: {
        type: Array,
        required: false,
        default: [],
    },
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

async function addUser(data: FormData) {
    await connectToDB();

    const saltRounds = 10;
    const plainPassword = data.get("password");

    if (plainPassword === data.get("repeat-password")) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);

        const newUser = new User({
            username: data.get("username"),
            email: data.get("email"),
            password: hashedPassword,
        });

        // add user to db
        try {
            await newUser.save();
            console.log("User added");
           
        } catch (error) {
            console.error(error);
        }
    } else {
        throw new Error("Passwords don't match");
    }
}

export { connectToDB, addUser, User };
