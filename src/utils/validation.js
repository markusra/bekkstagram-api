import { validationResult } from 'express-validator';

export const validRequest = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return false;
    }
    return true;
}