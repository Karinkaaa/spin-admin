import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, IconButton, TablePagination, Toolbar } from "@material-ui/core";
import { Add, List, ViewModule } from "@material-ui/icons";
import SvgComponent from "../../components/svgComponent";
import DragonBonesResourceTable from "../../components/dragonBonesResourceTable";
import DragonBonesResourceCards from "../../components/dragonBonesResourceCards";
import { ASCENDING_SORT, DESCENDING_SORT, GRID, TABLE } from "../../utils/constants";
import { LINK_TO_DRAGON_BONE_CREATE_FORM } from "../../utils/links";

const DragonBones = ({
                         dragonBones, count, view, pagination, sorting, filters, getDragonBones, onPutDataToForm, onAdd,
                         onRemoveDragonBone, onChangeView, onChangePage, onChangeLimit, onChangeSort, onChangeFilters
                     }) => {
    const { page, limit } = pagination;

    const handleView = () => view === TABLE ? onChangeView(GRID) : onChangeView(TABLE);
    const handleChangeDragonBonesPage = (event, newPage) => onChangePage(newPage);
    const handleChangeDragonBonesLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    useEffect(() => {
        getDragonBones();
    }, [pagination, sorting, filters]);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Link to={LINK_TO_DRAGON_BONE_CREATE_FORM}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                size={"large"}
                                startIcon={<Add/>}
                                onClick={onAdd}
                            >
                                Add dragon bones resource
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={5}>
                        <TablePagination
                            style={{ color: "#cfeaff" }}
                            component={"div"}
                            color={"primary"}
                            colSpan={6}
                            page={page}
                            count={count}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}
                            onChangePage={handleChangeDragonBonesPage}
                            onChangeRowsPerPage={handleChangeDragonBonesLimit}
                        />
                    </Grid>

                    <Grid item xs={1}/>

                    {
                        view === GRID ?
                            <>
                                <Grid item xs={1}>
                                    <IconButton onClick={handleView}>
                                        <List
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={SvgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <DragonBonesResourceCards
                                    dragonBones={dragonBones}
                                    onPutDataToForm={onPutDataToForm}
                                    onRemoveDragonBone={onRemoveDragonBone}
                                />
                            </>
                            :
                            <>
                                <Grid item>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={SvgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <DragonBonesResourceTable
                                    dragonBones={dragonBones}
                                    sorting={sorting}
                                    filters={filters}
                                    onChangeSort={onChangeSort}
                                    onChangeFilters={onChangeFilters}
                                    onPutDataToForm={onPutDataToForm}
                                    onRemoveDragonBone={onRemoveDragonBone}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
};

DragonBones.propTypes = {
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    count: PropTypes.number.isRequired,
    view: PropTypes.string.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf([ASCENDING_SORT, DESCENDING_SORT]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    getDragonBones: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    onRemoveDragonBone: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChangeView: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeLimit: PropTypes.func.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired
};

export default DragonBones;