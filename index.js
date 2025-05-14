const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Server is running...");
});

app.post('/signup', (req, res) => {
    const { userName, email, password, dateOfBirth } = req.body;

    if (!userName) {
        return res.status(400).json({ error: "Username cannot be empty" });
    }

    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }

    if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
    } else if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16" });
    }

    return res.status(200).json({
        message: "Signup successful",
        data: {
            userName,
            email,
            DOB: dateOfBirth
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 

 