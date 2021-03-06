import React, { Fragment } from 'react';
import Button from './Button';
import Card from './Card';

import classes from './ErrorModel.model.css';

const ErrorModel =(props)=>{

    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className ={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.action}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </Card>
        </Fragment>
    );

};

export default ErrorModel;
