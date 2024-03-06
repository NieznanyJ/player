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
    userId: {
        type: Number,
        default: function(){
            return Math.floor(10000000 + Math.random() * 90000000);
        },
        required: true,
        unique: true,
    },
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
        type: [Number],
        required: false,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const WatchlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    watchlist: {
        type: [Number],
        required: false,
        default: [],
    },
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
const MovieWatchlist = mongoose.models.MovieWatchlist || mongoose.model('MovieWatchlist', WatchlistSchema);
const TVWatchlist = mongoose.models.TVWatchlist || mongoose.model('TVWatchlist', WatchlistSchema);

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

async function getUser(username: string) {
    try {
        await connectToDB();
        const user = await User.findOne({ username });

        if (user) {
            return user;
        } else throw new Error("User not found");
    } catch (error) {
        console.error(error);
    }
}

async function addToWatchlist(userId: number, mediaId: number, mediaType: string) {
    try {
        await connectToDB();
        const user = await User.findOne({ userId });
        
        if (user) {
            const existingWatchlist = mediaType === 'movie' ? await MovieWatchlist.findOne({ user: user._id }) : await TVWatchlist.findOne({ user: user._id });

            if (existingWatchlist) {
                if (!existingWatchlist.watchlist.includes(mediaId)){
                    existingWatchlist.watchlist.push(mediaId);
                }
                else{
                    throw new Error("Movie already in watchlist");
                }
                await existingWatchlist.save();
                console.log("Movie added to existing watchlist");
            } else {
                const data = {user: user._id, watchlist: [mediaId]}
                const newWatchlist = mediaType === 'movie' ? new MovieWatchlist(data) : new TVWatchlist(data);
                await newWatchlist.save();
                console.log("Movie added to new watchlist");
            }
        }
    } catch (error) {
        console.error(error);
    }
}

async function getUsersWatchlist(userId: number, mediaType: string){
    try{
        await connectToDB();
        const user = await User.findOne({ userId }); 
        if (user){
            const watchlist = mediaType === 'movie' ? await MovieWatchlist.findOne({ user: user._id }) : await TVWatchlist.findOne({ user: user._id });
            return watchlist;
        }
    }catch(error){
        console.error(error);
    }
}


async function removeFromWatchlist(userId: number, mediaId: number, mediaType: string) {
    try {
        await connectToDB();
        const user = await User.findOne({ userId });

        if (user) {
            const watchlistData = mediaType === 'movie' ?  await MovieWatchlist.findOne({ user: user._id }) : await TVWatchlist.findOne({ user: user._id });

            if (watchlistData) {
                watchlistData.watchlist = watchlistData.watchlist.filter(id => id !== mediaId);

                await watchlistData.save();

                console.log(`Movie removed from watchlist for user ${userId}`);
                return watchlistData;
            } else {
                console.log(`Watchlist not found for user ${userId}`);
            }
        } else {
            console.log(`User not found with userId ${userId}`);
        }
    } catch (error) {
        console.error(error);
    }
}



export { connectToDB, addUser, getUser, addToWatchlist,getUsersWatchlist,removeFromWatchlist, User };
