import React, { useEffect, useState } from 'react';

interface DraggableCircleProps {
	leftLimit?: number;
	setLeftLimit?: (e: number) => void;
	rightLimit?: number;
	setRightLimit?: (e: number) => void;
}

const DraggableCircle: React.FC<DraggableCircleProps> = ({
	leftLimit = -Infinity,
	setLeftLimit,
	rightLimit = Infinity,
	setRightLimit,
}) => {
	const INITIAL_X = setLeftLimit ? 32 : 592;
	const [dragging, setDragging] = useState(false);
	const [positionX, setPositionX] = useState(INITIAL_X);
	const [initialMouseX, setInitialMouseX] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (dragging) {
				const deltaX = e.clientX - initialMouseX;
				const newPositionX = positionX + deltaX;
				const canMove =
					newPositionX >= 32 &&
					leftLimit < rightLimit - 32 &&
					newPositionX <= 592;
				console.log(leftLimit, rightLimit);
				console.log(initialMouseX);
				if (newPositionX < 32) {
					setPositionX(32);
				} else if (newPositionX > 592) {
					setPositionX(592);
				} else {
					setInitialMouseX(e.clientX);
				}
				if (rightLimit - leftLimit < 32) {
					setLeftLimit;
				}
				// if (!canMove) {
				// 	setLeftLimit && setPositionX(positionX - 1);
				// 	setLeftLimit && setLeftLimit(positionX - 1);
				// 	setRightLimit && setPositionX(positionX + 1);
				// 	setRightLimit && setRightLimit(positionX + 1);
				// 	return;
				// }
				setLeftLimit && setLeftLimit(positionX);
				setRightLimit && setRightLimit(positionX);
				setPositionX(canMove ? newPositionX : positionX);
				// setInitialMouseX(e.clientX);
			}
		};

		const handleMouseUp = () => {
			setDragging(false);
		};

		if (dragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [
		leftLimit,
		rightLimit,
		setLeftLimit,
		setRightLimit,
		dragging,
		initialMouseX,
		positionX,
	]);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		setDragging(true);
		setInitialMouseX(e.clientX);
	};

	return (
		<div className="flex items-center justify-center">
			<div
				className="
					w-8
					h-8
					rounded-full
					bg-sky-500
					cursor-grab
					absolute
					z-10
				"
				style={{ left: `${positionX}px` }}
				onMouseDown={handleMouseDown}
			/>
		</div>
	);
};

export default DraggableCircle;
