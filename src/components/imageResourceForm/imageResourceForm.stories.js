import React from "react";
import ImageResourceForm from "../imageResourceForm";
import { MuiThemeProvider } from "material-ui";
import { theme } from "../../utils/theme";

export default {
    title: "Images/imageResourceForm",
    component: ImageResourceForm
};

const Template = (args) =>
    <MuiThemeProvider theme={theme}>
        <ImageResourceForm {...args} />
    </MuiThemeProvider>;


export const Primary = Template.bind({});
Primary.args = {
    name: "",
    isValidName: false,
    url: "",
    isValidUrl: false,
    isOpen: true
};

export const WithValidData = Template.bind({});
WithValidData.args = {
    name: "Boosinka",
    isValidName: true,
    url: "data:image/png;base64,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",
    isValidUrl: true,
    isOpen: true
};

