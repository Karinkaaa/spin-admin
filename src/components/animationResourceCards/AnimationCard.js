import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import CardStepper from "./CardStepper";
import { LINK_TO_ANIMATION_UPDATE_FORM } from "../../utils/links";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: theme.palette.blueGrey1Color,
        color: theme.palette.primary3Color
    },
    header: {
        display: "flex",
        alignItems: "center",
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default
    },
    updateIcon: {
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const AnimationCard = ({ id, name, urls, setAnchorEl, onPutDataToForm }) => {
    const classes = useStyles();
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Card className={classes.root}>
            <CardStepper urls={urls}/>

            <CardContent>
                <Typography gutterBottom variant={"h5"} component={"h2"}>
                    {name}
                </Typography>
            </CardContent>

            <CardActions>
                <Link to={LINK_TO_ANIMATION_UPDATE_FORM.replace(":id", id)}>
                    <IconButton
                        data-id={id}
                        onClick={() => onPutDataToForm(id)}
                    >
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>

                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

AnimationCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AnimationCard;