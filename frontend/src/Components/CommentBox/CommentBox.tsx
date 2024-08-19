import { useState } from "react";
import { customerCommentType } from "../../types/global.types";
import "./CommentBox.css";
import { backendUrl } from "../../constants/global.constants";



export default function CommentBox(props: customerCommentType) {
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteState, setDeleteState] = useState(false);

    const handleDeleteClick = () => {
        setDeleteConfirmation(true);
    };

    const handleConfirmClickYes = () => {
        fetch(`${backendUrl}/api/comment/${props.commentId}`, { method: "DELETE" })
            .then((response) => {
                if (response.ok) {
                    setDeleteState(true);
                    setDeleteConfirmation(false);
                }
            })
            .catch((error) => {
                console.log("Error: ", error);
            });

        setDeleteState(true);
    };

    const handleConfirmClickNo = () => {
        setDeleteConfirmation(false);
    };

    return (
        <div className="comment-box">
            {!deleteConfirmation && !deleteState &&
                (
                <div>
                    <div className="comment-title">{props.user.name.toUpperCase()}</div>
                    <div className="comment-text">--&gt; {props.commentText }</div>
                    <div className="comment-delete-button" onClick={handleDeleteClick}>
                        X
                    </div>
                </div>)
            }


            {deleteConfirmation && !deleteState && (
                <div>
                    <div className="confirmation-text">
                        Are you sure you want to delete this comment?
                    </div>
                    <div className="confirmation-buttons">
                        <button
                            className="confirmation-button"
                            id="yes-button"
                            onClick={handleConfirmClickYes}
                        >
                            Yes
                        </button>
                        <button
                            className="confirmation-button"
                            id="no-button"
                            onClick={handleConfirmClickNo}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}

            {deleteState && (
                <div className="delete-state">Comment has been deleted.</div>
            )}
        </div>
    );
}
