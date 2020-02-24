import React, { Component } from 'react';
import styles from './../styles.js';
import { withStyles } from '@material-ui/core';

class ChildHeader extends Component {

    render() {
        const { classes } = this.props;

        if (this.props.data) {
            this.props.data.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }
        return (
            <header>
                <div className="row banner">

                    <div className={classes.s01}>
                        <form className={classes.s01Form}>
                            <fieldset className={classes.fieldset}>
                                <legend className={classes.legend}>Discover the Amazing City</legend>
                            </fieldset>
                            <div className={classes.innerForm}>
                                <div className={`${classes.inputField}  ${classes.firstWrap}`} >
                                    <input className={classes.input} id="search" type="text" placeholder="What are you looking for?" />
                                </div>
                                {/* <div class="input-field second-wrap">
        <input id="location" type="text" placeholder="location" />
     </div> */}
                                <div className={`${classes.inputField} ${classes.thirdWrap}`}>
                                    <button className={classes.btnSearch} type="button">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                </div>
            </header>
        );
    }
}

export default withStyles(styles)(ChildHeader);