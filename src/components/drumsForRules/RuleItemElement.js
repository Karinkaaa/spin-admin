import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RuleItem from "./RuleItem";

const useStyles = makeStyles(() => ({
    gridContainerItem: {
        justifyContent: "center",
        flexWrap: "nowrap"
    }
}));

const RuleItemElement = ({ ruleItems, y, conditions, onChangeCondition }) => {
    const classes = useStyles();

    return (
        <Grid container item spacing={2} className={classes.gridContainerItem}>
            {
                ruleItems.map((ruleItem, x) =>
                    <RuleItem
                        key={ruleItem.id}
                        ruleItem={ruleItem}
                        x={x}
                        y={y}
                        conditions={conditions}
                        onChangeCondition={onChangeCondition}
                    />
                )
            }
        </Grid>
    );
};

RuleItemElement.propTypes = {
    ruleItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    y: PropTypes.number.isRequired,
    conditions: PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onChangeCondition: PropTypes.func.isRequired
};

export default RuleItemElement;