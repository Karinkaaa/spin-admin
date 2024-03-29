import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AudioTableHead from "./AudioTableHead";
import AudioTableBody from "./AudioTableBody";
import ConfirmMenu from "../confirmMenu";
import { ASCENDING_SORT, DESCENDING_SORT } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const AudioResourceTable = ({
                                audios, sorting, filters, onChangeSort, onChangeFilters, onRemoveAudio, onPutDataToForm
                            }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <AudioTableHead
                sorting={sorting}
                filters={filters}
                onChangeSort={onChangeSort}
                onChangeFilters={onChangeFilters}
            />

            <AudioTableBody
                audios={audios}
                setAnchorEl={setAnchorEl}
                onPutDataToForm={onPutDataToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onRemoveAudio}
            />
        </Grid>
    );
};

AudioResourceTable.propTypes = {
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf([ASCENDING_SORT, DESCENDING_SORT]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
    onRemoveAudio: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AudioResourceTable;