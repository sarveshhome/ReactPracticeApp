import React from 'react';
import Button from './Button';
import Card from './Card';

import classes from './ErrorModel.model.css';

const ErrorModel =(props)=>{

    return (
        <div>
            <div className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className ={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.action}>
                    <Button>Ok</Button>
                </footer>
            </Card>
        </div>
    );

};

export default ErrorModel;