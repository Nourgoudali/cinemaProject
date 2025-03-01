    import { addTokenToBlacklist } from "../middleware/tokenBlacklist.js";
    import authService from "../services/authService.js";


    const create = async (req, res) => {
       try {
        const savedClient = await authService.registerClient(req.body);
        res.status(201).json({ message: "client registered successfully", client: savedClient});
       } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating a client" });
       }
    };


    const login = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required!" });
            }
    
            const { token, role } = await authService.login(email, password);
    
            const message = role === "admin" ? "Admin logged in successfully" : "Client logged in successfully";
            return res.status(200).json({ message, token });
        } catch (err) {
            console.error('Error during login:', err.message);
            res.status(401).json({ message: "Invalid email or password!" });
        }
    };

    const logout = (req, res) => {
        const token = req.headers['authorization'].split(' ')[1];

        addTokenToBlacklist(token);

        res.status(200).send({ message: "logged out successfuly."});
    };


    const requestPasswordReset = async (req, res) => {
        try {
            const { email } = req.body;
            const response = await authService.sendResetPasswordEmail(email);
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    const resetPassword = async (req, res) => {
        try {
            const { token } = req.params;
            const { newPassword } = req.body;
            const response = await authService.resetPassword(token, newPassword);
            res.status(200).json(response);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };


    export default { create, login, logout, requestPasswordReset, resetPassword };