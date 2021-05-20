import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TablePagination, Toolbar } from "@material-ui/core";
import MovieTable from "../../components/movieTable";
import { MOVIE_CREATE_FORM } from "../../utils/links";

const Movie = ({
                   movies, count, pagination, sorting, filters, getMovies, clearForm, removeMovie, onChangeIsOpen,
                   onChangePage, onChangeLimit, onChangeSort, onChangeFilterValue, onClickPutResourceToForm
               }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeMovie(id);
    const handleChangeImagePage = (event, newPage) => onChangePage(newPage);
    const handleChangeImageLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    useEffect(() => {
        getMovies();
    }, [pagination, sorting, filters]);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Link to={MOVIE_CREATE_FORM}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                onClick={clearForm}
                            >
                                Create movie
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
                            onChangePage={handleChangeImagePage}
                            onChangeRowsPerPage={handleChangeImageLimit}
                        />
                    </Grid>

                    <MovieTable
                        movies={movies}
                        sorting={sorting}
                        onDelete={onRemove}
                        onChangeSort={onChangeSort}
                        onChangeFilterValue={onChangeFilterValue}
                        onChangeIsOpen={onChangeIsOpen}
                        onClickPutResourceToForm={onClickPutResourceToForm}
                    />
                </Grid>
            </Container>
        </div>
    );
};

Movie.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            rating: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    count: PropTypes.number.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    getMovies: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    removeMovie: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeLimit: PropTypes.func.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func,
    onClickPutResourceToForm: PropTypes.func
};

export default Movie;