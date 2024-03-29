import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Grid, TextField, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LINK_TO_IMAGES } from "../../utils/links";

const useStyles = makeStyles((theme) => ({
    paper: {
        background: "lightblue",
        padding: theme.spacing(4, 8),
        borderRadius: "5px"
    },
    btn: {
        marginInlineStart: "auto"
    }
}));

const ImageResourceForm = ({ name, url, onSaveImage, onUpdateImage, onPutDataToForm, onChangeFormData }) => {
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        if (id) onPutDataToForm(id);
    }, []);

    return (
        <div>
            <Toolbar/>
            <Container className={classes.paper}>
                <Grid container spacing={3}>
                    {
                        id && (
                            <Grid item xs={12}>
                                <TextField
                                    label={"ID"}
                                    variant={"outlined"}
                                    value={id}
                                    required
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        )
                    }

                    <Grid item xs={12}>
                        <TextField
                            label={"Name"}
                            placeholder={"Enter the name of image resource"}
                            variant={"outlined"}
                            value={name}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("name", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={"URL"}
                            placeholder={"Enter the url of image resource"}
                            variant={"outlined"}
                            value={url}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("url", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Link to={LINK_TO_IMAGES}>
                            <Button
                                fullWidth
                                color={"secondary"}
                                variant={"contained"}
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={2} className={classes.btn}>
                        <Link to={LINK_TO_IMAGES}>
                            <Button
                                fullWidth
                                color={"primary"}
                                variant={"contained"}
                                onClick={() => {
                                    id ? onUpdateImage(id, { name, url })
                                        : onSaveImage({ name, url });
                                }}
                            >
                                {id ? "Update" : "Save"}
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

ImageResourceForm.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onSaveImage: PropTypes.func.isRequired,
    onUpdateImage: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    onChangeFormData: PropTypes.func.isRequired
};

export default ImageResourceForm;