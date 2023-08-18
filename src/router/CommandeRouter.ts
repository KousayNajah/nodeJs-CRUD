import express from "express";
import { postUser } from "../controllers/postUser";
import { getUser } from "../controllers/getUser";
import { deleteUser } from "../controllers/deleteUser";

const router = express.Router();


/**
 * @swagger
 * /pushCossssssmmand:
 *   post:
 *     summary: post User
 *     tags: [User]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/pushCommand").post(postUser);



export default router;
