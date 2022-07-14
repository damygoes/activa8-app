import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscActivateBreakpoints } from "react-icons/vsc";

import "./App.css";

function App() {
	const BASE_URL = "http://www.boredapi.com/api/activity?type=";

	const [activity, setActivity] = useState([]);
	const [userSelectValue, setUserSelectValue] = useState("");
	const [selected, setSelected] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [done, setDone] = useState(false);

	const getActivity = async () => {
		try {
			let response = await fetch(`${BASE_URL}${userSelectValue}`);
			let data = await response.json();
			// console.log(data);
			setActivity(data);
		} catch (error) {
			console.log("Could not fetch data", error);
		}
	};

	// Framer Motion Animations
	const buttonVariants = {
		hover: {
			scale: 1.3,
		},
		hidden: {
			x: "-100vw",
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
		transition: {
			type: "spring",
			stiffness: 300,
		},
		delayedTransition: {
			type: "spring",
			delay: 0.5,
			duration: 1,
			stiffness: 300,
		},
	};

	const backdrop = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	// **************************** //

	return (
		<>
			<div className="motivate__app">
				<div id="home" className="motivate__app-home">
					<motion.div
						className="motivate__app-home-cta"
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						// initial={{ opacity: 0 }}
						// animate={{ opacity: 1 }}
					>
						<motion.p
							initial={{ opacity: 0, scale: 1 }}
							animate={{ opacity: 1, scale: 1.2 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							Feeling Bored?
						</motion.p>
						{/* <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
                duration: 2,
                type: "spring",
                stiffness: 100,
              }}
            >
              Activ
            </motion.p> */}
					</motion.div>
					<a href="#select">
						<motion.button
							className="motivate__app-home_logo"
							initial={{ opacity: 0, scale: 1 }}
							// initial={{ color: "red" }}
							animate={{
								opacity: 1,
								scale: 1.5,
							}}
							transition={{
								delay: 1,
								duration: 2,
								type: "spring",
								stiffness: 100,
								yoyo: Infinity,
							}}
							whileHover="hover"
						>
							{" "}
							Click Me
							<VscActivateBreakpoints />
						</motion.button>
					</a>
				</div>
				<div id="select" className="motivate__app-select">
					<motion.label
						htmlFor="activity-type"
						variants={buttonVariants}
						initial="hidden"
						animate="visible"
						transition={{ type: "spring", delay: 0.5, duration: 1 }}
					>
						{" "}
						Choose activity type
					</motion.label>
					<motion.select
						name="activity-type"
						id="activity-type"
						onChange={(e) => {
							setUserSelectValue(e.target.value);
							setSelected(true);
						}}
						variants={buttonVariants}
						initial="hidden"
						animate="visible"
						transition="delayedTransition"
						whileHover="hover"
					>
						<option value="none"> none </option>
						<option value="education">Education</option>
						<option value="recreational">Recreational</option>
						<option value="social">Social</option>
						<option value="diy">DIY</option>
						<option value="charity">Charity</option>
						<option value="cooking">Cooking</option>
						<option value="relaxation">Relaxation</option>
						<option value="music">Music</option>
						<option value="busywork">Busywork</option>
					</motion.select>
					{selected && (
						<div className="motivate__app-select_button">
							<a href="#modal">
								<motion.button
									variants={buttonVariants}
									initial="hidden"
									animate="visible"
									whileHover="hover"
									onClick={() => {
										getActivity();
										setShowModal(true);
									}}
								>
									Go
								</motion.button>
							</a>
						</div>
					)}
				</div>
				<AnimatePresence exitBeforeEnter>
					{showModal && (
						<motion.div
							className="motivate__app-modal_backdrop"
							variants={backdrop}
							initial="hidden"
							animate="visible"
						>
							<div id="modal" className="motivate__app-modal">
								<Card className="motivate__app-modal_card">
									<div className="motivate__app-modal_card-svg">
										{" "}
										<a href="#select">
											<AiOutlineCloseCircle
												onClick={() => {
													setShowModal(false);
													setUserSelectValue("");
												}}
											/>
										</a>{" "}
									</div>
									<Card.Body className="motivate__app-modal_card-body">
										<Card.Title className="motivate__app-modal_card-body_title">
											{" "}
											{activity.activity}{" "}
										</Card.Title>
										<Card.Subtitle className="mb-2 text-muted motivate__app-modal_card-body_tags">
											<p>
												Type:{" "}
												<Badge pill bg="light" text="dark">
													{activity.type}
												</Badge>
											</p>
											<p>
												{" "}
												Participants:{" "}
												<Badge pill bg="light" text="dark">
													{activity.participants}
												</Badge>
											</p>
										</Card.Subtitle>
										<div className="motivate__app-modal_card-body_buttons">
											<motion.button
												variants={buttonVariants}
												transition="transition"
												whileHover="hover"
												onClick={() => {
													getActivity();
												}}
											>
												Try Again
											</motion.button>
											<a href="#done">
												<motion.button
													variants={buttonVariants}
													transition="transition"
													whileHover="hover"
													onClick={() => {
														setShowModal(false);
														setDone(true);
													}}
												>
													Love this one
												</motion.button>
											</a>
										</div>
									</Card.Body>
								</Card>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			{done && (
				<AnimatePresence exitBeforeEnter>
					<div id="done" className="motivate__app-done">
						<h1>Congratulations!!!</h1>
						<p>You've found happiness again</p>
						<a href="#home">
							<motion.button
								variants={buttonVariants}
								animate="visible"
								whileHover="hover"
								transition="delayedTransition"
								onClick={() => {
									setDone(false);
									setShowModal(false);
									setSelected(false);
								}}
							>
								Done
							</motion.button>
						</a>
					</div>
				</AnimatePresence>
			)}
		</>
	);
}

export default App;
