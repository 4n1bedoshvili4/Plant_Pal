import styles from "./Toast.module.css";


function Toast({

    show,

    message,

    onUndo

}) {

    if(!show) {

        return null;

    }


    return (

        <div className={styles.toast}>

            <span>

                {message}

            </span>


            <button onClick={onUndo}>

                Undo

            </button>

        </div>

    );

}


export default Toast;