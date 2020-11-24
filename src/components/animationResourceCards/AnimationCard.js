import React from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import CardStepper from "./CardStepper";

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
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const AnimationCard = ({
                           id, name, urls, setAnchorEl,
                           onChangeIsOpen, onClickPutAnimationResourceToForm
                       }) => {
    const classes = useStyles();

    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Card className={classes.root}>
            <CardStepper
                urls={urls}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton
                    data-id={id}
                    onClick={() => {
                        handleOpen();
                        onClickPutAnimationResourceToForm({ id, name, urls });
                    }}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>

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
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutAnimationResourceToForm: PropTypes.func.isRequired
};

export default AnimationCard;