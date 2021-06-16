import { connect } from "react-redux";
import Animations from "../../pages/animations";
import { clearResourceForm } from "../../actions/form";
import { getAnimationByIdSaga, getAnimationsSaga, removeAnimationSaga } from "../../actions/animationsSaga";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort
} from "../../actions/table";

const mapStateToProps = (state) => {
    return {
        animations: state.table.animations.list,
        count: state.table.animations.count,
        view: state.table.animations.view,
        pagination: state.table.animations.pagination,
        sorting: state.table.animations.sorting,
        filters: state.table.animations.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAnimations: () => dispatch(getAnimationsSaga()),
        onPutDataToForm: (id) => dispatch(getAnimationByIdSaga(id)),
        onRemoveAnimation: (id) => dispatch(removeAnimationSaga(id)),
        onAdd: () => dispatch(clearResourceForm("animations")),
        onChangePage: (page) => dispatch(changeTablePage("animations", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("animations", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("animations", field)),
        onChangeView: (view) => dispatch(changeDataView("animations", view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("animations", filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animations);