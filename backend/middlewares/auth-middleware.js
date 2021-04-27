const firebase = require('../firebase');

const authMiddleware = async (request, response, next) => {
    const headerToken = request.headers.authorization;
    if (!headerToken) {
        return response.send({ message: 'No token provided' }).status(401);
    }

    if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
        response.send({ message: 'Invalid token' }).status(401);
    }

    const token = headerToken.split(' ')[1];
    try {
        const { user_id, email } = await firebase.auth().verifyIdToken(token);
        request.loggedUserData = { userId: user_id, email};
        next()
    } catch (error) {
        response.send({ message: 'Could not authorize' }).status(403)
    }
}

module.exports = authMiddleware;